import type {FC} from "react";
import {ReactSVG} from "react-svg";

import basketIcon from '@assets/icons/basket.svg';
import {Modal, useModal} from "../../../modal";

interface UserIconProps {
	buttonClassname: string;
}

export const BasketIcon: FC<UserIconProps> = ({buttonClassname}) => {

	const { isOpen, handleOpen, handleClose } = useModal()

	return (
		<>
			<button className={buttonClassname}
					onClick={handleOpen}
			>
				<ReactSVG src={basketIcon}/>
			</button>
			<Modal isOpen={isOpen} onClose={handleClose}>
				<></>
			</Modal>
		</>

	)
}