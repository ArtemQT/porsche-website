import type {ILoginForm, IRegisterForm} from "../types/form-types.ts";

export const loginFormDefaultValues: ILoginForm = {
	email: '',
	password: '',
}
export const registerFormDefaultValues: IRegisterForm = {
	email: '',
	password: '',
	confirmPassword: '',
}

