import styles from './ConfigSaveBody.module.scss'

import {useModel} from "../../../model-config";
import {useConfig} from "../../../model-config";
import type {FC} from "react";
import {useSaveConfig} from "../../hooks/use-save-config.ts";
import {Button, ButtonType} from "@shared/components/button";


interface ConfigSaveBodyProps {
	handleClose: () => void;
}

export const ConfigSaveBody: FC<ConfigSaveBodyProps> = ({handleClose}) => {
	const {model} = useModel();
	const {configuration} = useConfig();
	const {
		handleSaveConfig,
		isSaveConfigLoading
	} = useSaveConfig()

	const priceInfoList = [
		{
			id: 1,
			label: 'Base price',
			value: configuration.startPrice
		},
		{
			id: 2,
			label: 'Amount price of selected options',
			value: configuration.configPrice
		}
	]

	return (
		<div className={styles.wrapper}>
			<div className={styles.closeButtonWrapper}>
				<button className={styles.closeButton} onClick={handleClose}></button>
			</div>
			<img className={styles.previewImg}
				 src={`/model-detail/${model?.previewImages[1]}`}
				 alt=""
			/>
			<div className={styles.priceInfoWrapper}>
				<h4>Price information</h4>
				<ul>
					{
						priceInfoList.map(priceItem => (
							<li key={priceItem.id} className={styles.configPrice}>
								<span>{priceItem.label}</span>
								<span>£ {priceItem.value}.00</span>
							</li>
						))
					}
				</ul>
			</div>

			<p className={styles.totalPrice}>
				<span>Total price:</span>
				<span>£ {configuration.totalPrice}.00</span>
			</p>

			<Button className={styles.saveConfigButton}
					buttonType={ButtonType.dark}
					onClick={handleSaveConfig}
					data-is-pending={isSaveConfigLoading}
					disabled={isSaveConfigLoading}
			>
				{
					isSaveConfigLoading ?
						'Loading'
						:
						'Save Configuration'
				}
			</Button>
		</div>
	)
}