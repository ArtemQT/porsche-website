import {LoginModalContext} from "../contexts/login-modal-context.tsx";
import {useContext} from "react";

export const useLoginModal = () => {

	const context = useContext(LoginModalContext);

	if (!context) {
		throw new Error(
			"useLoginModal must be used within a LoginModalContextProvider"
		);
	}

	return context;
}