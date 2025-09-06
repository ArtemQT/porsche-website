import type {ButtonHTMLAttributes, FC, ReactNode} from "react";

import styles from './Button.module.scss'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	buttonType: ButtonType;
	children: ReactNode;
}

export enum ButtonType {
	transparent = 'transparent',
	light = 'light',
	dark = 'dark',
}

export const Button: FC<ButtonProps> = ({buttonType, children, className, ...props}) => {
	return (
		<button className={`${styles.button} ${styles[buttonType]} ${className}`}
				type='button'
				{...props}
		>
			{children}
		</button>
	)
}