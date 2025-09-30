import type {IConfiguration} from "../types/swiper-types.ts";
import {createContext, type FC, type PropsWithChildren, useState} from "react";
import {useModel} from "../hooks/useModel.ts";
import {exteriorSwiperConfig} from "../constants/exterior-swiper.ts";
import {interiorSwiperConfig} from '../constants/interior-swiper.ts'
import {wheelsSwiperConfig} from "../constants/wheels-swiper.ts";
import {packageSwiperConfig} from "../constants/package-swiper.ts";
import {exhaustSwiperConfig} from "../constants/exhaust-system-swiper.ts";
import {configArray} from "../constants/config-array.ts";

interface ConfigContext {
	configuration: IConfiguration;
	changeConfigHandler: (
		activeIndex: number, field: keyof Omit<IConfiguration, 'totalPrice' | 'startPrice' | 'configPrice'>
	) => void;
}

export const ConfigContext = createContext<ConfigContext | null>(null);

export const ConfigContextProvider: FC<PropsWithChildren> = ({children}) => {

	const {
		model
	} = useModel()

	const [configuration, setConfiguration] = useState<IConfiguration>({
		exterior: exteriorSwiperConfig[0],
		wheels: wheelsSwiperConfig[0],
		interior: interiorSwiperConfig[0],
		carPackage: packageSwiperConfig[0],
		exhaust: exhaustSwiperConfig[0],

		startPrice: model?.price,
		configPrice: 0,
		totalPrice: model?.price
	});


	const changeConfigHandler = (
		activeIndex: number,
		field: keyof Omit<IConfiguration, 'totalPrice' | 'startPrice' | 'configPrice'>
	) => {
		if (configuration.totalPrice && configuration.startPrice) {

			const currentConfigArray = configArray[field];
			const newValue = currentConfigArray[activeIndex];

			const currentConfigPrice = configuration.configPrice - configuration[field].price + newValue.price;
			const currentTotalPrice = configuration.startPrice + currentConfigPrice;

			setConfiguration({
				...configuration,
				[field]: newValue,
				configPrice: currentConfigPrice,
				totalPrice: currentTotalPrice
			})
		}
	}

	const contextValue: ConfigContext = {
		configuration,
		changeConfigHandler
	}

	console.log(configuration);

	return (
		<ConfigContext.Provider value={contextValue}>
			{children}
		</ConfigContext.Provider>
	)
}