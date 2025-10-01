import type {IUserConfig} from "../types/user-config-types.js";
import {generateConfigHash} from "../helpers/generate-config-hash.js";
import {prisma} from "../config/prisma.js";
import {ApiError} from "../exceptions/api-exception.js";

export class UserConfigService {

	static async addUserConfig( userId: number, modelId: number, userConfig: IUserConfig) {
		const hashedUserConfig = generateConfigHash(userConfig);

		const config = await prisma.userConfig.findUnique({
			where: {
				userId,
				configHash: hashedUserConfig,
			}
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
}