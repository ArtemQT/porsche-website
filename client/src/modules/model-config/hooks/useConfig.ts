import {useContext} from "react";
import {ConfigContext} from "../contexts/ConfigContext.tsx";

export const useConfig = () => {
	const context = useContext(ConfigContext);
	if (!context) {
		throw new Error('useConfig must be used within ConfigContextProvider');
	}

	return context;
}