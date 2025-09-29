import type {IPaginationBullet} from "../types/swiper-types.ts";

import exteriorImg from '@assets/icons/pagination-icons/exterior.svg'
import wheelsImg from '@assets/icons/pagination-icons/wheels.svg'
import interiorImg from '@assets/icons/pagination-icons/interior.svg'
import packageImg from '@assets/icons/pagination-icons/package.svg'
import exhaustImg from '@assets/icons/pagination-icons/exhaust.svg'

export const configMenuPaginationList: IPaginationBullet[] = [
	{
		index: 0,
		img: exteriorImg,
		description: 'Exterior'
	},
	{
		index: 1,
		img: wheelsImg,
		description: 'Wheels'
	},
	{
		index: 2,
		img: interiorImg,
		description: 'Interior'
	},
	{
		index: 3,
		img: packageImg,
		description: 'Packages'
	},
	{
		index: 4,
		img: exhaustImg,
		description: 'Exhaust'
	},
]