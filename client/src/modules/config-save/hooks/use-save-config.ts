import {useMutation} from "@tanstack/react-query";
import {userConfigApi} from "@shared/api/user-config-api.ts";
import {toast} from "sonner";
import {useConfig} from "../../model-config";
import {useParams} from "react-router-dom";
import type {IRequestAddConfig} from "@shared/types/user-config-types.ts";
import axios from "axios";
import {useAuth} from "@modules/auth";

export const useSaveConfig = () => {

	const {setLogout} = useAuth()
	const {configuration} = useConfig();
	const {modelId} = useParams();
	if (!modelId) {
		throw new Error("Missing modelId in url");
	}
	const parsedModelId = +modelId;

	const saveConfigMutation = useMutation({
		mutationFn: (data: IRequestAddConfig) => userConfigApi.addUserConfig(data),

		onSuccess: () => {
			toast.success('Configuration successfully saved');
		},

		onError: (err) => {
			 if (axios.isAxiosError(err)) {
				 switch (err.response?.status) {
					 case 401: {
						 toast.error("Configuration not saved. Please sign in to your account.");
						 setLogout()
						 break;
					 }
					 case 400: {
						 toast.error(err?.response?.data?.message);
						 break;
					 }
				 }
			}
		}
	})

	const handleSaveConfig = () => {

		const saveConfigBody: IRequestAddConfig = {
			modelId: parsedModelId,
			config: {
				exterior: {
					label: configuration.exterior.label,
					price: configuration.exterior.price,
					imgUrl: configuration.exterior.path
				},
				wheels: {
					label: configuration.wheels.label,
					price: configuration.wheels.price,
					imgUrl: configuration.wheels.path
				},
				interior: {
					label: configuration.interior.label,
					price: configuration.interior.price,
					imgUrl: configuration.interior.path
				},
				carPackage: {
					label: configuration.carPackage.label,
					price: configuration.carPackage.price,
					description: configuration.carPackage.description
				},
				exhaust: {
					label: configuration.exhaust.label,
					price: configuration.exhaust.price,
					description: configuration.exhaust.description
				},

				configPrice: configuration.configPrice,
				totalPrice: configuration.totalPrice!,
			}
		}

		saveConfigMutation.mutate(saveConfigBody)
	}

	return {
		handleSaveConfig,
		isSaveConfigLoading: saveConfigMutation.isPending
	}
}