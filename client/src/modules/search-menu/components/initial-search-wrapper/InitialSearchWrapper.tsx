import styles from './InitialSearchWrapper.module.scss'
import type {IInitialSearchItem} from "../../types/types.ts";
import type {FC} from "react";
import {Link} from "react-router-dom";

interface InitialSearchWrapperProps {
	title: string;
	listOfLinks: IInitialSearchItem[]
}

export const InitialSearchWrapper: FC<InitialSearchWrapperProps> = ({title, listOfLinks}) => {
	return (
		<div>
			<h3 className={styles.initialSearchTitle}>{title}</h3>
			<ul className={styles.initialSearchList}>
				{
					listOfLinks.map(linkItem => (
						<li key={linkItem.id} className={styles.initialSearchItem}>
							<Link to={linkItem.link}>
								<span className={styles.initialSearchItemText}>{linkItem.label}</span>
							</Link>
						</li>
					))
				}
			</ul>
		</div>
	)
}