import styles from './ModelRadioInput.module.scss'
import type {FC} from "react";

interface ModelRadioInputProps {
	label: string;
	value: string;
	checked: boolean;
	onChange: () => void;
}

export const ModelRadioInput: FC<ModelRadioInputProps> = (props) => {

	return (
		<label className={styles.field}>
			<input className={`${styles.fieldInput} visually-hidden`}
				   type='radio'
				   name='model-radio'
				   value={props.value}
				   checked={props.checked}
				   onChange={props.onChange}
			/>
			<span className={styles.fieldCustomInput}></span>
			{props.label}
		</label>
	)
}