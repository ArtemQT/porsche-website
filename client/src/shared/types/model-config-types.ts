
export interface IModelDetailResponse {
	modelDetail: {
		modelName: string;
		modelSeries: string;
		price: number;
		previewImages: string[];
	},
	message: string;
}