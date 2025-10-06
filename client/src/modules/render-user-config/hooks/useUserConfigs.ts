import {useQuery} from "@tanstack/react-query";
import {userConfigApi} from "@shared/api/user-config-api.ts";

export const useUserConfigs = () => {
	const {
		data,
		isLoading
	} = useQuery({
		...userConfigApi.getUserConfigsQueryParams()
	})

	return {
		userConfigs: data?.userConfigs,
		isConfigsLoading: isLoading
	}
}