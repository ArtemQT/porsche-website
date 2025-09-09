import type {NextFunction, Request, Response} from 'express';
import {AuthService} from "../services/auth-service.js";

interface IAuthData {
	email: string;
	password: string;
}

export class AuthController {

	static async login(req: Request, res: Response, next: NextFunction) {

	}

	static async register(req: Request, res: Response, next: NextFunction) {
		try {
			const {email, password}: IAuthData = req.body;
			const {
				accessToken,
				refreshToken,
				userDto
			} = await AuthService.register(email, password);

			res.cookie('refreshToken', refreshToken, {
				maxAge: 1000 * 60 * 60 * 24 * 30,
				httpOnly: true,
				secure: true
			});

			res.status(201).json({
				data: {
					accessToken,
					userDto
				},
			})
		} catch (err: unknown) {
			next(err)
		}
	}

	static async logout(req: Request, res: Response, next: NextFunction) {

	}
}

