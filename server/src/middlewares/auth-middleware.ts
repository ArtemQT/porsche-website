import type {Request, Response, NextFunction} from "express";
import {ApiError} from "../exceptions/api-exception";
import {TokenService} from "../services/token-service";

export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
	try {
		const authHeader = req.headers.authorization;
		if (!authHeader) {
			throw ApiError.unauthorized('Authorization header is missing');
		}

		const authToken = authHeader.split(' ')[1];
		if (!authToken) {
			throw ApiError.unauthorized('Authorization token is missing');
		}

		const userData = TokenService.validateAccessToken(authToken);
		if (!userData) {
			throw ApiError.unauthorized('Access token is invalid');
		}

		req.user = userData;
		next();
	} catch (err) {
		next(err);
	}
}