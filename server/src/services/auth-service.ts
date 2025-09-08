import {prisma} from "../config/prisma.js";
import bcrypt from "bcrypt";
import {UserDto} from '../dto/user-dto.js'
import {TokenService} from "./token-service.js";

export class AuthService {
	static async register(email: string, password: string) {
		const candidate = await prisma.user.findUnique({where: {email}});
		if (candidate) {
			throw new Error('User already exists');
		}

		const hashedPassword = await bcrypt.hash(password, 12);

		const user = await prisma.user.create({
			data: {email, password: hashedPassword}
		});

		const userDto = new UserDto(user);

		const {
			accessToken,
			refreshToken
		} = TokenService.generateTokens({id: user.id});

		await TokenService.saveToken(user.id, refreshToken);

		return {
			userDto,
			accessToken,
			refreshToken
		}
	}
}