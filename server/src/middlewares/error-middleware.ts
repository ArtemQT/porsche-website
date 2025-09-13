import type {Request, Response, NextFunction} from 'express';
import {ApiError} from "../exceptions/api-exception.js";

export const errorMiddleware = (err: unknown, req: Request, res: Response, next: NextFunction) => {
	if (err instanceof ApiError) {
		return res.status(err.status).json({message: err.message});
	}
	if (err instanceof Error) {
		res.status(500).send({message: err.message});
	}
}