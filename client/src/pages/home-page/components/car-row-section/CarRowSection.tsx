import styles from './CarRowSection.module.scss'

import {type FC, useRef} from "react";
import {CarRowList} from "../../../../modules/car-row-render";
import {useCarRowBackground} from "../../../../modules/car-row-dynamic-bg";

export const CarRowSection: FC =  () => {

	const carRowRef = useRef<HTMLDivElement | null>(null)

	const {isDarkBg} = useCarRowBackground(carRowRef)

	return (
		<section className='section'>
			<div className={`${styles.wrapper} container`}
				 ref={carRowRef}
			>
				<h2 className={`h1 ${isDarkBg ? styles.dark : ''}`}>Your Porsche journey starts here.</h2>
				<CarRowList/>
			</div>
		</section>
	)
}