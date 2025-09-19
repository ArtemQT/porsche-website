import styles from "./SearchMenu.module.scss"

import type {FC} from "react";
import {ReactSVG} from "react-svg";

import searchIcon from '@assets/icons/search.svg';
import {useModal} from "../../../modal";
import {SearchForm} from "../../../search-models";

interface SearchIconProps {
	buttonClassname: string;
}

export const SearchMenu: FC<SearchIconProps> = ({buttonClassname}) => {

	const { isOpen, handleOpen, handleClose } = useModal()

	return (
		<div className={styles.searchMenu}
			 onMouseLeave={handleClose}
		>
			<button className={buttonClassname}
					onMouseEnter={handleOpen}
			>
				<ReactSVG src={searchIcon}/>
			</button>

			<div className={`${styles.dropDownModal} ${isOpen ? styles.open : ''}`}>
				<SearchForm/>
			</div>
		</div>

	)
}