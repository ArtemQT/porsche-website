import {useLogin} from "../../hooks/useLogin.ts";
import styles from "../AuthFormStyles.module.scss";
import {InputField} from "../../ui/input-field";
import {Button, ButtonType} from "@components/button";

export const LoginForm = () => {

	const {
		handleSubmit,
		onSubmit,
		loginFormConfig
	} = useLogin()

	return (
		<form>
			<form className={styles.form}
				  onSubmit={handleSubmit(onSubmit)}
			>
				<fieldset>
					<legend>{loginFormConfig.title}</legend>
					{
						loginFormConfig.fields.map(inputField => (
							<InputField key={inputField.name} {...inputField}/>
						))
					}
				</fieldset>

				<Button className={styles.formButton}
						buttonType={ButtonType.dark}
						type="submit"
				>
					{loginFormConfig.submitText}
				</Button>
			</form>
		</form>
	)
}