import {createContext, type FC, type PropsWithChildren, useState} from "react";

interface AuthContext {
	isLoggedIn: boolean
	setLogin: () => void
	setLogout: () => void
}

export const AuthContext = createContext<AuthContext | null>(null)

export const AuthProvider: FC<PropsWithChildren> = ({children}) => {

	const [isLoggedIn, setIsLoggedIn] = useState(false);

	const setLogin = () => setIsLoggedIn(true);

	const setLogout = () => setIsLoggedIn(false)

	const value: AuthContext = {
		isLoggedIn,
		setLogin,
		setLogout
	}

	return (
		<AuthContext.Provider value={value}>
			{children}
		</AuthContext.Provider>
	)
}