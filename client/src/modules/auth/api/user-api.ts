import axios, {type AxiosInstance} from "axios";
import type {IResponseAuth, IUserAuthInfo} from "../types/auth-types.ts";

class UserApi {
	private userApi: AxiosInstance;
	private readonly cashKey: string;

	constructor() {
		this.userApi = axios.create({
			baseURL: 'http://localhost:3000/auth',
		})

		this.cashKey = 'user'
	}

	getCashKey = () => this.cashKey;

	register = async (userInfo: IUserAuthInfo) => {
		const response = await this.userApi.post<IResponseAuth>('/register', userInfo);
		return response.data
	}

	login = async () => {

	}

	logout = async () => {

	}
}

export const userApi = new UserApi();
