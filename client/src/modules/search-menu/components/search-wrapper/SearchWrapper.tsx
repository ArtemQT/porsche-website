import styles from "./SearchWrapper.module.scss";
import {SearchForm} from "../../../search-models";
import type {ChangeEvent, FC} from "react";

interface SearchWrapperProps {
	searchValue: string;
	onChangeSearchValue: (e: ChangeEvent<HTMLInputElement>) => void;
	handleClose: () => void;
}

export const SearchWrapper:FC<SearchWrapperProps> = ({searchValue, onChangeSearchValue, handleClose}) => {

	return (
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
	)
}