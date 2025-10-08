import styles from "./ConfigList.module.scss";
import {SkeletonUserConfig} from "../skeleton-user-config";
import type {IUserConfig} from "@shared/types/user-config-types.ts";
import type {FC} from "react";
import {ConfigItem} from "../config-item";

interface ConfigListProps {
	userConfigs: IUserConfig[] | undefined;
	isConfigsLoading: boolean;
}

export const ConfigList: FC<ConfigListProps> = ({userConfigs, isConfigsLoading}) => {
	return (
		<ul className={styles.configList}
			data-is-config-loading={isConfigsLoading}
		>
			{
				isConfigsLoading ? (
					Array.from({length: 4}).map((_, i) => (
						<li key={i}><SkeletonUserConfig/></li>
					))
				) : (
					userConfigs?.map(config => (
						<ConfigItem key={config.configHash} config={config}/>
					))
				)
			}
		</ul>
	)
}