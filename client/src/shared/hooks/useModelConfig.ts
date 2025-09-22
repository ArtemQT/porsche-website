import {useParams} from "react-router-dom";
import {useQuery} from "@tanstack/react-query";
import {modelDetailApi} from "@shared/api/model-config-api.ts";

export const useModelConfig = () => {
	const {modelId} = useParams();
	if (!modelId) {
		throw new Error('rowId must be provided for useModelDetail');
	}

	const {
		data: modelDetailResponse,
		error,
		isLoading
	} = useQuery({
		...modelDetailApi.getUseQueryParams(modelId)
	})

	return {
		model: modelDetailResponse?.modelDetail,
		isLoadingModel: isLoading,
		error
	}
}