import type {IUserConfig} from "../types/user-config-types.js";
import {createHash} from "node:crypto";

export const generateConfigHash = (userConfig: IUserConfig) => {

	const hashData: Omit<IUserConfig, 'configPrice' | 'totalPrice'> = {
		exterior: userConfig.exterior,
		wheels: userConfig.wheels,
		interior: userConfig.interior,
		carPackage: userConfig.carPackage,
		exhaust: userConfig.exhaust
	}

	const hashDataKeys = Object.keys(hashData).sort();
	const sortedHashString = JSON.stringify(hashData, hashDataKeys);

	return createHash('md5').update(sortedHashString).digest('hex');
}