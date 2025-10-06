import styles from './ModelsList.module.scss'
import {useModelsList} from "./hooks/use-models-list.ts";
import {ModelCard} from "./components/model-card";

export const ModelsList = () => {
	const {
		modelsList,
		modelsRow,
		modelsListError,
		isLoading,
		skeletonsList
	} = useModelsList();

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
					isLoading ? (
						skeletonsList.map(((SkeletonCard, index) => <SkeletonCard key={index}/>))
					) : (
						modelsList?.map((model) => (
							<li key={model.id}>
								<ModelCard model={model}/>
							</li>
						))
					)
				}
			</ul>
		</div>
	)
}