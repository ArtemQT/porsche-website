import styles from './ConfigCart.module.scss'
import {useUserConfigs} from "./hooks/use-user-configs.ts";
import {ConfigSummary} from "./components/config-summary";
import {ConfigList} from "./components/config-list";
import {EmptyConfigCart} from "./components/empty-config-cart";

export const ConfigCart = () => {
	const {
		userConfigs,
		isConfigsLoading,
		isEmptyCart,
		isAuthenticatedError
	} = useUserConfigs()

	if (isEmptyCart()) {
		return <EmptyConfigCart isEmptyCart={true}
								title='The configuration list is empty'
								description='There are no configurations to display'
								buttonText='Choose your range of models in Porsche'
		/>
	}

	if (isAuthenticatedError()) {
		return <EmptyConfigCart title='Authentication Required'
								description='To view and manage your personalized Porsche configurations, please sign in to your account'
		/>
	}

	return (
		<>
			<h2 className={styles.configTitle}
				data-is-skeleton={isConfigsLoading}
			>
				{!isConfigsLoading && 'Personalized Porsche configurations'}
			</h2>
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