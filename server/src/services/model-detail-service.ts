import {ApiError} from "../exceptions/api-exception.js";
import {prisma} from "../config/prisma.js";

export class ModelDetailService {

	static async getModelDetailById(modelId: string | undefined) {
		if (!modelId) {
			throw ApiError.badRequest('No model id provided.');
		}

		const modelDetail = await prisma.modelDetail.findUnique({
			where: {carModelId: +modelId},
			select: {
				price: true,
				previewImages: true,
				carModel: {
					select: {
						modelName: true
					}
				}
			},
		})

		if (!modelDetail) {
			throw ApiError.badRequest(`No model provided for modelId=${modelId}`);
		}

		const modelName = modelDetail.carModel.modelName;
		const modelSeries = modelName.split(' ')[0];
		const parsedModelName = modelName.split(' ').slice(1).join(' ');

		if (!modelSeries) {
			throw Error('There is no row in CarModel.modelName');
		}

		const modelDetailDto = {
			modelName: parsedModelName,
			modelSeries,
			price: modelDetail.price,
			previewImages: modelDetail.previewImages,
		}

		return modelDetailDto;
	}
}