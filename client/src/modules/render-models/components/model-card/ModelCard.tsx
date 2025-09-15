import styles from './ModelCard.module.scss'
import type {IModelInfo} from "../../types/models-list-types.ts";
import type {FC} from "react";

interface IModelCardInfo {
	id: number;
	info: string;
	description: string;
}

interface ModelCardProps {
	model: IModelInfo;
}

export const ModelCard:FC<ModelCardProps> = ({model}) => {
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
				/>
			</div>

			<h4 className={styles.modelCardTitle}>{model.modelName}</h4>

			{
				modelCardInfo.map(infoItem => (
					<div className={styles.modelCardInfoWrapper} key={infoItem.id}>
						<div className={styles.modelCardInfo}>
							{infoItem.info}
						</div>
						<p className={styles.modelCardDescription}>
							{infoItem.description}
						</p>
					</div>
				))
			}
		</li>
	)
}