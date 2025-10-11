import {ConfigContextProvider, ModelContextProvider, SwiperConfigContextProvider} from "@modules/model-config";
import {useModal} from "@modules/modal";
import {ConfigSaveModal} from "@modules/config-save";
import {ModelViewSection} from "./sections/model-view-section";
import {ConfigSection} from "./sections/config-section";

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