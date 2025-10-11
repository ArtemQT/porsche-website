import styles from './BackButton.module.scss'
import {useNavigate} from "react-router-dom";
import type {FC} from "react";

interface BackButtonProps {
	className?: string
}

export const BackButton:FC<BackButtonProps> = ({className}) => {
	const navigate = useNavigate()

	const buttonClassname = `${styles.backButton} ${className ? className : ''}`

	return (
		<button className={buttonClassname}
			    type='button'
			    onClick={() => {navigate(-1)}}
		>
			Back to previous page
		</button>
	)
}