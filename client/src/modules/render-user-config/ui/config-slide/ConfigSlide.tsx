import styles from './ConfigSlide.module.scss'
import type {IConfigOption, IConfigTextOption} from "@shared/types/user-config-types.ts";
import type {FC} from "react";

interface ConfigSlideProps {
	option: IConfigOption | IConfigTextOption;
}

const isTextOption = (
	option: IConfigTextOption | IConfigOption
): option is IConfigTextOption => !("imgUrl" in option);

export const ConfigSlide:FC<ConfigSlideProps> = ({option}) => {
	if (isTextOption(option)) {
		return (
			<div className={styles.optionTextContent}>
				<p className={styles.optionPrice}>+ {option.price} £</p>
				<h5 className={styles.optionTextTitle}>{option.label}</h5>
				<p className={styles.optionDescription}>{option.description}</p>
			</div>
		)
	} else {
		return (
			<div className={styles.optionContent}>
				<p className={styles.optionPrice}>+ {option.price} £</p>
				<img className={styles.optionImg}
					 src={option.imgUrl}
					 alt=''
				/>
				<h5 className={styles.optionTitle}>{option.label}</h5>
			</div>
		)
	}
}