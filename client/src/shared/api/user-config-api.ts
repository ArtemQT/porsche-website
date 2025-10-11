import axios, {type AxiosInstance} from "axios";
import {baseApiUrl} from "@config/api-config.ts";
import type {
	IRequestAddConfig,
	IResponseAddConfig,
	IResponseDeleteConfig,
	IResponseGetConfig
} from "@shared/types/user-config-types.ts";
import {userApi} from "@modules/auth";
import {queryOptions} from "@tanstack/react-query";

class UserConfigApi {
	private readonly userConfigApi: AxiosInstance;

	private readonly userConfigCacheKey: string;

	constructor() {

		this.userConfigApi = axios.create({
			baseURL: baseApiUrl + '/user-config',
		})

		this.userConfigApi.interceptors.request.use(
			(config) => {
				const accessToken = localStorage.getItem("accessToken");
				config.headers.Authorization = `Bearer ${accessToken}`;
				return config;
			},
		)

		this.userConfigApi.interceptors.response.use(
			(config) => config,
			async (err) => {
				if (axios.isAxiosError(err)) {
					if (err.response) {
						if (err.response.status === 401) {
							try {
								const response = await userApi.refreshToken();
								const accessToken = response.data.accessToken;
								localStorage.setItem('accessToken', accessToken);

								const originalRequest = err.config!;
								originalRequest.headers.Authorization = `Bearer ${accessToken}`;
								return this.userConfigApi.request(originalRequest);
							} catch (refreshError) {
								await userApi.logout()

								return Promise.reject(err);
							}
						} else {
							return Promise.reject(err);
						}
					}
				}
				return Promise.reject(err);
			}
		)

		this.userConfigCacheKey = 'user-config-list'
	}

	getCacheKey = () => this.userConfigCacheKey

	getUserConfigsQueryParams = (userId: string | null) => {
		return queryOptions({
			queryFn: () => this.getUserConfigs(),
			queryKey: [this.userConfigCacheKey, userId],
			retry: 0,
			staleTime: 0,
			refetchOnWindowFocus: false,
		})
	}

	async addUserConfig(addConfigBody: IRequestAddConfig) {
		const response = await this.userConfigApi.post<IResponseAddConfig>('/', addConfigBody);
		return response.data;
	}

	async getUserConfigs() {
		const response = await this.userConfigApi.get<IResponseGetConfig>('/');
		return response.data;
	}

	async deleteUserConfig(configHash: string) {
		const response = await this.userConfigApi.delete<IResponseDeleteConfig>(`/${configHash}`);
		return response.data;
	}
}

export const userConfigApi = new UserConfigApi();