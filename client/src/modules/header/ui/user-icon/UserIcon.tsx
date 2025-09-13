import styles from './UserIcon.module.scss'

import {type FC, useRef} from "react";
import {ReactSVG} from "react-svg";
import userIcon from '@assets/icons/profile.svg';

import {Modal} from "../../../modal";
import {useUserModal} from "../../hooks/useUserModal.ts";
import {useAuth, useLogout} from "../../../auth";

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
		coordinates,
		modalConfig
	} = useUserModal(buttonRef, listRef);

	const {
		isLoggedIn
	} = useAuth()

	const {
		handleLogout
	} = useLogout()

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
						isLoggedIn ? (
							<li className={styles.modalItem}>
								<button className={styles.modalLink}
										onClick={handleLogout}
								>
									Logout
								</button>
							</li>
						) : (
							modalConfig.map(item => (
									<li key={item.id} className={styles.modalItem}>
										<button className={styles.modalLink}
												onClick={item.onClick}
										>
											{item.text}
										</button>
									</li>
								)
							))
					}
				</ul>
			</Modal>
		</>

	)
}