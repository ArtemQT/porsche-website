import type {IConfigSwiperText} from "../types/swiper-types.ts";

export const packageSwiperConfig: IConfigSwiperText[] = [
	{
		index: 0,
		title: 'Standard package',
		description: 'The car is in basic configuration, without additional sporty modifications. Suitable for everyday driving, it provides balanced road behavior and comfort. An ideal choice for those who appreciate classics and practicality.',
		price: 0,
		priceDescription: 'Base package / No additional cost'
	},
	{
		index: 1,
		title: 'Sport Chrono package',
		description: 'Includes an activatable Sport mode, launch control, center console timer and transmission settings. Provides sharper throttle response and improved driving dynamics. A great choice for those who like to drive actively, but without the extreme track focus.',
		price: 3500,
	},
	{
		index: 2,
		title: 'GTS package',
		description: 'A package with a focus on sporty style and emotion. Includes Alcantara trim, red or contrasting accents, blacked-out exterior elements and specific suspension. Increases driving engagement and gives the vehicle a more daring appearance.',
		price: 8200,
	},
	{
		index: 3,
		title: 'Weissach package',
		description: 'Maximum sporty character and lightness. Carbon fiber parts - hood, roof and fender - emphasize aggression, while the lightweight interior and chassis provide real racing dynamics. Ideal for those who dream of the track without leaving the road.',
		price: 35000,
	},
]