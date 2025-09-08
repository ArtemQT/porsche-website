import type {Request, Response} from 'express';

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

		} catch (err) {
			console.log(err);
		}
	}

	static async logout(req: Request, res: Response) {

	}
}

