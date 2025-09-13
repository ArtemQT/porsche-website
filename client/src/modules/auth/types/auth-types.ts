export interface IResponseAuth {
	data: {
		accessToken: string;
		userData: IUserData,
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