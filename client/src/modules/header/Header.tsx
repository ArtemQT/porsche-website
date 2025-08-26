import styles from './Header.module.scss'

import type {FC} from "react";

import {Logo} from "./components/logo/Logo.tsx";
import {IconsList} from "./components/icons-list/IconsList.tsx";
import {BurgerMenu} from "./components/burger-menu/BurgerMenu.tsx";
import {useAnimatedLogo} from "./hooks/useAnimatedLogo.ts";

export const Header: FC = () => {

	const {isScrolledHeader} = useAnimatedLogo();

	return (
		<header className={styles.header}>
			<div className={`container ${styles.headerInner}`}>
				<Logo isScrolledHeader={isScrolledHeader}/>
				<div className={styles.widgetsWrapper}>
					<IconsList/>
					<BurgerMenu/>
				</div>
			</div>
		</header>
	)
}