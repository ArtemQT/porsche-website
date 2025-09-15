import {ApiError} from "../exceptions/api-exception.js";
import {prisma} from "../config/prisma.js";
import {ModelSeries} from "@prisma/client";

export class CarModelsService {

	static async getCarModelsByRow(row: string | undefined) {
		if (!row) {
			throw ApiError.badRequest('Parameter "row" on URL is required');
		}

		const allModelSeriesValues = Object.values(ModelSeries);

		const modelSeries = allModelSeriesValues.find(
			(value) => value.endsWith(row)
		)
		if (!modelSeries) {
			throw ApiError.badRequest(`No models found for row: ${row}`);
		}

		const carModels = await prisma.carModels.findMany({where: {modelSeries}})
		const carRow = row.substring(row.length - 3)

		return {
			carModels,
			carRow
		};
	}
}