import axios, {type AxiosInstance} from "axios";
import {baseApiUrl} from "@config/api-config.ts";
import {queryOptions} from "@tanstack/react-query";
import type {IModelDetailResponse} from "@shared/types/model-config-types.ts";

class ModelConfigApi {

	private modelDetailApi: AxiosInstance;
	private readonly cacheKey: string;

	constructor() {
		this.modelDetailApi = axios.create({
			baseURL: baseApiUrl + '/model-detail'
		});

		this.cacheKey = 'model-detail';
	}

	getUseQueryParams(id: string) {
		return queryOptions({
			queryKey: [this.cacheKey, id],
			queryFn: ({signal}) => this.getModelDetail(id, signal),

			staleTime: 1000 * 60 * 60,
			gcTime: 1000 * 60 * 60 * 24,
		})
	}

	async getModelDetail(modelId: string, signal: AbortSignal) {
		const response = await this.modelDetailApi.get<IModelDetailResponse>('/', {
			params: {
				modelId: modelId,
			},
			signal
		})
		return response.data;
	}
}

export const modelDetailApi = new ModelConfigApi();