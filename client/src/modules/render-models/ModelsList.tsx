import styles from './ModelsList.module.scss'
import {useModelsList} from "./hooks/use-models-list.ts";

export const ModelsList = () => {
	const {
		modelsList,
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
		<ul className={styles.modelsList}>
			{
				modelsList?.map((model) => (
					JSON.stringify(model)
				))
			}
		</ul>
	)
}