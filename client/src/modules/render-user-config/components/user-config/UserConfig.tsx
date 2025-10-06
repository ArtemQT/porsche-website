import styles from './UserConfig.module.scss'
import type {IUserConfig} from "@shared/types/user-config-types.ts";
import type {FC} from "react";
import {ModelCardInfo} from "@shared/components/model-card-info";
import {ConfigSwiper} from "../config-swiper";
import {ConfigSummary} from "../config-summary";

interface UserConfigProps {
	config: IUserConfig
}

export const UserConfig: FC<UserConfigProps> = ({config}) => {

	return (
		<li className={styles.userConfigItem}>
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
		</li>
	)
}