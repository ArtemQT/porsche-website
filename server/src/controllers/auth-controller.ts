import type {Request, Response} from 'express';
import {AuthService} from "../services/auth-service.js";

interface IRegisterData {
	email: string;
	password: string;
}

export class AuthController {

	static async login(req: Request, res: Response) {

	}

	static async register(req: Request, res: Response) {
		try {
			const {email, password}: IRegisterData = req.body;

			const {
				userDto,
				accessToken,
				refreshToken
			} = await AuthService.register(email, password);

			res.cookie('refreshToken', refreshToken, { httpOnly: true, maxAge: 30 * 24 * 60 * 60 * 1000 });

			res.send({
				status: 'user registered',
				data: {
					userDto,
					accessToken,
				}
			});
		} catch (err: unknown) {

			if (err instanceof Error) {
				res.status(500).send({
					message: err.message,
				})
			}

		}
	}

	static async logout(req: Request, res: Response) {

	}
}

