import type {FieldValues, SubmitHandler, UseFormHandleSubmit} from "react-hook-form";
import type {IFormConfig} from "../../types/form-types.ts";
import styles from "./AuthForm.module.scss";
import {InputField} from "../../ui/input-field";
import {Button, ButtonType} from "@components/button";

interface AuthFormProps<T extends FieldValues> {
	handleSubmit: UseFormHandleSubmit<T>;
	onSubmit: SubmitHandler<T>;
	config: IFormConfig<T>;
}

export const AuthForm = <T extends FieldValues>({handleSubmit, onSubmit, config} : AuthFormProps<T>) => {
	return (
		<form className={styles.form}
			  onSubmit={handleSubmit(onSubmit)}
		>
			<fieldset>
				<legend>{config.title}</legend>
				{
					config.fields.map(inputField => (
						<InputField key={inputField.name} {...inputField}/>
					))
				}
			</fieldset>

			<Button className={styles.formButton}
					buttonType={ButtonType.dark}
					type="submit"
			>
				{config.submitText}
			</Button>
		</form>
	)
}