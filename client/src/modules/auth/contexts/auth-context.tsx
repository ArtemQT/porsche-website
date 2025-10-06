import {createContext, type FC, type PropsWithChildren, useState} from "react";
import {useQueryClient} from "@tanstack/react-query";

interface AuthContext {
	isLoggedIn: boolean
	setLogin: () => void
	setLogout: () => void,
}

export const AuthContext = createContext<AuthContext | null>(null)

export const AuthProvider: FC<PropsWithChildren> = ({children}) => {

	const queryClient = useQueryClient();
	const [isLoggedIn, setIsLoggedIn] = useState<boolean>(() => !!localStorage.getItem('accessToken'))

	const setLogin = () => {
		setIsLoggedIn(true);
	}

	const setLogout = () => {
		setIsLoggedIn(false);
		queryClient.clear()
	}

	const value: AuthContext = {
		isLoggedIn,
		setLogin,
		setLogout,
	}

	return (
		<AuthContext.Provider value={value}>
			{children}
		</AuthContext.Provider>
	)
}