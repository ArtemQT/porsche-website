import styles from './ModelsPage.module.scss'
import {ModelsList} from "../../modules/render-models";

export const ModelsPage = () => {
	return (
		<section className={'section container'}>
				<h2 className={styles.modelsTitle}>Review of models</h2>
				<div className={`${styles.modelsContainer}`}>
					<div className={styles.modelsFilter}></div>
					<ModelsList/>
				</div>
		</section>
	)
}