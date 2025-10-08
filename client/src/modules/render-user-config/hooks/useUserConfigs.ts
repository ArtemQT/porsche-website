import {useQuery} from "@tanstack/react-query";
import {userConfigApi} from "@shared/api/user-config-api.ts";
import {useAuth} from "../../auth";

export const useUserConfigs = () => {
	const {userId} = useAuth()
	const {
		data,
		isLoading
	} = useQuery({
		...userConfigApi.getUserConfigsQueryParams(userId)
	})

	const isEmptyBasket = () => {
		return data?.userConfigs.length === 0 && !isLoading
	}

	return {
		userConfigs: data?.userConfigs,
		isConfigsLoading: isLoading,
		isEmptyBasket
	}
}