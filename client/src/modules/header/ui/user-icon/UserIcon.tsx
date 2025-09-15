import styles from './UserIcon.module.scss'

import {type FC, useRef} from "react";
import {ReactSVG} from "react-svg";
import userIcon from '@assets/icons/profile.svg';

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
		modalConfig
	} = useUserModal();

	const {
		isLoggedIn
	} = useAuth()

	const {
		handleLogout
	} = useLogout();

	return (
		<div className={styles.userMenu}
			 onMouseLeave={handleClose}
		>
			<button className={buttonClassname}
					onMouseEnter={handleOpen}
					ref={buttonRef}
			>
				<ReactSVG src={userIcon}/>
			</button>

			<div className={`${styles.dropDownModal} ${isOpen ? styles.open : ''}`}
				 onMouseLeave={handleClose}
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
			</div>
		</div>
	)
}