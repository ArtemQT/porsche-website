import {type SubmitHandler, useForm} from "react-hook-form";
import {registerFormDefaultValues} from "../constants/auth-constants.ts";
import type {IRegisterForm, IRegisterFormConfig} from "../types/form-types.ts";
import {useMutation, useQueryClient} from "@tanstack/react-query";
import {userApi} from "../api/user-api.ts";
import axios from "axios";
import {useRegisterModal} from "./use-register-modal.ts";
import {toast} from "sonner";
import {useAuth} from "./use-auth.ts";

export const useRegister = () => {

	const {
		register,
		handleSubmit,
		formState: { errors },
		watch,
		control,
		reset
	} = useForm({
		mode: 'onBlur',
		defaultValues: registerFormDefaultValues
	})

	const queryClient = useQueryClient();

	const {
		handleClose
	} = useRegisterModal()

	const {
		setLogin
	} = useAuth()

	const registerUserMutation = useMutation({
		mutationFn: userApi.register,

		onError: (error) => {
			if (axios.isAxiosError(error)) {
				if (error.response) {
					if (error.response.status === 409) {
						toast.error('User with entered email already exist')
					}
				}
			}
		},

		onSuccess: (authResponse) => {

			const accessToken = authResponse.data.accessToken;
			localStorage.setItem("accessToken", accessToken);

			const userData = authResponse.data.userDto;
			queryClient.setQueryData(
				[userApi.getCacheKey()],
				userData
			)
			localStorage.setItem("userId", userData.id);

			setLogin(userData.id)
			toast.success('Registration completed successfully')
			setTimeout(() => {
				handleClose();
				reset();
			}, 700);
		}
	})

	const password = watch('password');

	const registerFormConfig: IRegisterFormConfig = {
		title: 'Registration',
		submitText: 'Register',
		fields: [
			{
				name: 'email',
				type: 'email',
				label: 'Email',
				register,
				control,
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
				},
				error: errors.email
			},
			{
				name: 'password',
				type: 'password',
				label: 'Password',
				register,
				control,
				validationRules: {
					required: 'Password is required',
					minLength: {
						value: 8,
						message: 'The minimum password length is 8'
					}
				},
				error: errors.password
			},
			{
				name: 'confirmPassword',
				type: 'password',
				label: 'Confirm Password',
				showEyeIcon: true,
				register,
				control,
				validationRules: {
					required: 'Confirm password is required',
					validate: (value: string) => value === password || 'Passwords don\'t match'
				},
				error: errors.confirmPassword
			}
		]
	}

	const onSubmit: SubmitHandler<IRegisterForm> = (data) => {
		registerUserMutation.mutate(data)
	}

	return {
		handleSubmit,
		onSubmit,
		registerFormConfig,
		reset,
		isRegisterPending: registerUserMutation.isPending
	}
}