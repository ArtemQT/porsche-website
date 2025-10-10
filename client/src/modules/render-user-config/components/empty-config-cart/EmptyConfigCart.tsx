import styles from './EmptyConfigCart.module.scss'
import {HashLink} from 'react-router-hash-link';
import {RoutePaths} from "@config/route-paths.ts";
import type {FC} from "react";

interface EmptyConfigCartProps {
	isEmptyCart?: boolean;

	title: string;
	description: string;
	buttonText?: string;
}

export const EmptyConfigCart: FC<EmptyConfigCartProps> = ({title, description, buttonText, isEmptyCart}) => {
	return (
		<div className={styles.emptyCart}>
			<div className={styles.wrapper}>
				<h2 className='h1'>{title}</h2>
				<p>{description}</p>
			</div>

			{
				isEmptyCart && (
					<HashLink to={`${RoutePaths.homePage}#rows`}
							  className={styles.button}
					>
						{buttonText}
					</HashLink>
				)
			}
		</div>
	)

}