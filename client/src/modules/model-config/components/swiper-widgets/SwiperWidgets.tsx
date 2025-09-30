import styles from './SwiperWidgets.module.scss'

import type {FC} from "react";
import {Button, ButtonType} from "@components/button";
import {ConfigMenuPagination} from "../config-menu-pagination";
import {useModel} from "../../hooks/useModel.ts";

interface SwiperWidgetsProps {
	isOpenConfigMenu: boolean;
	toggleConfigMenu: () => void;
	activeIndex: number;
	onBulletClick: (index: number) => void;
}

export const SwiperWidgets:FC<SwiperWidgetsProps> = ({isOpenConfigMenu, toggleConfigMenu, activeIndex, onBulletClick}) => {

	const {
		// isModelLoading,
		model
	} = useModel();

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

			<div className={styles.modelPrice}>{model?.price} £</div>
		</div>
	)
}