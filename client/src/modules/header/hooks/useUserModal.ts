import {useModal} from "../../modal";
import {type RefObject, useEffect, useState} from "react";
import type {TCoordinates} from "../../modal/Modal.tsx";

export const useUserModal = ( buttonRef: RefObject<HTMLButtonElement | null>, listRef: RefObject<HTMLUListElement | null> ) => {
	const {isOpen, handleOpen, handleClose} = useModal();
	const [coordinates, setCoordinates] = useState<TCoordinates>({
		top: '0',
		left: '0'
	})

	useEffect(() => {

		const calculateCoordinates = () => {
			if (isOpen && buttonRef.current && listRef.current) {
				const iconRect = buttonRef.current.getBoundingClientRect();
				const modalRect = listRef.current.getBoundingClientRect();

				setCoordinates({
					top:  iconRect.bottom + 'px',
					left: iconRect.left - modalRect.width / 2.5 + 'px'
				})
			}
		}

		if (isOpen) {
			calculateCoordinates();

			window.addEventListener('resize', calculateCoordinates);

			return () => {
				window.removeEventListener('resize', calculateCoordinates);
			};
		}

	}, [isOpen]);

	return {
		isOpen,
		handleOpen,
		handleClose,
		coordinates,
	}
}