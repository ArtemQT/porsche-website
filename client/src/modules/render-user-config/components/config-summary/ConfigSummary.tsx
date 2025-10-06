import styles from './ConfigSummary.module.scss'
import type {FC} from "react";

interface ConfigSummaryProps {
	configPrice: number;
	totalPrice: number;
}

export const ConfigSummary: FC<ConfigSummaryProps> = ({configPrice, totalPrice}) => {

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