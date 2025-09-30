import styles from "./ModelViewHeader.module.scss"
import {BackButton} from "@components/back-button";
import type {FC} from "react";
import {useSwiperConfig} from "../../../../../../modules/model-config";

interface ModelViewHeaderProps {
	isModelLoading: boolean;
	modelName: string | undefined;
}

export const ModelViewHeader: FC<ModelViewHeaderProps> = ({isModelLoading, modelName}) => {
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