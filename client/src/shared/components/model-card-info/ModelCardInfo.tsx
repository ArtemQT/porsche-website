import styles from './ModelCardInfo.module.scss'
import type {IModelInfo} from "@shared/types/models-list-types.ts";
import type {FC} from "react";

interface IModelCardInfo {
	id: number;
	info: string;
	description: string;
}

interface ModelCardInfoProps {
	model: IModelInfo;
	isDetailsHidden?: boolean;
}

export const ModelCardInfo: FC<ModelCardInfoProps> = ({model, isDetailsHidden}) => {
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
		<div>
			<div className={styles.modelInfoFuelType}>
				{model.fuelType}
			</div>

			<div className={styles.modelInfoImg}>
				<img src={`/car-models/${model.modelImage}`}
					 alt=""
					 width='300'
					 height='100'
				/>
			</div>

			<h4 className={styles.modelInfoTitle}>{model.modelName}</h4>

			<ul className={styles.modelInfoList}
				data-is-details-hidden={isDetailsHidden}
			>
				{
					modelCardInfo.map(infoItem => (
						<li className={styles.modelInfoItem} key={infoItem.id}>
							<div className={styles.modelInfoItemData}>
								{infoItem.info}
							</div>
							<p className={styles.modelInfoItemDescription}>
								{infoItem.description}
							</p>
						</li>
					))
				}
			</ul>
		</div>
	)
}