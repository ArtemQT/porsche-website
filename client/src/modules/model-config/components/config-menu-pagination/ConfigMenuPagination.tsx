import styles from './ConfigMenuPagination.module.scss'
import type {FC} from "react";
import {configMenuPaginationList} from "../../constants/config-menu-pagination.ts";

interface ConfigMenuPaginationProps {
	activeIndex: number;
	onBulletClick: (index: number) => void;
	isOpenConfigMenu: boolean;
}

export const ConfigMenuPagination:FC<ConfigMenuPaginationProps> = ({activeIndex, onBulletClick, isOpenConfigMenu}) => {
	return (
		<ul className={styles.paginationList}
			data-is-config-menu-open={isOpenConfigMenu}
		>
			{
				configMenuPaginationList.map(bullet => (
					<li key={bullet.index}>
						<button onClick={() => onBulletClick(bullet.index)}
								className={`${styles.paginationButton} ${activeIndex === bullet.index && isOpenConfigMenu ? styles.active : ''}`}
						>
							<div className={styles.paginationImg}>
								<img src={bullet.img}
									 alt=""
									 width={25}
									 height={25}
								/>
							</div>
							<p className={styles.paginationDescription}>{bullet.description}</p>
						</button>
					</li>
				))
			}
		</ul>
	)
}