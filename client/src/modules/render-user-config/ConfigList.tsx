import styles from './ConfigList.module.scss'

import {useUserConfigs} from "./hooks/useUserConfigs.ts";
import {UserConfig} from "./components/user-config";
import {SkeletonUserConfig} from "./components/skeleton-user-config";
import {ConfigSummary} from "./components/config-summary";

export const ConfigList = () => {

	const {
		userConfigs,
		isConfigsLoading
	} = useUserConfigs()

	return (
		<div className={styles.configWrapper}>
			<ul className={styles.configList}
				data-is-config-loading={isConfigsLoading}
			>
				{
					isConfigsLoading ? (
						Array.from({length: 4}).map((_, i) => (
							<li key={i}><SkeletonUserConfig/></li>
						))
						)
						:
						(
							userConfigs?.map(config => (
								<UserConfig key={config.configHash} config={config}/>
							))
						)
				}
			</ul>
			<ConfigSummary userConfigs={userConfigs}
						   isConfigsLoading={isConfigsLoading}
			/>
		</div>
	)
}