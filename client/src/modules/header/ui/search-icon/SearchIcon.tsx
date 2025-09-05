import type {FC} from "react";
import {ReactSVG} from "react-svg";

import searchIcon from '@assets/icons/search.svg';
import {Modal, useModal} from "../../../modal";

interface SearchIconProps {
	buttonClassname: string;
}

export const SearchIcon: FC<SearchIconProps> = ({buttonClassname}) => {

	const { isOpen, handleOpen, handleClose } = useModal()

	return (
		<>
			<button className={buttonClassname}
					onClick={handleOpen}
			>
				<ReactSVG src={searchIcon}/>
			</button>
			<Modal isOpen={isOpen} onClose={handleClose}>
				<></>
			</Modal>
		</>

	)
}