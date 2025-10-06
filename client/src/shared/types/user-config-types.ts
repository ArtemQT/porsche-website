import type {IModelInfo} from "@shared/types/models-list-types.ts";

// Типы для axios запросов
export interface IResponseAddConfig {
	message: string;
}

export interface IRequestAddConfig {
	modelId: number;
	config: IConfig
}

export interface IResponseGetConfig {
	userConfigs: IUserConfig[]
	message: string;
}

export type IUserConfig = {
	model: IModelInfo;
	configHash: string;
} & IConfig

// Типы конфигурации
export interface IConfig {
	exterior: IConfigOption;
	wheels: IConfigOption;
	interior: IConfigOption;
	carPackage: IConfigTextOption;
	exhaust: IConfigTextOption;

	configPrice: number;
	totalPrice: number;
}

export interface IConfigOption {
	label: string;
	price: number;
	imgUrl: string;
}

export interface IConfigTextOption {
	label: string;
	description: string;
	price: number;
}

