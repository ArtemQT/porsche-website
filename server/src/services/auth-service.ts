import {prisma} from "../config/prisma.js";
import bcrypt from "bcrypt";
import {UserDto} from '../dto/user-dto.js'
import {TokenService} from "./token-service.js";
import {ApiError} from "../exceptions/api-exception.js";

export class AuthService {
	static async register(email: string, password: string) {
		const candidate = await prisma.user.findUnique({where: {email}});
		if (candidate) {
			throw ApiError.conflict(`User with email "${email}" already exists`);
		}

		const hashedPassword = await bcrypt.hash(password, 12);

		const user = await prisma.user.create({
			data: {
				email,
				password: hashedPassword,
			}
		})
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