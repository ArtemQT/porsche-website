import {useEffect, useState} from "react";

export const useModal = () => {

	const [isOpen, setIsOpen] = useState(false);

	const handleClose = () => {
		setIsOpen(false);
	}

	const handleOpen = () => {
		setIsOpen(true);
	}

	useEffect(() => {
		if (isOpen) {
			document.body.classList.add("modalOpen");
		} else {
			document.body.classList.remove("modalOpen");
		}

		return () => {
			document.body.classList.remove('modalOpen');
		}
	}, [isOpen]);

	return {
		isOpen,
		handleClose,
		handleOpen,
	}
}