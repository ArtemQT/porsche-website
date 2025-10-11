import styles from "./ModelViewHeader.module.scss"
import type {FC} from "react";
import {useSwiperConfig} from "@modules/model-config";
import {BackButton} from "@shared/components/back-button";

interface ModelViewHeaderProps {
	isModelLoading: boolean;
	modelName: string | undefined;
	handleOpenConfigModal: () => void;
}

export const ModelViewHeader: FC<ModelViewHeaderProps> = ({isModelLoading, modelName, handleOpenConfigModal}) => {
	const {
		isOpenConfigMenu,
		toggleConfigMenu
	} = useSwiperConfig()

	return (
		<header className={`${styles.modelViewHeader} container`}>
			<div className={styles.modelViewWrapper}>
				<BackButton className={styles.backButton}/>

				<div className={styles.buttonWrapper}>
					<button className={styles.saveConfigButton}
							disabled={isModelLoading}
							data-is-disabled={isModelLoading}
							onClick={handleOpenConfigModal}
					>
						Save configuration
					</button>

					<button className={styles.toggleConfigMenuButton}
							onClick={toggleConfigMenu}
					>
						<span>
							{isOpenConfigMenu ? 'Close' : 'Open'} configuration menu
						</span>
					</button>
				</div>

			</div>

			<h2 className={styles.modelName}
				data-is-skeleton={isModelLoading}
			>
				{modelName}
			</h2>
		</header>
	)
}