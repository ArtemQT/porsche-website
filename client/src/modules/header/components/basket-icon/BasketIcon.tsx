import styles from './BasketIcon.module.scss'

import type {FC} from "react";
import {ReactSVG} from "react-svg";

import basketIcon from '@assets/icons/porsche-config.svg';
import {Link} from "react-router-dom";
import {RoutePaths} from "@config/route-paths.ts";

interface UserIconProps {
	buttonClassname: string;
}

export const BasketIcon: FC<UserIconProps> = ({buttonClassname}) => {
	return (
		<Link className={`${styles.basketIconButton} ${buttonClassname}`}
			  to={RoutePaths.userConfigPage}
		>
			<ReactSVG src={basketIcon}/>
		</Link>
	)
}