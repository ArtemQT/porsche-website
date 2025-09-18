import {useQuery} from "@tanstack/react-query";
import {modelsListApi} from "../../../shared/api/models-list-api.ts";
import {MODELS_SERIES} from "../../../shared/types/models-list-types.ts";
import {useParams} from "react-router-dom";
import {ModelCardSkeleton} from "../components/model-card-skeleton";

const createModelsSeries = (modelsRow: string | undefined) => {
	if (!modelsRow) {
		throw new Error('Row must be provided in dynamic parameters');
	}

	const modelsSeriesValues = Object.values(MODELS_SERIES);
	const modelsSeries = modelsSeriesValues.find(series => series.endsWith(modelsRow));

	if (!modelsSeries) {
		throw new Error(`Model series does not exist for the given row ${modelsRow}`);
	}

	return modelsSeries;
}

export const useModelsList = () => {
	const {row} = useParams();
	const modelsSeries = createModelsSeries(row);

	const {
		data: modelsListApiResponse,
		error: modelsListError,
		isLoading,
	} = useQuery({
		...modelsListApi.getUseQueryParams(modelsSeries),
		initialData: undefined
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