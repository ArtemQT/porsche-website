import type {NextFunction, Request, Response} from 'express';
import {CarModelsService} from "../services/car-models-service.js";

export class CarModelsController {

	static async getCarModelsByRow(req: Request, res: Response, next: NextFunction) {
		try {
			const row = req.query.row as string || undefined;

			const {
				carModels,
				carRow
			} = await CarModelsService.getCarModelsByRow(row);

			res.status(200).json({
				data: {
					carModels,
					carRow
				},
				message: `Car models successfully received`,
			});

		} catch (err) {
			next(err);
		}
	}
}