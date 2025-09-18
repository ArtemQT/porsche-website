import {MODELS_SERIES} from "@shared/types/models-list-types.ts";

export const getModelSeries = (row: string | undefined) => {
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