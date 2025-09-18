import axios, {type AxiosInstance} from "axios";
import {baseApiUrl} from "@config/api-config.ts";
import {queryOptions} from "@tanstack/react-query";
import {type IGetModelsListResponse, MODELS_SERIES} from "../types/models-list-types.ts";

class ModelsListApi {
	private modelsListApi: AxiosInstance;
	private readonly cacheKey: string;


	constructor() {
		this.modelsListApi = axios.create({
			baseURL: `${baseApiUrl}/car-models`,
		})

		this.cacheKey = 'models-list'
	}

	getUseQueryParams = (modelsRow: MODELS_SERIES | null) => {
		return queryOptions({
			queryKey: [this.cacheKey, modelsRow],
			queryFn: ({signal}) => this.getModelsList(modelsRow, signal)
		})
	}

	getModelsList = async (modelsRow: MODELS_SERIES | null, signal: AbortSignal) => {
		const response = await this.modelsListApi.get<IGetModelsListResponse>(`/`, {
			params: {
				row: modelsRow
			},
			signal
		});
		return response.data;
	}
}

export const modelsListApi = new ModelsListApi();