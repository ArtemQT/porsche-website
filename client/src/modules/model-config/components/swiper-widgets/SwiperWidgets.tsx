import styles from './SwiperWidgets.module.scss'

import {ConfigMenuPagination} from "../config-menu-pagination";
import {ConfigSummaryList} from "../config-summary-list";

export const SwiperWidgets = () => {
	return (
		<div className={`${styles.swiperWidgetsWrapper} container`} id='config-menu'>
			<ConfigMenuPagination/>
			<ConfigSummaryList/>
		</div>
	)
}