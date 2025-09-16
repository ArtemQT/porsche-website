import axios, {type AxiosInstance} from "axios";
import type {ILogoutResponse, IResponseAuth, IUserAuthInfo} from "../types/auth-types.ts";
import {baseApiUrl} from "@config/api-config.ts";

class UserApi {
	private userApi: AxiosInstance;
	private readonly cacheKey: string;

	constructor() {
		this.userApi = axios.create({
			baseURL: `${baseApiUrl}/auth`,
			withCredentials: true
		})

		this.cacheKey = 'user'
	}

	getCacheKey = () => this.cacheKey;

	register = async (userInfo: IUserAuthInfo) => {
		const response = await this.userApi.post<IResponseAuth>('/register', userInfo);
		return response.data
	}

	login = async (userInfo: IUserAuthInfo) => {
		const response = await this.userApi.post<IResponseAuth>('/login', userInfo);
		return response.data
	}

	logout = async () => {
		const response = await this.userApi.post<ILogoutResponse>('/logout');
		return response.data
	}
}

export const userApi = new UserApi();
