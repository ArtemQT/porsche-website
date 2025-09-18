import styles from './ModelsPage.module.scss'
import {ModelsList} from "../../modules/render-models";
import {ModelsFilter} from "../../modules/models-filter";
import {FilterContextProvider} from "../../modules/models-filter/contexts/filter-context.tsx";

export const ModelsPage = () => {
	return (
		<section className={'section container'}>
			<h2 className={styles.modelsTitle}>Review of models</h2>
			<div className={`${styles.modelsContainer}`}>
				<FilterContextProvider>
					<ModelsFilter/>
				</FilterContextProvider>
				<ModelsList/>
			</div>
		</section>
	)
}