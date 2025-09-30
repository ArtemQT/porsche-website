import styles from './ConfigSummaryList.module.scss';
import {useConfig} from "../../hooks/useConfig.ts";
import {useState} from "react";
import {ReactSVG} from "react-svg";
import optionsImg from '@assets/icons/options-icon.svg'
import {configSummary} from "../../constants/config-summary.ts";

export const ConfigSummaryList = () => {
	const [isOpenSummaryList, setIsOpenSummaryList] = useState<boolean>(false)
	const {configuration} = useConfig();

	return (
		<div className={styles.configSummary}>
			<p className={styles.configTotalPrice}>
				Total price: <span>{configuration.totalPrice}</span> £
			</p>

			<button className={styles.configButton}
					onClick={() => setIsOpenSummaryList(!isOpenSummaryList)}
			>
				<span>{isOpenSummaryList ? 'Hide' : 'Show'} current configuration</span>
				<ReactSVG src={optionsImg}
						  className={styles.configIcon}
				/>
			</button>

			<div className={styles.configDetails}
				 data-is-show={isOpenSummaryList}
			>
				<p className={styles.configStartPrice}>Start price: <span>{configuration.startPrice}</span> £</p>
				<p className={styles.configOptionsPrice}>Options price: <span>{configuration.configPrice}</span> £</p>
				<ul className={styles.configList}>
					{
						configSummary.map(configItem => {
								const configurationOption = configuration[configItem.key];

								return (
									<li className={styles.configOption}
										key={configItem.index}
									>
										<span
											className={styles.configOptionLabel}>{configItem.label}</span>: <span>{configurationOption.label}</span>
									</li>
								)
							}
						)
					}
				</ul>
			</div>

		</div>
	)
}