import styles from './ModelsFilter.module.scss'
import {ModelRowFilter} from "./components/model-row-filter";
import {useFilters} from "./hooks/use-filters.ts";
import {Button, ButtonType} from "@shared/components/button";

export const ModelsFilter = () => {

	const {resetFilters} = useFilters()

	return (
		<aside>
			<h3 className='h4'>Models</h3>
			<form className={styles.filterForm}>
				<ModelRowFilter/>

				<Button buttonType={ButtonType.dark}
						type={"button"}
						className={styles.resetButton}
						onClick={resetFilters}
				>
					Reset filters
				</Button>
			</form>
		</aside>
	)
}