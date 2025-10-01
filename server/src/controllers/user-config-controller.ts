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
}