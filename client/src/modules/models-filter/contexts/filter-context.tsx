import {createContext, type FC, type PropsWithChildren, useState} from "react";
import type {IFilterForm, IModelRowFilterList} from "../types/filter-types.ts";
import {MODELS_SERIES} from "@shared/types/models-list-types.ts";
import {useParams} from "react-router-dom";
import {getModelSeries} from "@shared/helpers/get-model-series.ts";

interface IFilterFormContext {
	filterForm: IFilterForm,
	modelRowFilterList: IModelRowFilterList[],
	updateModelRow: (modelRowValue: MODELS_SERIES) => void,
	resetFilters: () => void,
}

export const FilterContext = createContext<IFilterFormContext | null>(null);

export const FilterContextProvider: FC<PropsWithChildren> = ({children}) => {
	const {row} = useParams();

	const initialModelRow = getModelSeries(row)

	const [filterForm, setFilterForm] = useState<IFilterForm>({
		modelRow: initialModelRow
	});

	const updateModelRow = (modelRowValue: MODELS_SERIES) => {
		setFilterForm({
			...filterForm,
			modelRow: modelRowValue
		})
	}

	const resetFilters = () => {
		setFilterForm({
			modelRow: initialModelRow
		})
	}

	const modelRowFilterList: IModelRowFilterList[] = [
		{
			id: 1,
			label: 'All models',
			value: MODELS_SERIES.ALL_SERIES
		},
		{
			id: 2,
			label: '911 row',
			value: MODELS_SERIES.SERIES_911
		},
		{
			id: 3,
			label: '718 row',
			value: MODELS_SERIES.SERIES_718
		}
	]

	const value: IFilterFormContext = {
		filterForm,
		modelRowFilterList,
		updateModelRow,
		resetFilters
	}

	return (
		<FilterContext.Provider value={value}>
			{children}
		</FilterContext.Provider>
	)

}