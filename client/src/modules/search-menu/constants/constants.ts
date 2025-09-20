import {RoutePaths} from "@config/route-paths.ts";
import type {IInitialSearchItem} from "../types/types.ts";

export const modelRowLinks: IInitialSearchItem[] = [
	{
		id: 1,
		label: '911 row',
		link: RoutePaths.modelsPage + '/911'
	},
	{
		id: 2,
		label: '718 row',
		link: RoutePaths.modelsPage + '/718'
	}
]

export const newInLinks: IInitialSearchItem[] = [
	{
		id: 1,
		label: '911 Carrera GTS',
		link: ''
	},
	{
		id: 2,
		label: '911 GT3',
		link: ''
	},
	{
		id: 3,
		label: '911 Turbo S',
		link: ''
	},
	{
		id: 4,
		label: '718 Cayman GT4 RS',
		link: ''
	},
	{
		id: 5,
		label: '718 Cayman',
		link: ''
	}
]