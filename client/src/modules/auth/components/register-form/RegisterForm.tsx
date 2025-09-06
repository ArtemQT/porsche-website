import styles from '../AuthFormStyles.module.scss'
import {useRegister} from "../../hooks/useRegister.ts";
import {InputField} from "../../ui/input-field";
import {Button, ButtonType} from "@components/button";

export const RegisterForm = () => {

	const {
		handleSubmit,
		onSubmit,
		registerFormConfig
	} = useRegister();

	return (
		<form className={styles.form}
			  onSubmit={handleSubmit(onSubmit)}
		>
			<fieldset>
				<legend>{registerFormConfig.title}</legend>
				{
					registerFormConfig.fields.map(inputField => (
						<InputField key={inputField.name} {...inputField}/>
					))
				}
			</fieldset>

			<Button className={styles.formButton}
					buttonType={ButtonType.dark}
					type="submit"
			>
				{registerFormConfig.submitText}
			</Button>
		</form>
	)
}