import styles from './ConfigList.module.scss'

import {useUserConfigs} from "./hooks/useUserConfigs.ts";
import {UserConfig} from "./components/user-config";

export const ConfigList = () => {

	const {
		userConfigs,
		isConfigsLoading
	} = useUserConfigs()

	return (
		<div className={styles.configWrapper}>
			<ul className={styles.configList}>
				{
					!isConfigsLoading && (
						userConfigs?.map(config => (
							<UserConfig key={config.configHash} config={config}/>
						))
					)
				}
			</ul>
			<div className={styles.configSummary}></div>
		</div>

	)
}