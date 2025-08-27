import styles from './CarRowList.module.scss'

import {CAR_ROW_MODELS} from "./constants/constants.ts";

import type {FC} from "react";
import {CarRowCard} from "./components/car-row-card";

export const CarRowList: FC = () => {
	return (
		<ul className={styles.carRowList}>
			{
				CAR_ROW_MODELS.map(carRow => (
					<CarRowCard key={carRow.id} carRow={carRow}/>
				))
			}
		</ul>
	)
}