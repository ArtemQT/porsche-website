import styles from './ConfigItem.module.scss'
import type {IUserConfig} from "@shared/types/user-config-types.ts";
import type {FC} from "react";
import {ModelCardInfo} from "@shared/components/model-card-info";
import {ConfigSwiper} from "../config-swiper";
import {ConfigPriceDetails} from "../config-price-details";
import {useAccordion} from "../../hooks/use-accordion.ts";

interface UserConfigProps {
	config: IUserConfig
}

export const ConfigItem: FC<UserConfigProps> = ({config}) => {

	const {
		isAccordionOpen,
		toggleAccordion
	} = useAccordion()

	return (
		<li className={styles.userConfigItem}
			id={config.configHash}
		>
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
					<ModelCardInfo model={config.model}
								   isDetailsHidden={true}
					/>
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

				<ConfigPriceDetails configPrice={config.configPrice}
									totalPrice={config.totalPrice}
									configHash={config.configHash}
				/>
			</div>
		</li>
	)
}