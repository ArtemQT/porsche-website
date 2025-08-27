import {type RefObject} from "react";
import styles from '../components/car-row-card/CarRowCard.module.scss'
import {isElementEven} from "../helpers/isElementEven.ts";

export const useCardControl =
	(
		posterRef: RefObject<HTMLDivElement | null>,
		videoRef: RefObject<HTMLVideoElement | null>,
		cardRef: RefObject<HTMLLIElement | null>
	) => {

		const onMouseEnterCard = () => {
			posterRef.current?.classList.add(styles.hidden);

			videoRef.current?.classList.add(styles.show);
			videoRef.current?.play();

			if (cardRef.current) {
				cardRef.current.classList.add(styles.extended);

				if (isElementEven(cardRef.current)) {
					const sibling = cardRef.current.previousElementSibling
					if (sibling) {
						sibling.classList.add(styles.shrink);
					}
				} else {
					const sibling = cardRef.current.nextElementSibling
					if (sibling) {
						sibling.classList.add(styles.shrink);
					}
				}
			}
		}

		const onMouseLeaveCard = () => {

			posterRef.current?.classList.remove(styles.hidden);

			videoRef.current?.classList.remove(styles.show);
			videoRef.current?.pause();

			if (videoRef.current) {
				videoRef.current.currentTime = 0;
			}

			if (cardRef.current) {
				cardRef.current.classList.remove(styles.extended);

				if (isElementEven(cardRef.current)) {
					const sibling = cardRef.current.previousElementSibling;
					if (sibling) {
						sibling.classList.remove(styles.shrink);
					}
				} else {
					const sibling = cardRef.current.nextElementSibling;
					if (sibling) {
						sibling.classList.remove(styles.shrink);
					}
				}
			}
		}

		return {
			onMouseEnterCard,
			onMouseLeaveCard,
		}
	}