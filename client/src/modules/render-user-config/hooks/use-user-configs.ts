import {useQuery} from "@tanstack/react-query";
import {userConfigApi} from "@shared/api/user-config-api.ts";
import {useAuth} from "../../auth";
import axios from "axios";

export const useUserConfigs = () => {
	const {userId, setLogout} = useAuth()
	const {
		data,
		isLoading,
		error
	} = useQuery({
		...userConfigApi.getUserConfigsQueryParams(userId),
	})

	if (axios.isAxiosError(error)) {
		if (error.response?.status === 401) {
			setLogout()
		}
	}

	const isEmptyCart = () => {
		return data?.userConfigs.length === 0 && !isLoading
	}

	const isAuthenticatedError = () => !!error

	return {
		userConfigs: data?.userConfigs,
		isConfigsLoading: isLoading,

		isAuthenticatedError,
		isEmptyCart
	}
}