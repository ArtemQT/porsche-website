import {createContext, type FC, type PropsWithChildren, useState} from "react";

interface loginModalContext {
	isOpen: boolean;
	handleOpen: () => void;
	handleClose: () => void;
}

export const LoginModalContext = createContext<loginModalContext | null>(null);

export const LoginModalContextProvider: FC<PropsWithChildren> = ({children}) => {

	const [isOpen, setIsOpen] = useState(false);
	const handleClose = () => setIsOpen(false);
	const handleOpen = () => setIsOpen(true);

	const value: loginModalContext = {
		isOpen,
		handleOpen,
		handleClose,
	}

	return (
		<LoginModalContext.Provider value={value}>
			{children}
		</LoginModalContext.Provider>
	)
}