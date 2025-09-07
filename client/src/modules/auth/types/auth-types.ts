import type {FieldError, FieldValues, RegisterOptions, UseFormRegister, Path, Control} from "react-hook-form";


export interface ILoginForm {
	email: string;
	password: string;
}
export interface IRegisterForm {
	email: string;
	password: string;
	confirmPassword: string;
}


export type TInputType = 'text' | 'email' | 'password';
export interface IInputField<T extends FieldValues> {
	name: Path<T>;
	type: TInputType;
	label: string;
	showEyeIcon?: boolean;

	control: Control<T>,
	register: UseFormRegister<T>,
	validationRules: RegisterOptions<T>,
	error: FieldError | undefined
}

export interface IFormConfig<T extends FieldValues> {
	title: string;
	submitText: string;
	fields: IInputField<T>[]
}

export type IRegisterFormConfig = IFormConfig<IRegisterForm>
export type ILoginFormConfig = IFormConfig<ILoginForm>

