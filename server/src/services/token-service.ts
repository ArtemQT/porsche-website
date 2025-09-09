import jwt from 'jsonwebtoken'
import * as process from "node:process";
import {prisma} from "../config/prisma.js";


interface IPayload {
	id: number
}

export class TokenService {

	static generateTokens(payload: IPayload) {

		const jwtAccessSecret = process.env.JWT_ACCESS_SECRET;
		if (!jwtAccessSecret) {
			throw new Error('JWT_ACCESS_SECRET not provided');
		}

		const jwtRefreshSecret = process.env.JWT_REFRESH_SECRET;
		if (!jwtRefreshSecret) {
			throw new Error('JWT_REFRESH_SECRET not provided');
		}

		const accessToken = jwt.sign(
			payload,
			jwtAccessSecret,
			{
				expiresIn: '30m'
			}
		)

		const refreshToken = jwt.sign(
			payload,
			jwtRefreshSecret,
			{
				expiresIn: '30d'
			}
		)

		return {
			accessToken,
			refreshToken
		}
 	}

	static async saveToken(userId: number, token: string) {
		const tokenCandidate = await prisma.token.findUnique({where: {userId}})

		if (tokenCandidate) {
			await prisma.token.update({
				where: {userId},
				data: {token}
			})
		}

		await prisma.token.create({
			data: {userId, token}
		})
	}
}