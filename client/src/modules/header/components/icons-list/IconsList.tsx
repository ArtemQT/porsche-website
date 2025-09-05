import styles from './IconsList.module.scss'

import {ICONS} from "../../constants/constants.ts";

export const IconsList = () => {
	return (
		<ul className={styles.iconsList}>
			{
				ICONS.map(({id, IconComponent}) => {
					return (
						<li key={id} className={styles.iconsItem}>
							<IconComponent buttonClassname={styles.widgetButton}/>
						</li>
					)
				})
			}
		</ul>
	)
}