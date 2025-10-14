import styles from './Header.module.scss'

import type {FC} from "react";

import {Logo} from "./components/logo/Logo.tsx";
import {IconsList} from "./components/icons-list/IconsList.tsx";
// import {BurgerMenu} from "./components/burger-menu/BurgerMenu.tsx";
import {useAnimatedLogo} from "./hooks/useAnimatedLogo.ts";
import {useLocation} from "react-router-dom";
import {RoutePaths} from "@config/route-paths.ts";

export const Header: FC = () => {

	const {isScrolledHeader} = useAnimatedLogo();
	const location = useLocation();
	const isHomePage = location.pathname === RoutePaths.homePage;

	return (
		<header className={styles.header}
				data-is-home-page={isHomePage}
		>
			<div className={`container ${styles.headerInner}`}>
				<Logo isScrolledHeader={isScrolledHeader} isHomePage={isHomePage}/>
				<div className={styles.widgetsWrapper}>
					<IconsList/>
					{/*<BurgerMenu/>*/}
				</div>
			</div>
		</header>
	)
}