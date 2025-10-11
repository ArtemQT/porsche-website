import styles from './ConfigPriceDetails.module.scss'
import type {FC} from "react";
import {useDeleteConfig} from "../../hooks/use-delete-config.ts";
import {Button, ButtonType} from "@shared/components/button";

interface ConfigSummaryProps {
	configPrice: number;
	totalPrice: number;
	configHash: string;
}

export const ConfigPriceDetails: FC<ConfigSummaryProps> = ({configPrice, totalPrice, configHash}) => {

	const {
		deleteConfigHandler
	} = useDeleteConfig()

	const priceList = [
		{
			label: 'Start price:',
			value: totalPrice - configPrice
		},
		{
			label: 'Configuration price:',
			value: configPrice
		},
		{
			label: 'Total price:',
			value: totalPrice
		},
	]

	return (
		<div className={styles.configSummary}>

			<Button buttonType={ButtonType.dark}
					className={styles.configSummaryDeleteBtn}
					onClick={() => deleteConfigHandler(configHash)}
			>
				Delete configuration
			</Button>

			<ul className={styles.priceList}>
				{
					priceList.map(priceItem => (
						<li key={priceItem.label} className={styles.priceItem}>
							<p className={styles.configPrice}>
								<span>{priceItem.label}</span>
								<span>{priceItem.value} £</span>
							</p>
						</li>
					))
				}
			</ul>
		</div>
	)
}