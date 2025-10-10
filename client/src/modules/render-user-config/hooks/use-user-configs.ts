import {useQuery} from "@tanstack/react-query";
import {userConfigApi} from "@shared/api/user-config-api.ts";
import {useAuth} from "../../auth";

export const useUserConfigs = () => {
	const {userId} = useAuth()
	const {
		data,
		isLoading,
		error
	} = useQuery({
		...userConfigApi.getUserConfigsQueryParams(userId),
	})

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