import styles from './VehicleBody.module.scss';
import type {FC} from "react";
import {Button, ButtonType} from "@shared/components/button";

export const VehicleBody: FC = () => {
	return (
		<div className={styles.body}>
			<h2>Find your new or pre-owned Porsche.</h2>
			<p>
				A Porsche is as individual as its owner. It is
				always an expression of its own personality.
				We can help you find the car of your dreams at
				authorized Porsche centers.
			</p>
			<Button buttonType={ButtonType.light}>
				Find your new Porsche
			</Button>
		</div>
	)
}