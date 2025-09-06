import type {ILoginForm, IRegisterForm} from "../types/auth-types.ts";

export const loginFormDefaultValues: ILoginForm = {
	email: '',
	password: '',
}
export const registerFormDefaultValues: IRegisterForm = {
	email: '',
	password: '',
	confirmPassword: '',
}

