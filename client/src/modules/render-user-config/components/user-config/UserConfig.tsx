import styles from './UserConfig.module.scss'
import type {IUserConfig} from "@shared/types/user-config-types.ts";
import type {FC} from "react";
import {ModelCardInfo} from "@shared/components/model-card-info";
import {ConfigSwiper} from "../config-swiper";
import {ConfigSummary} from "../config-summary";
import {useAccordion} from "../../hooks/useAccordion.ts";

interface UserConfigProps {
	config: IUserConfig
}

export const UserConfig: FC<UserConfigProps> = ({config}) => {

	const {
		isAccordionOpen,
		toggleAccordion
	} = useAccordion()

	return (
		<li className={styles.userConfigItem}>
			<header className={styles.userConfigHeader}
					onClick={toggleAccordion}
					data-is-accordion-open={isAccordionOpen}
			>
				<h3 className={styles.userConfigTitle}>
					{config.model.modelName} configuration
				</h3>
			</header>

			<div className={styles.userConfigBody}
				 data-is-accordion-open={isAccordionOpen}
			>
				<div className={styles.modelCard}>
					<ModelCardInfo model={config.model}/>
				</div>

				<ConfigSwiper
					config={{
						exterior: config.exterior,
						wheels: config.wheels,
						interior: config.interior,
						carPackage: config.carPackage,
						exhaust: config.exhaust
					}}
					modelName={config.model.modelName}
				/>

				<ConfigSummary configPrice={config.configPrice}
							   totalPrice={config.totalPrice}
				/>
			</div>
		</li>
	)
}