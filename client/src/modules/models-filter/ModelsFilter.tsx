import styles from './ModelsFilter.module.scss'
import {ModelRowFilter} from "./components/model-row-filter";
import {FilterContextProvider} from "./contexts/filter-context.tsx";

export const ModelsFilter = () => {

	return (
		<aside>
			<h3 className='h4'>Models</h3>
			<form className={styles.filterForm}>
				<FilterContextProvider>
					<ModelRowFilter/>
				</FilterContextProvider>
			</form>
		</aside>
	)
}