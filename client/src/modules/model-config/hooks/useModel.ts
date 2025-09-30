import {useContext} from "react";
import {ModelContext} from "../contexts/ModelContext.tsx";

export const useModel = () => {
	const context = useContext(ModelContext);
	if (!context) {
		throw new Error('useModel must be used with ModelContextProvider');
	}
	return context;
}