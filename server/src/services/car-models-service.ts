import {ApiError} from "../exceptions/api-exception.js";
import {prisma} from "../config/prisma.js";
import {ModelSeries} from "@prisma/client";

export class CarModelsService {

	static async getCarModelsByRow(row: string | undefined) {
		if (!row) {
			const carModels = await prisma.carModels.findMany();
			return {
				carModels,
				row: undefined
			}
		}

		const allModelSeriesValues = Object.values(ModelSeries);

		const modelSeries = allModelSeriesValues.find(
			(value) => value === row
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

	static async searchCarModelsByQuery(search: string | undefined) {
		if (!search) {
			throw ApiError.badRequest(`query parameter search is required`);
		}

		if (search.trim().length === 0) {
			return [];
		}

		const models = await prisma.carModels.findMany({
			where: {
				modelName: {
					contains: search,
					mode: 'insensitive'
				}
			}
		});

		return models;
	}
}