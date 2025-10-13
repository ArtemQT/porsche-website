import {queryOptions, useQueries} from "@tanstack/react-query";
import {modelsListApi} from "@shared/api/models-list-api.ts";
import type {ISearchItemLink} from "../types/types.ts";
import {RoutePaths} from "@config/route-paths.ts";

export const useNewInModels = () => {
	const newInModels = [
		"911 Carrera GTS",
		"911 GT3",
		"911 Turbo S",
		"718 Cayman GT4 RS",
	];

	const modelQueries = useQueries({
		queries: newInModels.map(modelName => queryOptions({
			queryKey: ['car-model', modelName],
			queryFn: async ({signal}: { signal: AbortSignal }) => {
				const response = await modelsListApi.getModelsListBySearch(modelName, signal)
				return {
					modelName: response.data.models[0].modelName,
					modelId: response.data.models[0].id
				}
			},
			staleTime: Infinity
		}))
	})

	const isLoading = modelQueries.some(query => query.isLoading)
	const isError = modelQueries.some(query => query.isError)
	const isSuccess = modelQueries.every(query => query.isSuccess)

	const newInList: ISearchItemLink[] | undefined = isSuccess ? modelQueries.map(((query) => {
		const modelData = query.data;
		return {
			id: modelData.modelId,
			label: modelData.modelName,
			link: RoutePaths.modelConfigPage + `/${modelData.modelId}`,
		}
	})) : undefined

	return {
		newInList,
		isLoading,
		isError,
	}
}