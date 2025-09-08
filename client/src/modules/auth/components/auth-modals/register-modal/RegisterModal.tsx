import styles from '../AuthModal.module.scss'

import {AuthForm} from "../../auth-form";
import {createPortal} from "react-dom";
import {AuthModalWidgets} from "../../auth-modal-widgets";
import {useRegister} from "../../../hooks/use-register.ts";
import {useRegisterModal} from "../../../hooks/use-register-modal.ts";

export const RegisterModal = () => {

	const {
		handleSubmit,
		onSubmit,
		registerFormConfig,
		reset
	} = useRegister();


	const {
		handleClose,
		isOpen
	} = useRegisterModal()

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
						  config={registerFormConfig}
				/>
			</div>
		</div>,

		document.body
	)
}