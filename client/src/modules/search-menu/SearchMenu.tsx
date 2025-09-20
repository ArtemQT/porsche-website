import styles from "./SearchMenu.module.scss";

import type {FC} from "react";
import {useModal} from "../modal";
import {useSearch} from "../search-models/hooks/use-search.ts";
import {SearchButton} from "./components/search-button";
import {SearchWrapper} from "./components/search-wrapper";
import {InitialSearchWrapper} from "./components/initial-search-wrapper";
import {modelRowLinks, newInLinks} from "./constants/constants.ts";

interface SearchMenuProps {
	buttonClassname: string;
}

export const SearchMenu: FC<SearchMenuProps> = ({buttonClassname}) => {

	const {isOpen, handleOpen, handleClose} = useModal()
	const {
		searchValue,
		onChangeSearchValue,
	} = useSearch();


	return (
		<div className={styles.searchMenu}
			 onMouseLeave={handleClose}
		>

			<SearchButton buttonClassname={buttonClassname}
						  handleOpenDropDownMenu={handleOpen}
			/>

			<div className={`${styles.dropDownModal} ${isOpen ? styles.open : styles.open}`}>
				<SearchWrapper searchValue={searchValue}
							   onChangeSearchValue={onChangeSearchValue}
							   handleClose={handleClose}
				/>

				<div className={styles.initialSearchData}>
					<InitialSearchWrapper title='Model rows' listOfLinks={modelRowLinks}/>
					<InitialSearchWrapper title='New In' listOfLinks={newInLinks}/>
				</div>
			</div>
		</div>
	)
}


{/*<ul>*/}
{/*	{*/}
{/*		isSearchLoading ? (*/}
{/*			<div>Loading...</div>*/}
{/*		) : (*/}
{/*			searchModelsList?.map((item) => (*/}
{/*				<li key={item.id}>*/}
{/*					{item.modelName}*/}
{/*					<br/>*/}
{/*				</li>*/}
{/*			))*/}
{/*		)*/}
{/*	}*/}
{/*</ul>*/}