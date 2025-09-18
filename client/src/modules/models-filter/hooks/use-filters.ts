import {useContext} from "react";
import {FilterContext} from "../contexts/filter-context.tsx";

export const useFilters = () => {
	const context = useContext(FilterContext);
	if (!context) {
		throw new Error('useFilter must bu used with FilterContextProvider');
	}

	return context;
}

