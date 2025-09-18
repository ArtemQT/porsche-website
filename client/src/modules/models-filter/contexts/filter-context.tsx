import {createContext, type FC, type PropsWithChildren, useState} from "react";
import type {IFilterForm, IModelRowFilterList} from "../types/filter-types.ts";
import {MODELS_SERIES} from "@shared/types/models-list-types.ts";
import {useParams} from "react-router-dom";

interface IFilterFormContext {
	filterForm: IFilterForm,
	modelRowFilterList: IModelRowFilterList[],
	updateModelRow: (modelRowValue: MODELS_SERIES) => void,
}

const setInitialRow = (row: string | undefined) =>  {
	if (!row) {
		throw new Error('row must be provided in dynamic parameter')
	}

	const modelRows = Object.values(MODELS_SERIES);
	const modelRow = modelRows.find(rowItem => rowItem.includes(row));

	if (!modelRow) {
		throw new Error(`Model series does not exist for the given row ${row}`);
	}

	return modelRow;
}

export const FilterContext = createContext<IFilterFormContext | null>(null);

export const FilterContextProvider: FC<PropsWithChildren> = ({children}) => {
	const {row} = useParams();

	const [filterForm, setFilterForm] = useState<IFilterForm>({
		modelRow: setInitialRow(row)
	});

	const updateModelRow = (modelRowValue: MODELS_SERIES) => {
		setFilterForm({
			...filterForm,
			modelRow: modelRowValue
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
		updateModelRow
	}

	return (
		<FilterContext.Provider value={value}>
			{children}
		</FilterContext.Provider>
	)

}