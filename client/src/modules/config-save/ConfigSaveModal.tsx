import styles from './ConfigSaveModal.module.scss'
import type {FC} from "react";
import {createPortal} from "react-dom";
import {ConfigSaveBody} from "./components/config-save-body/ConfigSaveBody.tsx";

interface ConfigSaveModalProps {
	isOpen: boolean;
	handleClose: () => void;
}

export const ConfigSaveModal: FC<ConfigSaveModalProps> = ({isOpen, handleClose}) => {

	return createPortal(
		<div className={styles.modalOverlay}
			 data-is-modal-open={isOpen}
			 onClick={handleClose}
		>
			<div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
				<ConfigSaveBody handleClose={handleClose}/>
			</div>
		</div>,
		document.body
	)
}