import {useContext} from "react";
import {AuthContext} from "../contexts/auth-context.tsx";

export const useAuth = () => {
	const context = useContext(AuthContext);
	if (!context) {
		throw new Error('useAuth must be used with AuthContext.Provider');
	}
	return context;
}