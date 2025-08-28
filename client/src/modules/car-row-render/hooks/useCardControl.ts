import {type RefObject} from "react";
import styles from '../components/car-row-card/CarRowCard.module.scss'

export const useCardControl =
	(
		posterRef: RefObject<HTMLDivElement | null>,
		videoRef: RefObject<HTMLVideoElement | null>,
		cardRef: RefObject<HTMLLIElement | null>
	) => {
		const isElementEven = (element: HTMLLIElement | null) => {

			if (!element || !element.parentElement) {
				return false
			}

			const children = Array.from(element.parentElement.children);
			const index = children.indexOf(element);

			return index % 2;
		}

		const toggleCardElement = (cardElement: HTMLLIElement, toggle: 'add' | 'remove') => {

			let sibling;

			if (isElementEven(cardElement)) {
				sibling = cardElement.previousElementSibling;
			} else {
				sibling = cardElement.nextElementSibling;
			}

			if (sibling) {
				if (toggle === 'add') {

					cardElement.classList.add(styles.extended);
					sibling.classList.add(styles.shrink);

				} else if (toggle === 'remove') {

					cardElement.classList.remove(styles.extended);
					sibling.classList.remove(styles.shrink);

				}
			}
		}

		const toggleVideoElement =
			(videoElement: HTMLVideoElement,
			 posterElement: HTMLDivElement,
			 toggle: 'play' | 'pause',
			) => {

				if (toggle === 'play') {
					posterElement.classList.add(styles.hidden);
					videoElement.classList.add(styles.show);
					videoElement.play();
				} else if (toggle === 'pause') {
					posterElement.classList.remove(styles.hidden);
					videoElement.classList.remove(styles.show);
					videoElement.pause();
					videoElement.currentTime = 0;
				}
			}

		const onMouseEnterCard = () => {
			if (posterRef.current && videoRef.current) {
				toggleVideoElement(videoRef.current, posterRef.current, 'play')
			}
			if (cardRef.current) {
				toggleCardElement(cardRef.current, 'add');
			}
		}

		const onMouseLeaveCard = () => {
			if (posterRef.current && videoRef.current) {
				toggleVideoElement(videoRef.current, posterRef.current, 'pause')
			}
			if (cardRef.current) {
				toggleCardElement(cardRef.current, 'remove');
			}
		}

		return {
			onMouseEnterCard,
			onMouseLeaveCard,
		}
	}