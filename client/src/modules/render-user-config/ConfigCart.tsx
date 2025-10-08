import styles from './ConfigCart.module.scss'
import {useUserConfigs} from "./hooks/useUserConfigs.ts";
import {ConfigSummary} from "./components/config-summary";
import {ConfigList} from "./components/config-list";
import {EmptyConfigCart} from "./components/empty-config-cart";
import {BackButton} from "@components/back-button";

export const ConfigCart = () => {
	const {
		userConfigs,
		isConfigsLoading,
		isEmptyBasket
	} = useUserConfigs()

	if (isEmptyBasket()) {
		return <EmptyConfigCart/>
	}

	return (
		<>
			<header className={styles.configHeader}>
				<BackButton className={styles.configBackButton}/>
				<h2 className={styles.configTitle}
					data-is-skeleton={isConfigsLoading}
				>
					{!isConfigsLoading && 'Personalized Porsche configurations'}
				</h2>
			</header>
			<div className={styles.configWrapper}>
				<ConfigList userConfigs={userConfigs}
							isConfigsLoading={isConfigsLoading}
				/>
				<ConfigSummary userConfigs={userConfigs}
							   isConfigsLoading={isConfigsLoading}
				/>
			</div>
		</>

	)
}