import {useContext} from "react";
import {RegisterModalContext} from "../contexts/register-modal-context.tsx";

export const useRegisterModal = () => {
	const context = useContext(RegisterModalContext);
	if (!context) {
		throw new Error(
			"useRegisterModal must be used within a RegisterModalContextProvider"
		)
	}
	return context;
}