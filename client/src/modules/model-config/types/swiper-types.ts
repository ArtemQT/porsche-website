export interface IConfigSwiper {
	index: number;
	path: string;
	label: string;
	price: number;
	priceDescription?: string
}

export interface IConfigSwiperText {
	index: number;
	label: string;
	description: string;
	price: number;
	priceDescription?: string
}

export interface IPaginationBullet {
	index: number;
	img: string;
	description: string;
}

export interface IConfiguration {
	readonly exterior: IConfigSwiper;
	readonly wheels: IConfigSwiper;
	readonly interior: IConfigSwiper;
	readonly carPackage: IConfigSwiperText;
	readonly exhaust: IConfigSwiperText;
	readonly startPrice: number | undefined;
	configPrice: number;
	totalPrice: number | undefined;
}

export type TConfigArray = {
	[K in keyof Omit<IConfiguration, 'startPrice' | 'configPrice' | 'totalPrice'>]: readonly IConfigSwiperText[] | IConfigSwiper[];
}

export type TConfigDisplayItem = {
	index: number;
	key: keyof Omit<IConfiguration, 'totalPrice' | 'startPrice' | 'configPrice'>;
	label: string;
};