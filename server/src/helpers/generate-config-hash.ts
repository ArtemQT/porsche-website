import type {IUserConfig} from "../types/user-config-types.js";
import {createHash} from "node:crypto";
import stringify from "json-stable-stringify";

export const generateConfigHash = (userConfig: IUserConfig) => {
	const hashData: Omit<IUserConfig, 'configPrice' | 'totalPrice'> = {
		exterior: userConfig.exterior,
		wheels: userConfig.wheels,
		interior: userConfig.interior,
		carPackage: userConfig.carPackage,
		exhaust: userConfig.exhaust
	}

	const sortedHashString = stringify(hashData);
	if (!sortedHashString) {
		console.log('No sorted hash found.');
		return null;
	}

	return createHash('md5').update(sortedHashString).digest('hex');
}