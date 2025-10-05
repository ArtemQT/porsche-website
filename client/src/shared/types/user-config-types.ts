export interface IResponseAddConfig {
	message: string;
}

export interface IRequestAddConfig {
	modelId: number;
	config: IUserConfig
}

interface IUserConfig {
	exterior: IConfigOption;
	wheels: IConfigOption;
	interior: IConfigOption;
	carPackage: IConfigTextOption;
	exhaust: IConfigTextOption;

	configPrice: number;
	totalPrice: number;
}

interface IConfigOption {
	label: string;
	price: number;
	imgUrl: string;
}

interface IConfigTextOption {
	label: string;
	description: string;
	price: number;
}