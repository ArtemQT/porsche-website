
export interface IModelDetailResponse {
	modelDetail: IModelDetail,
	message: string;
}

export interface IModelDetail {
	modelName: string;
	modelSeries: string;
	price: number;
	previewImages: string[];
}