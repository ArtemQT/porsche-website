import styles from './CarRowCard.module.scss';

import {type FC, useRef} from "react";
import type {ICarRowModels} from "../../constants/constants.ts";
import {Link} from "react-router-dom";
import {useCardControl} from "../../hooks/useCardControl.ts";

interface CarRowCardProps {
	carRow: ICarRowModels;
}

export const CarRowCard: FC<CarRowCardProps> = ({carRow}) => {

	const videoRef = useRef<HTMLVideoElement | null>(null);
	const posterRef = useRef<HTMLDivElement | null>(null);
	const cardRef = useRef<HTMLLIElement | null>(null);

	const {
		onMouseEnterCard,
		onMouseLeaveCard
	} = useCardControl(posterRef, videoRef, cardRef)

	return (
		<li className={styles.card}
			ref={cardRef}
			onMouseLeave={onMouseLeaveCard}
			onMouseEnter={onMouseEnterCard}
		>
			<div className={styles.cardPoster}
				 ref={posterRef}
			>
				<img src={carRow.modelPoster} alt=""/>
			</div>

			<video className={styles.cardVideo}
				   src={carRow.modelVideo}
				   ref={videoRef}
				   muted
			>
			</video>

			<div className={styles.cardModel}>
				<img src={carRow.modelRowIcon} alt=""/>
			</div>

			<div className={styles.cardInfo}>
				<div className={styles.cardFuelType}>{carRow.fuelType}</div>
				<div className={styles.cardWrapper}>
					<p className={styles.cardDescription}>{carRow.modelDescription}</p>
					<Link className={styles.cardLink}
						  to={''}
					>
						All {carRow.modelRow} models
					</Link>
				</div>
			</div>
		</li>
	)
}