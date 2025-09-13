import styles from '../AuthModal.module.scss'

import {AuthForm} from "../../auth-form";
import {createPortal} from "react-dom";
import {AuthModalWidgets} from "../../auth-modal-widgets";
import {useRegister} from "../../../hooks/use-register.ts";
import {useRegisterModal} from "../../../hooks/use-register-modal.ts";
import type {MouseEventHandler} from "react";

export const RegisterModal = () => {

	const {
		handleSubmit,
		onSubmit,
		registerFormConfig,
		reset,
		isRegisterPending
	} = useRegister();

	const {
		handleClose,
		isOpen
	} = useRegisterModal()

	const onClose: MouseEventHandler<HTMLDivElement> = () => {
		handleClose();
		reset();
	}

	return createPortal(
		<div className={`${styles.authModalOverlay} ${isOpen ? styles.open : ''}`}
			 onClick={onClose}
		>
			<div className={`${styles.authModalContent} ${isOpen ? styles.open : ''}`}
				 onClick={(e) => e.stopPropagation()}
			>
				<AuthModalWidgets reset={reset} handleClose={handleClose}/>

				<AuthForm handleSubmit={handleSubmit}
						  onSubmit={onSubmit}
						  config={registerFormConfig}
						  isAuthPending={isRegisterPending}
				/>
			</div>
		</div>,

		document.body
	)
}