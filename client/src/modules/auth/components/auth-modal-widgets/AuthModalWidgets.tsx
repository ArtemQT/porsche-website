import styles from './AuthModalWidgets.module.scss'

import logoImg from '@assets/images/porsche-logo.png';
import type {FieldValues, UseFormReset} from "react-hook-form";
import type {MouseEventHandler} from "react";

interface AuthModalWidgetsProps<T extends FieldValues> {
	reset: UseFormReset<T>,
	handleClose: () => void,
}

export const AuthModalWidgets = <T extends FieldValues>({reset, handleClose}: AuthModalWidgetsProps<T>) => {

	const onClose: MouseEventHandler<HTMLButtonElement> = () => {
		handleClose();
		reset();
	}

	return (
		<div className={styles.widgets}>
			<div className={styles.widgetsLogo}>
				<img src={logoImg} alt=""
					 width='75'
					 height='100'
				/>
			</div>

			<button className={styles.widgetsCloseButton}
					onClick={onClose}
			>
			</button>
		</div>
	)
}