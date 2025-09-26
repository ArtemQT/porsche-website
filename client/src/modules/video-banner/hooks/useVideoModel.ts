import {useQuery} from "@tanstack/react-query";
import {modelsListApi} from "@shared/api/models-list-api.ts";

export const useVideoModel = () => {
	const model = '911 Carrera GTS';

	const {
		data: response,
		isLoading,
	} = useQuery({
		...modelsListApi.getUseQueryParamsSearchListApi(model)
	})

	return {
		modelName: model,
		modelId: response?.data.models[0].id,
		isLoading,
	}
}