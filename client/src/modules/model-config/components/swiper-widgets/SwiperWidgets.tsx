import styles from './SwiperWidgets.module.scss'

import type {FC} from "react";
import {Button, ButtonType} from "@components/button";
import {ConfigMenuPagination} from "../config-menu-pagination";

interface SwiperWidgetsProps {
	isOpenConfigMenu: boolean;
	toggleConfigMenu: () => void;
	activeIndex: number;
	onBulletClick: (index: number) => void;
	modelPrice: number | undefined;
	isModelLoading: boolean;
}

export const SwiperWidgets:FC<SwiperWidgetsProps> = ({isOpenConfigMenu, toggleConfigMenu, activeIndex, onBulletClick, modelPrice}) => {

	return (
		<div className={`${styles.swiperWidgetsWrapper} container`} id='config-menu'>
			<Button buttonType={ButtonType.dark}
					onClick={toggleConfigMenu}
					className={styles.toggleMenuButton}
			>
				{isOpenConfigMenu ? 'Close' : 'Open'} configuration menu
			</Button>

			<ConfigMenuPagination activeIndex={activeIndex}
								  onBulletClick={onBulletClick}
								  isOpenConfigMenu={isOpenConfigMenu}
			/>

			<div className={styles.modelPrice}>{modelPrice} £</div>
		</div>
	)
}