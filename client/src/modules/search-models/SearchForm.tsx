import styles from './SearchForm.module.scss'
import type {ChangeEvent, FC} from "react";

interface SearchFormProps {
	searchValue: string,
	onChangeSearchValue: (e: ChangeEvent<HTMLInputElement>) => void
}

export const SearchForm: FC<SearchFormProps> = ({searchValue, onChangeSearchValue}) => {
	return (
		<form className={styles.searchForm}>
			<label className={styles.searchField}>
				<input className={styles.searchInput}
					   type='text'
					   name='search-model'
					   value={searchValue}
					   onChange={onChangeSearchValue}
					   data-is-dirty={!!searchValue}
				/>
				<p className={styles.searchFieldPlaceholder}>
					What models are you looking for?
				</p>
			</label>
		</form>
	)
}