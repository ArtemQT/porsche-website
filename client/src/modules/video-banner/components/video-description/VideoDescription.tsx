import styles from './VideoDescription.module.scss'

import type {FC} from "react";

import {Button} from "@components/button";
import {ButtonType} from "@components/button";

export const VideoDescription: FC = () => {
	return (
		<div className={styles.descriptionWrapper}>
			<h3 className={styles.descriptionTitle}>911 Carrera GTS</h3>
			<Button buttonType={ButtonType.transparent}
					className={styles.descriptionButton}>
				Find out more
			</Button>
		</div>
	)
}