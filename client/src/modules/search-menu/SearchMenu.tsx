import styles from "./SearchMenu.module.scss";

import type {FC} from "react";
import {useModal} from "../modal";
import {useSearch} from "../search-models/hooks/use-search.ts";
import {SearchButton} from "./components/search-button";
import {SearchWrapper} from "./components/search-wrapper";
import {modelRowLinks, newInLinks} from "./constants/constants.ts";
import {SearchInfo} from "./components/search-info";
import {SearchInfoList} from "./components/search-info-list";

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
					<SearchInfoList title='New In' listOfLinks={newInLinks} handleClose={handleCloseMenu}/>
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