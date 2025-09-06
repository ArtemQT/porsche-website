import styles from './InputField.module.scss'

import { type IInputField } from '../../types/auth-types.ts'
import {type FieldValues, useWatch} from "react-hook-form"
import {useTogglePassword} from "../../hooks/useTogglePassword.ts";

export const InputField = <T extends FieldValues>({
		name,
		type,
		label,
		validationRules,
		register,
		error,
		control,
		showEyeIcon
	}: IInputField<T>) => {

	const value = useWatch({
		control,
		name
	})

	const {
		isShowPassword,
		handleHidePassword,
		handleShowPassword,
		getInputType
	} = useTogglePassword(showEyeIcon, type);

	return (
		<label className={styles.inputField}>
			<p className={styles.inputError} data-error={!!error}>{error?.message}</p>

			<input className={`${styles.input} ${value ? styles.dirty : ''}`}
				   type={getInputType()}
				   {...register(name, validationRules)}
			/>
			<p className={styles.inputPlaceholder}>{label}</p>

			{
				showEyeIcon && (
					<button className={`${styles.inputEyeIcon} ${isShowPassword ? styles.show : ''}`}
							onMouseDown={handleShowPassword}
							onMouseUp={handleHidePassword}
							onMouseLeave={handleHidePassword}
							type='button'
					>
						<svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M12 16.01C14.2091 16.01 16 14.2191 16 12.01C16 9.80087 14.2091 8.01001 12 8.01001C9.79086 8.01001 8 9.80087 8 12.01C8 14.2191 9.79086 16.01 12 16.01Z" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
							<path d="M2 11.98C8.09 1.31996 15.91 1.32996 22 11.98" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
							<path d="M22 12.01C15.91 22.67 8.09 22.66 2 12.01" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
						</svg>
					</button>
				)
			}
		</label>

	)
}