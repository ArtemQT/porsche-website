import {useQuery} from "@tanstack/react-query";
import {modelsListApi} from "../api/models-list-api.ts";
import {MODELS_SERIES} from "../types/models-list-types.ts";
import {useParams} from "react-router-dom";

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
		isLoading
	} = useQuery({
		...modelsListApi.getUseQueryParams(modelsSeries),
	})

	return {
		modelsList: modelsListApiResponse?.data.carModels,
		modelsListError,
		isLoading,
	}
}