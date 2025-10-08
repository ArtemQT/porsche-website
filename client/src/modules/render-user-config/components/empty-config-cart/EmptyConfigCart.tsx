import styles from './EmptyConfigCart.module.scss'
import { HashLink } from 'react-router-hash-link';
import {RoutePaths} from "@config/route-paths.ts";
import {BackButton} from "@components/back-button";

export const EmptyConfigCart = () => {
	return (
		<div>
			<BackButton className={styles.backButton}/>

			<div className={styles.emptyCart}>
				<div className={styles.wrapper}>
					<h2 className='h1'>The configuration list is empty</h2>
					<p>There are no configurations to display</p>
				</div>
				<HashLink to={`${RoutePaths.homePage}#rows`}
						  className={styles.button}
				>
					Choose your range of models in Porsche
				</HashLink>
			</div>
		</div>
	)
}