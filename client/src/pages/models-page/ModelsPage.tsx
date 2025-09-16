import styles from './ModelsPage.module.scss'
import {ModelsList} from "../../modules/render-models";
import {ModelsFilter} from "../../modules/models-filter";

export const ModelsPage = () => {
	return (
		<section className={'section container'}>
			<h2 className={styles.modelsTitle}>Review of models</h2>
			<div className={`${styles.modelsContainer}`}>
				<ModelsFilter/>
				<ModelsList/>
			</div>
		</section>
	)
}