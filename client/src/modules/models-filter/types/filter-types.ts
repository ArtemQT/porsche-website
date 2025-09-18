import type {MODELS_SERIES} from "@shared/types/models-list-types.ts";

export interface IFilterForm {
	modelRow: MODELS_SERIES
}

export interface IModelRowFilterList {
	id: number,
	label: string,
	value: MODELS_SERIES
}