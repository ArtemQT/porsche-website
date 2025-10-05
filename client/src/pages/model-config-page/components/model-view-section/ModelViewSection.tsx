import styles from './ModelViewSection.module.scss'
import {ModelViewHeader} from "./components/model-view-header";
import {ModelViewBody} from "./components/model-view-body";
import {useModel} from "../../../../modules/model-config";
import type {FC} from "react";

interface ModelViewSectionProps {
	handleOpenConfigModal: () => void;
}

export const ModelViewSection:FC<ModelViewSectionProps> = ({handleOpenConfigModal}) => {

	const {
		model,
		isModelLoading
	} = useModel()

	return (
		<section className={styles.section}>
			<ModelViewHeader isModelLoading={isModelLoading}
							 modelName={model?.modelName}
							 handleOpenConfigModal={handleOpenConfigModal}
			/>

			<ModelViewBody isModelLoading={isModelLoading}
						   modelSeries={model?.modelSeries}
						   previewImages={model?.previewImages}
			/>
		</section>
	)
}