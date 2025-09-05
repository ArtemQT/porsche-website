import styles from './Modal.module.scss'

import type {FC, ReactNode} from "react";
import {createPortal} from "react-dom";

export type TCoordinates = {
	left: string,
	top: string,
}

interface ModalProps {
	isOpen: boolean;
	onClose: () => void;
	children: ReactNode

	cssAbsoluteCoordinates: TCoordinates
}

export const Modal: FC<ModalProps> = ({ isOpen, onClose, children, cssAbsoluteCoordinates }) => {

	return createPortal(
		<div className={`${styles.modalOverlay} ${isOpen ? styles.open : ''}`}  onClick={onClose}>
			<div style={cssAbsoluteCoordinates}
				 className={`${styles.modal}`}
				 onClick={(e) => e.stopPropagation()}
			>
				{children}
			</div>
		</div>,
		document.body
	)
}