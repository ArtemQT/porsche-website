import type {Request, Response, NextFunction} from "express";
import {ModelDetailService} from "../services/model-detail-service.js";

export class ModelDetailController {

	static async getModelDetailById(req: Request, res: Response, next: NextFunction) {
		try {
			const modelId = req.query.modelId as string | undefined;

			const modelDetail = await ModelDetailService.getModelDetailById(modelId);

			res.status(200).json({
				modelDetail,
				message: 'Model details retrieved successfully.',
			});
		} catch (err) {
			next(err);
		}
	}
}