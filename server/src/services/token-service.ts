import jwt from 'jsonwebtoken'
import * as process from "node:process";
import {prisma} from "../config/prisma.js";


interface IPayload {
	id: number
}

export class TokenService {

	static generateTokens(payload: IPayload) {

		const accessSecretKey = process.env.JWT_ACCESS_SECRET;
		if (!accessSecretKey) {
			throw new Error('JWT_ACCESS_SECRET is not defined in environment variables')
		}

		const refreshSecretKey = process.env.JWT_REFRESH_SECRET;
		if (!refreshSecretKey) {
			throw new Error('JWT_REFRESH_SECRET is not defined in environment variables')
		}

		const accessToken = jwt.sign(
			payload,
			accessSecretKey,
			{
				expiresIn: '30m'
			}
		)

		const refreshToken = jwt.sign(
			payload,
			refreshSecretKey,
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
		const tokenCandidate = await prisma.token.findUnique({where: {userId}});
		if (tokenCandidate) {
			prisma.token.update({
				where: {userId},
				data: {token}
			})
		}

		const refreshToken = await prisma.token.create({
			data: {
				userId,
				token
			}
		})
	}
}