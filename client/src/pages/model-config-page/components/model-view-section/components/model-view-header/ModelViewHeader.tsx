import styles from "./ModelViewHeader.module.scss"
import {BackButton} from "@components/back-button";
import type {FC} from "react";

interface ModelViewHeaderProps {
	isModelLoading: boolean;
	modelName: string | undefined;
}

export const ModelViewHeader: FC<ModelViewHeaderProps> = ({isModelLoading, modelName}) => {
	return (
		<header className={`${styles.modelViewHeader} container`}>
			<div className={styles.modelViewWrapper}>
				<BackButton className={styles.backButton}/>

				<button className={styles.saveConfigButton}
						disabled={isModelLoading}
						data-is-disabled={isModelLoading}
				>
					Save configuration
				</button>
			</div>

			<h2 className={styles.modelName}
				data-is-skeleton={isModelLoading}
			>
				{modelName}
			</h2>
		</header>
	)
}