import axios, {type AxiosInstance} from "axios";
import {baseApiUrl} from "@config/api-config.ts";
import type {IRequestAddConfig, IResponseAddConfig} from "@shared/types/user-config-types.ts";
import {userApi} from "../../modules/auth";
import {toast} from "sonner";

class UserConfigApi {
	private readonly userConfigApi: AxiosInstance;

	constructor() {

		this.userConfigApi = axios.create({
			baseURL: baseApiUrl + '/user-config',
		})

		this.userConfigApi.interceptors.request.use((config) => {
			const accessToken = localStorage.getItem("accessToken");
			if (!accessToken) {
				toast.error("Please authorize to save configuration.");
				throw new Error("No access token");
			}

			config.headers.Authorization = `Bearer ${accessToken}`;
			return config;
		})

		this.userConfigApi.interceptors.response.use(
			(config) => config,
			async (err) => {
				if(axios.isAxiosError(err)) {
					if (err.response) {
						if (err.response.status === 401) {
							try {
								const response= await userApi.refreshToken();
								const accessToken = response.data.accessToken;
								localStorage.setItem('accessToken', accessToken);

								const originalRequest = err.config!;
								originalRequest.headers.Authorization = `Bearer ${accessToken}`;
								return this.userConfigApi.request(originalRequest);
							} catch (refreshError) {
								toast.error('Please authorize to save configuration.');
								return
							}
						}
					}
					await Promise.reject(err);
				}
			}
		)
	}

	async addUserConfig(addConfigBody: IRequestAddConfig) {
		const response = await this.userConfigApi.post<IResponseAddConfig>('/', addConfigBody);
		return response.data;
	}
}

export const userConfigApi = new UserConfigApi();