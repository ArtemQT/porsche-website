import styles from "./SearchMenu.module.scss";

import type {FC} from "react";
import {useModal} from "../modal";
import {useSearch} from "../search-models/hooks/use-search.ts";
import {SearchButton} from "./components/search-button";
import {SearchWrapper} from "./components/search-wrapper";
import {modelRowLinks} from "./constants/constants.ts";
import {SearchInfo} from "./components/search-info";
import {SearchInfoList} from "./components/search-info-list";
import {useNewInModels} from "./hooks/useNewInModels.ts";
import {SkeletonLink} from "./components/skeleton-link/SkeletonLink.tsx";

interface SearchMenuProps {
	buttonClassname: string;
}

export const SearchMenu: FC<SearchMenuProps> = ({buttonClassname}) => {

	const {isOpen, handleOpen, handleClose} = useModal()

	const {
		searchValue,
		onChangeSearchValue,
		searchModelsList,
		isSearching,
		resetSearchValue
	} = useSearch();

	const handleCloseMenu = () => {
		handleClose();
		resetSearchValue();
	}

	const {
		newInList,
		isLoading: isNewInModelsListLoading,
	} = useNewInModels();


	return (
		<div className={styles.searchMenu}
			 onMouseLeave={handleCloseMenu}
		>

			<SearchButton buttonClassname={buttonClassname}
						  handleOpenDropDownMenu={handleOpen}
			/>

			<div className={`${styles.dropDownModal} ${isOpen ? styles.open : ''}`}>
				<SearchWrapper searchValue={searchValue}
							   onChangeSearchValue={onChangeSearchValue}
							   handleClose={handleCloseMenu}
				/>

				<div className={styles.initialSearchData}
					 data-is-hidden={!!searchValue}
				>
					<SearchInfoList title='Model rows' listOfLinks={modelRowLinks} handleClose={handleCloseMenu}/>

					{
						isNewInModelsListLoading ? (
							<ul className={styles.skeletonList}>
								{
									Array.from({length: 5}, (_, index) => (
										<li key={index}><SkeletonLink/></li>
									))
								}
							</ul>
						) : (
							<SearchInfoList title='New In' listOfLinks={newInList} handleClose={handleCloseMenu}/>
						)
					}
				</div>

				<div className={styles.searchData}
					 data-is-visible={!!searchValue}
				>
					<SearchInfo searchModelsList={searchModelsList}
								isSearching={isSearching}
								handleClose={handleCloseMenu}
					/>
				</div>
			</div>
		</div>
	)
}