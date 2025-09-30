import type {IModelDetail} from "@shared/types/model-config-types.ts";
import {createContext, type FC, type PropsWithChildren} from "react";
import {useParams} from "react-router-dom";
import {useQuery} from "@tanstack/react-query";
import {modelDetailApi} from "@shared/api/model-config-api.ts";

interface IModelContext {
	model: IModelDetail | undefined;
	isModelLoading: boolean;
}

export const ModelContext = createContext<IModelContext | null>(null);

export const ModelContextProvider: FC<PropsWithChildren> = ({children}) => {
	const {modelId} = useParams();
	if (!modelId) {
		throw new Error('rowId must be provided for useModelDetail');
	}

	const {
		data: modelDetailResponse,
		isLoading
	} = useQuery({
		...modelDetailApi.getUseQueryParams(modelId)
	})

	const modelContextValue: IModelContext = {
		model: modelDetailResponse?.modelDetail,
		isModelLoading: isLoading
	}

	return (
		<ModelContext.Provider value={modelContextValue}>
			{children}
		</ModelContext.Provider>
	)
}