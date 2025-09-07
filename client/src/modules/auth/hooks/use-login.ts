import {type SubmitHandler, useForm} from "react-hook-form";
import type {ILoginForm, ILoginFormConfig} from "../types/auth-types.ts";
import {loginFormDefaultValues} from "../constants/auth-constants.ts";

export const useLogin = () => {

	const {
		register,
		handleSubmit,
		control,
		reset,
		formState: { errors },
	} = useForm<ILoginForm>({
		mode: 'onBlur',
		defaultValues: loginFormDefaultValues
	})

	const loginFormConfig: ILoginFormConfig = {
		title: 'Authorization',
		submitText: 'Login',
		fields: [
			{
				name: 'email',
				type: 'email',
				label: 'Email',
				register,
				control,
				error: errors.email,
				validationRules: {
					required: 'Email is required',
					pattern: {
						value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
						message: 'Invalid email address'
					},
					maxLength: {
						value: 254,
						message: 'Email is too long'
					}
				}
			},
			{
				name: 'password',
				type: 'password',
				label: 'Password',
				register,
				control,
				showEyeIcon: true,
				error: errors.password,
				validationRules: {
					required: 'Password is required',
					minLength: {
						value: 8,
						message: 'The minimum password length is 8'
					}
				}
			}
		]
	}

	const onSubmit: SubmitHandler<ILoginForm> = (data) => {
		console.log(data)
	}

	return {
		handleSubmit,
		onSubmit,
		loginFormConfig,
		reset
	}
}