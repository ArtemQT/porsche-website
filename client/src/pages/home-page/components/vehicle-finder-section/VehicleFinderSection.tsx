import styles from './VehicleFinderSection.module.scss'

import type {FC} from "react";

import {VehicleBanner} from "./ui/vehicle-banner";
import {VehicleBody} from "./ui/vehicle-body";

export const VehicleFinderSection: FC = () => {
	return (
		<section className='section container'>
			<div className={styles.wrapper}>
				<VehicleBanner/>
				<VehicleBody/>
			</div>
		</section>
	)
}