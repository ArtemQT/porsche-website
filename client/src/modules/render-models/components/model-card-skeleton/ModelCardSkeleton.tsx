import styles from './ModelCardSkeleton.module.scss'

export const ModelCardSkeleton = () => {
	return (
		<div className={styles.skeletonCard}>
			<div className={styles.skeletonCardFuelType}></div>

			<div className={styles.skeletonCardImg}></div>

			<h4 className={styles.skeletonCardTitle}></h4>

			<ul className={styles.skeletonCardInfoList}>
				{
					Array.from({length: 3}, (_, i) =>
						<li className={styles.skeletonCardInfoItem} key={i}>
							<div className={styles.skeletonCardInfoData}></div>
							<p className={styles.skeletonCardInfoDescription}></p>
						</li>
					)
				}
			</ul>

			<button className={styles.skeletonCardButton}></button>
		</div>
	)
}