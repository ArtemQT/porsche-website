import styles from './CarRowSection.module.scss'

import type {FC} from "react";
import {CarRowList} from "../../../../modules/car-row-render";

export const CarRowSection: FC =  () => {
	return (
		<section className='section'>
			<div className={`${styles.wrapper} container`}>
				<h2 className='h1'>Your Porsche journey starts here.</h2>
				<CarRowList/>
			</div>
		</section>
	)
}