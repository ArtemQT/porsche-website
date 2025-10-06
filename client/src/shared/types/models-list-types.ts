export interface IGetModelsListResponse {
	data: {
		carModels: IModelInfo[],
		"carRow": string
	},
	"message": string
}

export interface IGetModelsListBySearchResponse {
	data: {
		models: IModelInfo[]
	}
}

export type IModelInfo = {
	id: number,
	modelSeries: MODELS_SERIES,
	modelName: string,
	modelAcceleration: string,
	topSpeed: string,
	fuelType: string,
	powerKwKp: string,
	modelImage: string
}

export enum MODELS_SERIES {
	ALL_SERIES = '',
	SERIES_911 = "SERIES_911",
	SERIES_718 = "SERIES_718",
}
