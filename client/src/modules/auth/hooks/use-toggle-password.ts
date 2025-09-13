import {type MouseEventHandler, type TouchEventHandler, useState} from "react";

import { type TInputType} from '../types/form-types.ts'

export const useTogglePassword = (showEyeIcon: boolean | undefined, inputType: TInputType) => {

	const [isShowPassword, setIsShowPassword] = useState<boolean>(false);

	const handleShowPassword: MouseEventHandler & TouchEventHandler = (e) => {
		e.preventDefault();
		setIsShowPassword(true);
	}

	const handleHidePassword: MouseEventHandler & TouchEventHandler = (e) => {
		e.preventDefault();
		setIsShowPassword(false);
	}

	const getInputType = () => {
		if (!showEyeIcon) {
			return inputType;
		}

		return isShowPassword ? 'text' : 'password';
	}

	return {
		isShowPassword,
		handleShowPassword,
		handleHidePassword,
		getInputType,
	}

}