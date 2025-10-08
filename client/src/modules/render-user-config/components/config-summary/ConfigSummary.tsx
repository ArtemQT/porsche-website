import styles from './ConfigSummary.module.scss'
import type {IUserConfig} from "@shared/types/user-config-types.ts";
import type {FC} from "react";
import {ConfigSummaryItem} from "../config-summary-item";

interface ConfigSummaryProps {
	userConfigs: IUserConfig[] | undefined;
	isConfigsLoading: boolean;
}

export const ConfigSummary:FC<ConfigSummaryProps> = ({userConfigs, isConfigsLoading}) => {
	return (
		<aside className={styles.configSummary}
			   data-is-skeleton={isConfigsLoading}
		>
			{
				!isConfigsLoading && (
					<>
						<h3 className='h4'>Configuration resume</h3>

						<ul className={styles.configSummaryList}>
							{
								userConfigs?.map(config => (
									<li key={config.configHash} className={styles.configSummaryItem}>
										<ConfigSummaryItem config={config}/>
									</li>
								))
							}
						</ul>
					</>
				)
			}
		</aside>
	)
}