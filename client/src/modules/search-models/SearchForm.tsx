import styles from './SearchForm.module.scss'
import {useSearch} from "./hooks/use-search.ts";

export const SearchForm = () => {

	const {
		searchValue,
		onChangeSearchValue,
		isSearchLoading,
		searchModelsList,
	} = useSearch();

	return (
		<>
			<form className={styles.searchForm}>
				<label className={styles.searchField}>
					<p className={styles.searchFieldPlaceholder}>What models are you looking for?</p>

					<input className={styles.searchInput}
						   type='text'
						   name='search-model'
						   value={searchValue}
						   onChange={onChangeSearchValue}
					/>
				</label>
			</form>
			<ul>

				{
					isSearchLoading ? (
						<div>Loading...</div>
					) : (
						searchModelsList?.map((item) => (
							<li key={item.id}>
								{item.modelName}
								<br/>
							</li>
						))
					)
				}

			</ul>
		</>

	)
}