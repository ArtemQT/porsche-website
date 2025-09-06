import {useModal} from "../../modal";
import {type RefObject, useLayoutEffect, useState} from "react";
import type {TCoordinates} from "../../modal/Modal.tsx";

export const useUserModal = (buttonRef: RefObject<HTMLButtonElement | null>, listRef: RefObject<HTMLUListElement | null>) => {

	const {isOpen, handleOpen, handleClose} = useModal();
	const [coordinates, setCoordinates] = useState<TCoordinates | undefined>(undefined);

	useLayoutEffect(() => {
		const calculateCoordinates = () => {
			if (isOpen && buttonRef.current && listRef.current) {
				const iconRect = buttonRef.current.getBoundingClientRect();
				const modalRect = listRef.current.getBoundingClientRect();

				setCoordinates({
					top: iconRect.bottom + 'px',
					left: iconRect.left - modalRect.width / 2.5 + 'px'
				})
			} else {
				setCoordinates(undefined)
			}
		}

		calculateCoordinates();

		window.addEventListener("resize", calculateCoordinates);

		return () => {
			window.removeEventListener("resize", calculateCoordinates);
		}
	}, [isOpen, buttonRef.current, listRef.current]);

	return {
		isOpen,
		handleOpen,
		handleClose,
		coordinates,
	}
}