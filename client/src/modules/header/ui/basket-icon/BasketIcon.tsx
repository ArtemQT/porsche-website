import styles from './BasketIcon.module.scss'

import type {FC} from "react";
import {ReactSVG} from "react-svg";

import basketIcon from '@assets/icons/porsche-config.svg';

interface UserIconProps {
	buttonClassname: string;
}

export const BasketIcon: FC<UserIconProps> = ({buttonClassname}) => {

	return (
		<>
			<button className={`${styles.basketIconButton} ${buttonClassname}`}
			>
				<ReactSVG src={basketIcon}/>
			</button>
		</>

	)
}