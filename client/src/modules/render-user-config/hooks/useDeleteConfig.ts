import {useMutation, useQueryClient} from "@tanstack/react-query";
import {userConfigApi} from "@shared/api/user-config-api.ts";
import {useAuth} from "../../auth";
import type {IResponseGetConfig} from "@shared/types/user-config-types.ts";

export const useDeleteConfig = () => {
	const {userId} = useAuth()
	const queryClient = useQueryClient();

	const deleteConfigMutation = useMutation({
		mutationFn: (configHash: string) => userConfigApi.deleteUserConfig(configHash),

		onMutate: async (configHash: string) => {

			await queryClient.cancelQueries({
				queryKey: [userConfigApi.getCacheKey(), userId]
			})

			const prevUserConfigList = queryClient.getQueryData(
				[userConfigApi.getCacheKey(), userId]
			) as IResponseGetConfig

			queryClient.setQueryData(
				[userConfigApi.getCacheKey(), userId],
				() => (
					prevUserConfigList.userConfigs.filter(userConfig => (
						userConfig.configHash !== configHash
					))
				)
 			)

			return {prevUserConfigList}
		},

		onError: (_, __, context) => {
			queryClient.setQueryData(
				[userConfigApi.getCacheKey(), userId],
				context?.prevUserConfigList
			)
		},

		onSettled: () => {
			queryClient.invalidateQueries({
				queryKey: [userConfigApi.getCacheKey(), userId]
			})
		}
	})

	const deleteConfigHandler = (configHash: string) => {
		deleteConfigMutation.mutate(configHash);
		scrollTo(0, 0)
	}

	return {
		deleteConfigHandler
	}
}