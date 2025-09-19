import {useQuery} from "@tanstack/react-query";
import {modelsListApi} from "@shared/api/models-list-api.ts";
import {ModelCardSkeleton} from "../components/model-card-skeleton";
import {useFilters} from "../../models-filter/hooks/use-filters.ts";

export const useModelsList = () => {

	const {
		filterForm
	} = useFilters()

	const {
		data: modelsListApiResponse,
		error: modelsListError,
		isLoading,
	} = useQuery({
		...modelsListApi.getUseQueryParamsListApi(filterForm.modelRow),
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