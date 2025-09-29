export interface IConfigSwiper{
	path: string;
	label: string;
	price: number;
	priceDescription?: string
}

export interface IConfigSwiperText {
	title: string;
	description: string;
	price: number;
	priceDescription?: string
}

export interface IPaginationBullet {
	index: number;
	img: string;
	description: string;
}