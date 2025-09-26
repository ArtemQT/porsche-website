import styles from './VideoDescription.module.scss'

import type {FC} from "react";

import {Button} from "@components/button";
import {ButtonType} from "@components/button";
import {useVideoModel} from "../../hooks/useVideoModel.ts";
import {Link} from "react-router-dom";
import {RoutePaths} from "@config/route-paths.ts";

export const VideoDescription: FC = () => {

	const {
		modelId,
		modelName,
		isLoading
	} = useVideoModel()

	return (
		<div className={styles.descriptionWrapper}
			 data-is-loading={isLoading}
		>
			{
				!isLoading ? (
					<>
						<Link to={`${RoutePaths.modelConfigPage}/${modelId}`} className={styles.modelLink}></Link>
						<h3 className={styles.descriptionTitle}>
							{modelName}
						</h3>
						<Button buttonType={ButtonType.transparent}
								className={styles.descriptionButton}
						>
							Find out more
						</Button>
					</>
				) : (
					<>
						<h3 className={styles.skeletonTitle}></h3>
						<div className={styles.skeletonLink}></div>
					</>
				)
			}

		</div>
	)
}