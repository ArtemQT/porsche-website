import {createContext, type FC, type PropsWithChildren, useState} from "react";

interface registerModalContext {
	isOpen: boolean;
	handleOpen: () => void;
	handleClose: () => void;
}

export const RegisterModalContext = createContext<registerModalContext | null>(null);

export const RegisterModalContextProvider: FC<PropsWithChildren> = ({children}) => {

	const [isOpen, setIsOpen] = useState<boolean>(false);

	const handleClose = () => setIsOpen(false);
	const handleOpen = () => setIsOpen(true);

	const value: registerModalContext = {
		isOpen,
		handleClose,
		handleOpen
	}

	return (
		<RegisterModalContext.Provider value={value}>
			{children}
		</RegisterModalContext.Provider>
	)
}