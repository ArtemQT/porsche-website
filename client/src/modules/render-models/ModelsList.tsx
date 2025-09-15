import styles from './ModelsList.module.scss'
import {useModelsList} from "./hooks/use-models-list.ts";
import {ModelCard} from "./components/model-card";

export const ModelsList = () => {
	const {
		modelsList,
		modelsRow,
		modelsListError,
		isLoading
	} = useModelsList();

	if (isLoading) {
		return <div>Loading...</div>;
	}

	if (modelsListError) {
		return <div>{modelsListError.message}</div>;
	}

	return (
		<div className={styles.modelsWrapper}>
			<h3 className={styles.modelsTitle}>
				{modelsRow} models
			</h3>
			<ul className={styles.modelsList}>
				{
					modelsList?.map((model) => (
						<ModelCard key={model.id} model={model}/>
					))
				}
			</ul>
		</div>
	)
}