import {RoutePaths} from "@config/route-paths.ts";
import type {ISearchItemLink} from "../types/types.ts";

export const modelRowLinks: ISearchItemLink[] = [
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