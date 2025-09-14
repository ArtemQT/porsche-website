import styles from './Modal.module.scss'

import type {FC, MouseEventHandler, ReactNode} from "react";
import {createPortal} from "react-dom";

export type TCoordinates = {
	left: string,
	top: string,
}

interface ModalProps {
	isOpen: boolean;
	onClose: () => void;
	children: ReactNode

	cssAbsoluteCoordinates: TCoordinates | undefined;
}

export const Modal: FC<ModalProps> = ({isOpen, onClose, children, cssAbsoluteCoordinates}) => {

	const handleClick: MouseEventHandler<HTMLDivElement> = (e) => {
		e.stopPropagation();
		onClose();
	}

	if (!isOpen) return null;

	return createPortal(
		<div className={styles.modalOverlay} onClick={onClose}>
			<div style={cssAbsoluteCoordinates}
				 className={styles.modal}
				 onClick={handleClick}
			>
				{children}
			</div>
		</div>,
		document.body
	)
}