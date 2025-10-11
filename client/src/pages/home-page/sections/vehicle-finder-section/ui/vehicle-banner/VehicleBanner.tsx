import styles from './VehicleBanner.module.scss'
import type {FC} from "react";

import bannerImg from '@assets/images/vehicle-finder-banner.jpg'

export const VehicleBanner: FC = () => {
	return (
		<div className={styles.wrapperBanner}>
			<img src={bannerImg}
				 alt="Banner for vehicle"
				 loading='lazy'
			/>
		</div>
	)
}