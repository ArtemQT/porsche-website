import type {NextFunction, Request, Response} from 'express';
import {ApiError} from "../exceptions/api-exception.js";
import {UserConfigService} from "../services/user-config-service.js";
import type {IRequestAddConfig, IUserConfig} from "../types/user-config-types.js";
import {validateBody} from "../helpers/validate-body.js";

export class UserConfigController {

	static async addUserConfig(req: Request, res: Response, next: NextFunction) {
		try {
			const body = req.body;
			if (!validateBody(body)) {
				throw ApiError.badRequest('Missing required fields in body');
			}

			const reqBody = body as IRequestAddConfig;
			const userId = req.user?.id!;

			await UserConfigService.addUserConfig(+userId, reqBody.modelId, reqBody.config);

			res.status(201).json({
				message: 'Configuration created successfully',
			});

		} catch (err) {
			next(err);
		}
	}

	static async getUsersConfig(req: Request, res: Response, next: NextFunction) {
		try {
			const userIdFromJwt = req.user?.id;
			if (!userIdFromJwt) {
				throw ApiError.badRequest('Missing required fields in userIdFromJwt');
			}

			const userConfigs = await UserConfigService.getUsersConfig(userIdFromJwt);

			res.status(200).json({
				userConfigs,
				message: 'User configs retrieved successfully',
			})

		} catch (err) {
			next(err);
		}
	}

	static async deleteUserConfig(req: Request, res: Response, next: NextFunction) {
		try {
			const configHash = req.params.configHash;
			const userId = req.user?.id;
			await UserConfigService.deleteUserConfig(userId, configHash);

			res.status(200).json({
				message: 'Configuration deleted successfully',
			})
		} catch (err) {
			next(err)
		}
	}
}