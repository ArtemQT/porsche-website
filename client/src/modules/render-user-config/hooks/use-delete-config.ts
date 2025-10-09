import {useMutation, useQueryClient} from "@tanstack/react-query";
import {userConfigApi} from "@shared/api/user-config-api.ts";
import {useAuth} from "../../auth";
import type {IResponseGetConfig} from "@shared/types/user-config-types.ts";
import {toast} from "sonner";

export const useDeleteConfig = () => {
	const {userId} = useAuth()
	const queryClient = useQueryClient();

	const deleteConfigMutation = useMutation({
		mutationFn: (configHash: string) => userConfigApi.deleteUserConfig(configHash),

		onMutate: async (configHash: string) => {

			await queryClient.cancelQueries({
				queryKey: [userConfigApi.getCacheKey(), userId]
			})

			const prevUserConfigs = queryClient.getQueryData(
				[userConfigApi.getCacheKey(), userId]
			) as IResponseGetConfig

			const newUserConfigList= prevUserConfigs.userConfigs.filter(userConfig => (
				userConfig.configHash !== configHash
			))

			const newUserConfigs: IResponseGetConfig = {
				userConfigs: newUserConfigList,
				message: prevUserConfigs.message
			}

			queryClient.setQueryData(
				[userConfigApi.getCacheKey(), userId],
				newUserConfigs
			)

			return {prevUserConfigs}
		},

		onError: (_, __, context) => {
			queryClient.setQueryData(
				[userConfigApi.getCacheKey(), userId],
				context?.prevUserConfigs
			)
		},

		onSettled: async () => {
			await queryClient.invalidateQueries({
				queryKey: [userConfigApi.getCacheKey(), userId]
			})
		},

		onSuccess: () => {
			toast.success('Configuration successfully deleted.');
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