import styles from './UserMenu.module.scss'

import {type FC} from "react";
import {ReactSVG} from "react-svg";
import userIcon from '@assets/icons/profile.svg';

import {useUserModal} from "../../hooks/useUserModal.ts";
import {useAuth, useLogout} from "../../../auth";

interface UserIconProps {
	buttonClassname: string;
}

export const UserMenu: FC<UserIconProps> = ({buttonClassname}) => {

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
					onTouchStart={handleOpen}
			>
				<ReactSVG src={userIcon}/>
			</button>

			<div className={`${styles.dropDownModal} ${isOpen ? styles.open : ''}`}>
				<ul className={styles.modalList}>
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