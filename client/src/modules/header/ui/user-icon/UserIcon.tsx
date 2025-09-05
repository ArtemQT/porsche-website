import styles from './UserIcon.module.scss'

import {type FC, useEffect, useRef, useState} from "react";
import {ReactSVG} from "react-svg";
import userIcon from '@assets/icons/profile.svg';
import {Link} from "react-router-dom";

import {Modal, useModal} from "../../../modal";
import {AUTH_PATHS} from "../../constants/constants.ts";
import type {TCoordinates} from "../../../modal/Modal.tsx";

interface UserIconProps {
	buttonClassname: string;
}

export const UserIcon: FC<UserIconProps> = ({buttonClassname}) => {

	const {isOpen, handleOpen, handleClose} = useModal();
	const [coordinates, setCoordinates] = useState<TCoordinates>({
		top: '0',
		left: '0'
	})
	const buttonRef = useRef<HTMLButtonElement>(null);
	const listRef = useRef<HTMLUListElement>(null)


	useEffect(() => {

		const calculateCoordinates = () => {
			if (isOpen && buttonRef.current && listRef.current) {
				const iconRect = buttonRef.current.getBoundingClientRect();
				const modalRect = listRef.current.getBoundingClientRect();

				setCoordinates({
					top:  iconRect.bottom + 'px',
					left: iconRect.left - modalRect.width / 2.5 + 'px'
				})
			}
		}

		if (isOpen) {
			calculateCoordinates();

			window.addEventListener('resize', calculateCoordinates);

			return () => {
				window.removeEventListener('resize', calculateCoordinates);
			};
		}

	}, [isOpen]);

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