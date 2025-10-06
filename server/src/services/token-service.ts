import jwt from 'jsonwebtoken'
import * as process from "node:process";
import {prisma} from "../config/prisma.js";


export interface IPayload {
	id: string,
	email: string,
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
			return
		}

		await prisma.token.create({
			data: {userId, token}
		})
	}

	static async removeToken(token: string) {
		await prisma.token.delete({where: {token}})
	}

	static validateAccessToken(accessToken: string) {
		try {
			const jwtAccessSecret = process.env.JWT_ACCESS_SECRET;
			if (!jwtAccessSecret) {
				throw new Error('JWT_ACCESS_SECRET not provided');
			}

			return jwt.verify(accessToken, jwtAccessSecret) as IPayload;
		} catch (err) {
			return null;
		}
	}

	static validateRefreshToken(refreshToken: string) {
		try {
			const jwtRefreshSecret = process.env.JWT_REFRESH_SECRET;
			if (!jwtRefreshSecret) {
				throw new Error('JWT_REFRESH_SECRET not provided');
			}

			return jwt.verify(refreshToken, jwtRefreshSecret) as IPayload;
		} catch (err) {
			return null;
		}
	}
}