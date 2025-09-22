import {useModelConfig} from "@shared/hooks/useModelConfig.ts";

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
		<section>
			<h2>Model configuration Page!!!</h2>
			{
				isLoadingModel ? (
					<div>Loading ...</div>
				) : (
					JSON.stringify(model)
				)
			}
		</section>
	)
}