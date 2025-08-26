import styles from './VideoDescription.module.scss'
import type {FC} from "react";

export const VideoDescription: FC = () => {
	return (
		<div className={styles.descriptionWrapper}>
			<h3 className={styles.descriptionTitle}>911 Carrera GTS</h3>
			<button className={styles.descriptionButton}>Find out more</button>
		</div>
	)
}