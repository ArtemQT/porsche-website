import styles from './UserIcon.module.scss'

import {type FC, useRef} from "react";
import {ReactSVG} from "react-svg";
import userIcon from '@assets/icons/profile.svg';
import {Link} from "react-router-dom";

import {Modal} from "../../../modal";
import {AUTH_PATHS} from "../../constants/constants.ts";
import {useUserModal} from "../../hooks/useUserModal.ts";

interface UserIconProps {
	buttonClassname: string;
}

export const UserIcon: FC<UserIconProps> = ({buttonClassname}) => {

	const buttonRef = useRef<HTMLButtonElement>(null);
	const listRef = useRef<HTMLUListElement>(null)

	const {
		isOpen,
		handleOpen,
		handleClose,
		coordinates
	} = useUserModal(buttonRef, listRef);

	return (
		<>
			<button className={buttonClassname}
					onClick={handleOpen}
					ref={buttonRef}
			>
				<ReactSVG src={userIcon}/>
			</button>
			<Modal isOpen={isOpen}
				   onClose={handleClose}
				   cssAbsoluteCoordinates={coordinates}
			>
				<ul className={styles.modalList} ref={listRef}>
					{
						AUTH_PATHS.map(item => (
							<li key={item.id} className={styles.modalItem}>
								<Link to={item.path}
									  className={styles.modalLink}
								>
									{item.text}
								</Link>
							</li>
						))
					}
				</ul>
			</Modal>
		</>

	)
}