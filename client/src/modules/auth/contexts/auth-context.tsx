import {createContext, type FC, type PropsWithChildren, useEffect, useState} from "react";
import {useLocalStorageListener} from "@shared/hooks/useLocalStorageListener.ts";

interface AuthContext {
	isLoggedIn: boolean,
	userId: string | null

	setLogin: (userId: string) => void,
	setLogout: () => void,
}

export const AuthContext = createContext<AuthContext | null>(null)

export const AuthProvider: FC<PropsWithChildren> = ({children}) => {

	const accessToken = useLocalStorageListener('accessToken');
	const storedUserId = useLocalStorageListener('userId');

	const [isLoggedIn, setIsLoggedIn] = useState<boolean>(() => !!localStorage.getItem('accessToken'));
	const [userId, setUserId] = useState<string | null>(() => localStorage.getItem("userId"));

	useEffect(() => {
		setIsLoggedIn(!!accessToken);
		setUserId(storedUserId);
	}, [accessToken, storedUserId]);

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