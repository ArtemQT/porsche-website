import type {NextFunction, Request, Response} from 'express';
import {AuthService} from "../services/auth-service.js";

interface IAuthData {
	email: string;
	password: string;
}

export class AuthController {

	static async login(req: Request, res: Response, next: NextFunction) {
		try {
			const {email, password}: IAuthData = req.body;

			const {
				accessToken,
				refreshToken,
				userDto
			} = await AuthService.login(email, password);

			res.cookie('refreshToken', refreshToken, {
				maxAge: 1000 * 60 * 60 * 24 * 30,
				httpOnly: true,
				secure: true
			});

			res.status(200).json({
				data: {
					accessToken,
					userDto
				},
				message: 'User successfully logged in'
			})

		} catch (err: unknown) {
			next(err);
		}
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
				message: 'User registered successfully'
			})
		} catch (err: unknown) {
			next(err)
		}
	}

	static async logout(req: Request, res: Response, next: NextFunction) {
		try {
			const token: string = req.cookies.refreshToken;
			await AuthService.logout(token);
			res.clearCookie('refreshToken');
			res.status(200).json({
				message: 'User successfully logged out'
			})
		} catch (err: unknown) {
			next(err);
		}
	}

	static async refresh(req: Request, res: Response, next: NextFunction) {
		try {
			const refreshToken: string | undefined = req.cookies.refreshToken;

			const {
				userDto,
				newAccessToken,
				newRefreshToken
			} = await AuthService.refresh(refreshToken);

			res.cookie('refreshToken', newRefreshToken, {
				maxAge: 1000 * 60 * 60 * 24 * 30,
				httpOnly: true,
				secure: true,
			})

			res.status(200).json({
				data: {
					accessToken: newAccessToken,
					userDto
				},
				message: 'Tokens successfully refreshed'
			})

		} catch (err) {
			next(err);
		}
	}
}

