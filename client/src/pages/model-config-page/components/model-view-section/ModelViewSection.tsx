import styles from './ModelViewSection.module.scss'
import {ModelViewHeader} from "./components/model-view-header";
import {ModelViewBody} from "./components/model-view-body";
import {useModel} from "../../../../modules/model-config";

export const ModelViewSection = () => {

	const {
		model,
		isModelLoading
	} = useModel()

	return (
		<section className={styles.section}>
			<ModelViewHeader isModelLoading={isModelLoading}
							 modelName={model?.modelName}
			/>

			<ModelViewBody isModelLoading={isModelLoading}
						   modelSeries={model?.modelSeries}
						   previewImages={model?.previewImages}
			/>
		</section>
	)
}