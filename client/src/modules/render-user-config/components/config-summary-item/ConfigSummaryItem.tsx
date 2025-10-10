import styles from './ConfigSummaryItem.module.scss';
import type {IUserConfig} from "@shared/types/user-config-types.ts";
import type {FC} from "react";
import {useAccordion} from "../../hooks/use-accordion.ts";

interface ConfigSummaryItemProps {
	config: IUserConfig;
}

export const ConfigSummaryItem:FC<ConfigSummaryItemProps> = ({config}) => {

	const {
		isAccordionOpen,
		toggleAccordion
	} = useAccordion()

	const configOptions: Omit<IUserConfig, 'configHash' | 'configPrice' | 'model' | 'totalPrice'>  = {
		exterior: config.exterior,
		wheels: config.wheels,
		interior: config.interior,
		carPackage: config.carPackage,
		exhaust: config.exhaust
	}

	return (
		<div className={styles.configItem}>
			<header className={styles.configHeader}
					onClick={toggleAccordion}
					data-is-open={isAccordionOpen}
			>
				<h4 className={styles.configTitle}>
					{config.model.modelName} configuration
				</h4>
			</header>
			<div className={styles.configBody}
				 data-is-open={isAccordionOpen}
			>
				<h5>Configuration</h5>
				<ul className={styles.configList}>
					{
						Object.values(configOptions).map(configOption => (
							<li key={configOption.label}>
								{configOption.label}
							</li>
						))
					}
				</ul>
			</div>
		</div>
	)
}