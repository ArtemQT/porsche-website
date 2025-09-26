import styles from './ModelViewSection.module.scss'
import type {FC} from "react";
import type {IModelDetail} from "@shared/types/model-config-types.ts";
import {ModelViewHeader} from "./components/model-view-header";
import {ModelViewBody} from "./components/model-view-body";

interface ModelViewSectionProps {
	model: Omit<IModelDetail, 'price'> | undefined;
	isModelLoading: boolean;
}

export const ModelViewSection: FC<ModelViewSectionProps> = ({model, isModelLoading}) => {
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