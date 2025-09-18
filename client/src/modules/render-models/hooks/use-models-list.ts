import {useQuery} from "@tanstack/react-query";
import {modelsListApi} from "@shared/api/models-list-api.ts";
import {useParams} from "react-router-dom";
import {ModelCardSkeleton} from "../components/model-card-skeleton";
import {getModelSeries} from "@shared/helpers/get-model-series.ts";

export const useModelsList = () => {
	const {row} = useParams();
	const modelsSeries = getModelSeries(row);

	const {
		data: modelsListApiResponse,
		error: modelsListError,
		isLoading,
	} = useQuery({
		...modelsListApi.getUseQueryParams(modelsSeries),
	})

	const skeletonsList = [
		ModelCardSkeleton,
		ModelCardSkeleton,
		ModelCardSkeleton,
		ModelCardSkeleton,
	]

	return {
		modelsList: modelsListApiResponse?.data.carModels,
		modelsRow: modelsListApiResponse?.data.carRow,
		modelsListError,
		isLoading,
		skeletonsList,
	}
}