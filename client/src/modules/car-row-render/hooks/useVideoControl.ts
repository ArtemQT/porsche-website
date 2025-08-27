import {type RefObject} from "react";
import styles from '../components/car-row-card/CarRowCard.module.scss'

export const useVideoControl =
	(
		posterRef: RefObject<HTMLDivElement | null>,
	 	videoRef: RefObject<HTMLVideoElement | null>,
	) => {

	const onMouseEnterCard = () => {
		if (videoRef.current && posterRef.current) {

			posterRef.current.classList.add(styles.hidden);

			videoRef.current.classList.add(styles.show);
			videoRef.current.play();
		}
	}

	const onMouseLeaveCard = () => {
		if (videoRef.current && posterRef.current) {

			posterRef.current.classList.remove(styles.hidden);

			videoRef.current.classList.remove(styles.show);
			videoRef.current.pause();
			videoRef.current.currentTime = 0;
		}
	}

	return {
		onMouseEnterCard,
		onMouseLeaveCard,
	}
}