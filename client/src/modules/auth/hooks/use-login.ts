import {type SubmitHandler, useForm} from "react-hook-form";
import type {ILoginForm, ILoginFormConfig} from "../types/form-types.ts";
import {loginFormDefaultValues} from "../constants/auth-constants.ts";
import {useMutation, useQueryClient} from "@tanstack/react-query";
import {userApi} from "../api/user-api.ts";
import axios from "axios";
import {toast} from "sonner";
import {useAuth} from "./use-auth.ts";
import {useLoginModal} from "./use-login-modal.ts";

export const useLogin = () => {

	const {
		register,
		handleSubmit,
		control,
		reset,
		formState: {errors},
	} = useForm<ILoginForm>({
		mode: 'onBlur',
		defaultValues: loginFormDefaultValues
	})

	const queryClient = useQueryClient();

	const {
		setLogin
	} = useAuth();

	const {
		handleClose
	} = useLoginModal()

	const loginUserMutation = useMutation({
		mutationFn: userApi.login,

		onError: (error) => {
			if (axios.isAxiosError(error)) {
				if (error.response) {
					if (error.response.status === 401) {
						toast.error(error.response.data.message);
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

			console.log(userData)

			setLogin();
			toast.success("Login successfully");
			setTimeout(() => {
				handleClose();
				reset();
			}, 1000)

		}
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
		loginUserMutation.mutate(data);
	}

	return {
		handleSubmit,
		onSubmit,
		loginFormConfig,
		reset,
		isLoginPending: loginUserMutation.isPending
	}
}