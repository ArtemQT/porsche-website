import {createContext, type FC, type PropsWithChildren, useState} from "react";

interface AuthContext {
	isLoggedIn: boolean,
	userId: string | null

	setLogin: (userId: string) => void,
	setLogout: () => void,
}

export const AuthContext = createContext<AuthContext | null>(null)

export const AuthProvider: FC<PropsWithChildren> = ({children}) => {

	const [isLoggedIn, setIsLoggedIn] = useState<boolean>(() => !!localStorage.getItem('accessToken'));
	const [userId, setUserId] = useState<string | null>(() => localStorage.getItem("userId"));

	const setLogin = (userId: string) => {
		setIsLoggedIn(true);
		setUserId(userId)
	}

	const setLogout = () => {
		setIsLoggedIn(false);
		setUserId(null)
	}

	const value: AuthContext = {
		isLoggedIn,
		userId,

		setLogin,
		setLogout,
	}

	return (
		<AuthContext.Provider value={value}>
			{children}
		</AuthContext.Provider>
	)
}