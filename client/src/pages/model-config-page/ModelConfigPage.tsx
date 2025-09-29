import {useModelConfig} from "@shared/hooks/useModelConfig.ts";
import {ModelViewSection} from "./components/model-view-section";
import {ConfigSection} from "./components/config-section";

export const ModelConfigPage = () => {

	const {
		model,
		isLoadingModel,
		error
	} = useModelConfig()

	if (error) {
		return <div>Error: {error.message}</div>
	}

	return (
		<>
			<ModelViewSection model={model}
							  isModelLoading={isLoadingModel}
			/>

			<ConfigSection modelPrice={model?.price}
						   isModelLoading={isLoadingModel}
			/>
		</>

	)
}