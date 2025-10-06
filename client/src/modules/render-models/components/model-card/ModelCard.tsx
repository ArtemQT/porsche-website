import styles from './ModelCard.module.scss'

import type {IModelInfo} from "@shared/types/models-list-types.ts";
import type {FC} from "react";
import {Link} from "react-router-dom";
import {RoutePaths} from "@config/route-paths.ts";
import {ModelCardInfo} from "@shared/components/model-card-info";

interface ModelCardProps {
	model: IModelInfo;
}

export const ModelCard: FC<ModelCardProps> = ({model}) => {

	return (
		<article className={styles.modelCard}>

			<Link to={`${RoutePaths.modelConfigPage}/${model.id}`}
				  className={styles.modelCardLink}
			>
			</Link>

			<ModelCardInfo model={model}/>

			<Link to={`${RoutePaths.modelConfigPage}/${model.id}`}
				  className={styles.modelCardButton}
			>
				Configure model
			</Link>
		</article>
	)
}