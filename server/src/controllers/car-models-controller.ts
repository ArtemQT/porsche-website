import type {NextFunction, Request, Response} from 'express';
import {CarModelsService} from "../services/car-models-service.js";

export class CarModelsController {

	static async getCarModelsByRow(req: Request, res: Response, next: NextFunction) {
		try {
			const row = req.params.row;

			const carModels = await CarModelsService.getCarModelsByRow(row);

			res.status(200).json({
				data: {
					carModels,
					carRow: row
				},
				message: `Car models for row ${row} successfully received`,
			});

		} catch (err) {
			next(err);
		}
	}
}