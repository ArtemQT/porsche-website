import {ModelViewSection} from "./components/model-view-section";
import {ConfigSection} from "./components/config-section";
import {ConfigContextProvider, ModelContextProvider, SwiperConfigContextProvider} from "../../modules/model-config";
import {useModal} from "../../modules/modal";
import {ConfigSaveModal} from "../../modules/config-save";

export const ModelConfigPage = () => {

	const {
		isOpen,
		handleClose,
		handleOpen
	} = useModal()

	const handleOpenConfigModal = () => {
		scrollTo(0, 0);
		handleOpen();
	}

	return (
		<ModelContextProvider>
			<ConfigContextProvider>
				<SwiperConfigContextProvider>
					<ModelViewSection handleOpenConfigModal={handleOpenConfigModal}/>
					<ConfigSection/>
					<ConfigSaveModal handleClose={handleClose} isOpen={isOpen}/>
				</SwiperConfigContextProvider>
			</ConfigContextProvider>
		</ModelContextProvider>
	)
}