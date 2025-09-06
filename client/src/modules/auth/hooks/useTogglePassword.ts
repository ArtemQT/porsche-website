import {type MouseEventHandler, useState} from "react";

import { type TInputType} from '../types/auth-types'

export const useTogglePassword = (showEyeIcon: boolean | undefined, inputType: TInputType) => {

	const [isShowPassword, setIsShowPassword] = useState<boolean>(false);

	const handleShowPassword: MouseEventHandler = (e) => {
		e.preventDefault();
		setIsShowPassword(true);
	}

	const handleHidePassword: MouseEventHandler = (e) => {
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