import styles from "./SearchMenu.module.scss"

import type {FC} from "react";
import {ReactSVG} from "react-svg";

import searchIcon from '@assets/icons/search.svg';
import {useModal} from "../../../modal";
import {SearchForm} from "../../../search-models";
import {useSearch} from "../../../search-models/hooks/use-search.ts";

interface SearchIconProps {
	buttonClassname: string;
}

export const SearchMenu: FC<SearchIconProps> = ({buttonClassname}) => {

	const {isOpen, handleOpen, handleClose} = useModal()
	const {
		searchValue,
		onChangeSearchValue,
		isSearchLoading,
		searchModelsList
	} = useSearch();

	return (
		<div className={styles.searchMenu}>
			<button className={buttonClassname}
					onMouseEnter={handleOpen}
			>
				<ReactSVG src={searchIcon}/>
			</button>

			<div className={`${styles.dropDownModal} ${isOpen ? styles.open : ''}`}>
				<div className={styles.searchWrapper}>
					<SearchForm searchValue={searchValue}
								onChangeSearchValue={onChangeSearchValue}
					/>
					<button className={styles.cancelButton}
						 	onClick={handleClose}
					>
						Cancel
					</button>
				</div>
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
			</div>
		</div>

	)
}