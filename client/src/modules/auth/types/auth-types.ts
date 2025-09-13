export interface IResponseAuth {
	data: {
		accessToken: string;
		userDto: IUserData,
	}
	message: string;
}

interface IUserData {
	id: string;
	email: string;
}

export interface IUserAuthInfo {
	email: string;
	password: string;
}

export interface ILogoutResponse {
	message: string;
}