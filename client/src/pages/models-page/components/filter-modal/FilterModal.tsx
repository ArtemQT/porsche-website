import styles from './FilterModal.module.scss'
import {type FC} from "react";
import {createPortal} from "react-dom";
import {ModelsFilter} from "../../../../modules/models-filter";
import {Button, ButtonType} from "@components/button";

interface FilterModalProps {
	isOpen: boolean;
	onClose: () => void;
}

export const FilterModal: FC<FilterModalProps> = ({isOpen, onClose}) => {

	return createPortal(
		<div className={`${styles.filterModal} container`}
			 data-modal-visible={isOpen}
		>
			<button className={styles.filterModalCloseButton} onClick={onClose}></button>
			<ModelsFilter/>
			<Button buttonType={ButtonType.dark}
					onClick={onClose}
					className={styles.filterModalViewButton}
			>
				View models
			</Button>
		</div>, document.body
	)
}