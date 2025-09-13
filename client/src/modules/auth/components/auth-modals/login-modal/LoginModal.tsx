import styles from '../AuthModal.module.scss'

import {useLogin} from "../../../hooks/use-login.ts";
import {AuthForm} from "../../auth-form";
import {createPortal} from "react-dom";
import {AuthModalWidgets} from "../../auth-modal-widgets";
import {useLoginModal} from "../../../hooks/use-login-modal.ts";

export const LoginModal = () => {

	const {
		handleSubmit,
		onSubmit,
		loginFormConfig,
		reset,
		isLoginPending
	} = useLogin();

	const {
		handleClose,
		isOpen,
	} = useLoginModal()

	return createPortal(
		<div className={`${styles.authModalOverlay} ${isOpen ? styles.open : ''}`}
			 onClick={handleClose}
		>
			<div className={`${styles.authModalContent} ${isOpen ? styles.open : ''}`}
				 onClick={(e) => e.stopPropagation()}
			>
				<AuthModalWidgets reset={reset} handleClose={handleClose}/>

				<AuthForm handleSubmit={handleSubmit}
						  onSubmit={onSubmit}
						  config={loginFormConfig}
						  isAuthPending={isLoginPending}
				/>
			</div>
		</div>,

		document.body
	)
}