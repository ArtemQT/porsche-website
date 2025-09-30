import styles from './ConfigSection.module.scss'
import {ModelConfig} from "../../../../modules/model-config";

export const ConfigSection = () => {
	return (
		<section className={`${styles.configSection} section`}>
			<ModelConfig/>
		</section>
	)
}