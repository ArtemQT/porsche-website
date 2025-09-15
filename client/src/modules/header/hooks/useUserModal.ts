import {useModal} from "../../modal";
import {useLoginModal, useRegisterModal} from "../../auth";

interface IModalConfig {
	id: string;
	text: string;
	onClick: () => void;
}

export const useUserModal = () => {

	const {isOpen, handleOpen, handleClose} = useModal();

	const {
		handleOpen: handleLoginModalOpen
	} = useLoginModal()

	const {
		handleOpen: handleRegisterModalOpen
	} = useRegisterModal();

	const modalConfig: IModalConfig[] = [
		{
			id: '1',
			text: 'Register',
			onClick: handleRegisterModalOpen
		},
		{
			id: '2',
			text: 'Login',
			onClick: handleLoginModalOpen
		},
	]

	return {
		isOpen,
		handleOpen,
		handleClose,
		modalConfig
	}
}