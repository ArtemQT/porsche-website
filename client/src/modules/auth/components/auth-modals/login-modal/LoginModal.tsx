import styles from '../AuthModal.module.scss'

import type {FC} from "react";

import {useLogin} from "../../../hooks/use-login.ts";
import {AuthForm} from "../../auth-form";
import {createPortal} from "react-dom";
import {AuthModalWidgets} from "../../auth-modal-widgets";

interface LoginModalProps {
	handleClose: () => void;
	isOpen: boolean;
}

export const LoginModal: FC<LoginModalProps> = ({handleClose, isOpen}) => {

	const {
		handleSubmit,
		onSubmit,
		loginFormConfig,
		reset
	} = useLogin();


	return createPortal(
		<div className={`${styles.authModalOverlay} ${isOpen ? styles.open : ''}`}
			 onClick={handleClose}
		>
			<div className={`${styles.authModalContent} ${isOpen ? styles.open : ''}`}
				 onClick={(e) => e.stopPropagation()}
			>
				<AuthModalWidgets reset={reset}/>

				<AuthForm handleSubmit={handleSubmit}
						  onSubmit={onSubmit}
						  config={loginFormConfig}
				/>
			</div>
		</div>,

		document.body
	)
}