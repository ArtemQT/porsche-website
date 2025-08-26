import styles from './IconsList.module.scss'
import {ReactSVG} from "react-svg";

import {ICONS} from "../../constants/constants.ts";

export const IconsList = () => {
	return (
		<ul className={styles.iconsList}>
			{
				ICONS.map(({id, icon}) => {
					return (
						<li key={id}>
							<button  className={styles.iconItem}>
								<ReactSVG src={icon}
										  className={styles.widgetIcon}
								/>
							</button>
						</li>
					)
				})
			}
		</ul>
	)
}