import type {FieldValues, SubmitHandler, UseFormHandleSubmit} from "react-hook-form";
import type {IFormConfig} from "../../types/form-types.ts";
import styles from "./AuthForm.module.scss";
import {InputField} from "../../ui/input-field";
import {Button, ButtonType} from "@components/button";

interface AuthFormProps<T extends FieldValues> {
	handleSubmit: UseFormHandleSubmit<T>;
	onSubmit: SubmitHandler<T>;
	config: IFormConfig<T>;
	isAuthPending: boolean;
}

export const AuthForm = <T extends FieldValues>({handleSubmit, onSubmit, config, isAuthPending} : AuthFormProps<T>) => {
	return (
		<form className={styles.form}
			  onSubmit={handleSubmit(onSubmit)}
		>
			<fieldset disabled={isAuthPending}>
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
					data-ispending={isAuthPending}
					disabled={isAuthPending}
			>
				{ isAuthPending ? 'Loading' : config.submitText }
			</Button>
		</form>
	)
}