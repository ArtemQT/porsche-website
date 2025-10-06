import type {IUserConfig} from "../types/user-config-types.js";
import {generateConfigHash} from "../helpers/generate-config-hash.js";
import {prisma} from "../config/prisma.js";
import {ApiError} from "../exceptions/api-exception.js";

export class UserConfigService {

	static async addUserConfig(userId: number, modelId: number, userConfig: IUserConfig) {
		const hashedUserConfig = generateConfigHash(userConfig, modelId);

		if (!hashedUserConfig) {
			console.log('No user config found.');
			throw ApiError.badRequest('No user config found.');
		}

		const config = await prisma.userConfig.findUnique({
			where: {
				userId,
				configHash: hashedUserConfig,
			},
		})

		if (config) {
			throw ApiError.badRequest('User configuration already exists');
		}

		await prisma.userConfig.create({
			data: {
				userId,
				modelId,
				configHash: hashedUserConfig,

				exterior: userConfig.exterior,
				wheels: userConfig.wheels,
				interior: userConfig.interior,
				carPackage: userConfig.carPackage,
				exhaust: userConfig.exhaust,

				configPrice: userConfig.configPrice,
				totalPrice: userConfig.totalPrice
			}
		})
	}

	static async getUsersConfig(userId: string) {
		const usersConfig = await prisma.userConfig.findMany({
			where: {
				userId: +userId
			},
			select: {
				exterior: true,
				wheels: true,
				interior: true,
				carPackage: true,
				exhaust: true,
				configPrice: true,
				totalPrice: true,
				configHash: true,
				model: true
			}
		});
		return usersConfig;
	}
}