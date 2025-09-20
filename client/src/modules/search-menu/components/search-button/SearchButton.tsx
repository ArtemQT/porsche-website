import searchIcon from "@assets/icons/search.svg";
import type {FC} from "react";
import {ReactSVG} from "react-svg";

interface SearchButtonProps {
	buttonClassname: string;
	handleOpenDropDownMenu: () => void;
}

export const SearchButton: FC<SearchButtonProps> = ({buttonClassname, handleOpenDropDownMenu}) => {
	return (
		<button className={buttonClassname}
				onMouseEnter={handleOpenDropDownMenu}
		>
			<ReactSVG src={searchIcon}/>
		</button>
	)
}