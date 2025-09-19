import styles from './ModelCard.module.scss'

import type {IModelInfo} from "@shared/types/models-list-types.ts";
import type {FC} from "react";

interface IModelCardInfo {
	id: number;
	info: string;
	description: string;
}

interface ModelCardProps {
	model: IModelInfo;
}

export const ModelCard: FC<ModelCardProps> = ({model}) => {
	const modelCardInfo: IModelCardInfo[] = [
		{
			id: 1,
			info: model.modelAcceleration,
			description: 'Acceleration 0 - 100 km/h'
		},
		{
			id: 2,
			info: model.powerKwKp,
			description: 'Power (kW) / Power (PS)'
		},
		{
			id: 3,
			info: model.topSpeed,
			description: 'Top speed'
		}
	]

	return (
		<li className={styles.modelCard}>
			<div className={styles.modelCardFuelType}>
				{model.fuelType}
			</div>

			<div className={styles.modelCardImg}>
				<img src={`/car-models/${model.modelImage}`}
					 alt=""
					 width='300'
					 height='100'
				/>
			</div>

			<h4 className={styles.modelCardTitle}>{model.modelName}</h4>

			<ul className={styles.modelCardInfoList}>
				{
					modelCardInfo.map(infoItem => (
						<li className={styles.modelCardInfoItem} key={infoItem.id}>
							<div className={styles.modelCardInfoData}>
								{infoItem.info}
							</div>
							<p className={styles.modelCardInfoDescription}>
								{infoItem.description}
							</p>
						</li>
					))
				}
			</ul>


			<button className={styles.modelCardButton}>
				Configure model
			</button>
		</li>
	)
}