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
		} = TokenService.generateTokens({...userDto});
		await TokenService.saveToken(user.id, refreshToken);

		return {
			userDto,
			accessToken,
			refreshToken
		}
	}

	static async login(email: string, password: string) {
		const user = await prisma.user.findUnique({where: {email}});

		if (!user) {
			throw ApiError.unauthorized(`User with email "${email}" does not exist`);
		}

		const isEqualPassword = await bcrypt.compare(password, user.password);
		if (!isEqualPassword) {
			throw ApiError.unauthorized(`Wrong password`);
		}

		const userDto = new UserDto(user);
		const {
			accessToken,
			refreshToken
		} = TokenService.generateTokens({...userDto})

		await TokenService.saveToken(user.id, refreshToken);

		return {
			userDto,
			accessToken,
			refreshToken
		}
	}
}