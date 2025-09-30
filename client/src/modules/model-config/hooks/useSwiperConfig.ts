import {useContext} from "react";
import {SwiperConfigContext} from "../contexts/SwiperConfigContext.tsx";

export const useSwiperConfig = () => {
	const context = useContext(SwiperConfigContext);
	if (!context) {
		throw new Error('useSwiperConfig must be used within SwiperConfigContextProvider');
	}

	return context;
}