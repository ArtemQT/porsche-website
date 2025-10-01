import type { Prisma } from "@prisma/client";

export interface IRequestAddConfig {
	modelId: number;
	config: IUserConfig
}

export interface IUserConfig {
	exterior: IConfigOption;
	wheels: IConfigOption;
	interior: IConfigOption;
	carPackage: IConfigTextOption;
	exhaust: IConfigTextOption;

	configPrice: number;
	totalPrice: number;
}

interface IConfigOption extends Prisma.JsonObject {
	label: string;
	price: number;
	imgUrl: string;
}

interface IConfigTextOption extends Prisma.JsonObject {
	label: string;
	description: string;
	price: number;
}
