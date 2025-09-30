import {ModelViewSection} from "./components/model-view-section";
import {ConfigSection} from "./components/config-section";
import {ModelContextProvider, SwiperConfigContextProvider} from "../../modules/model-config";

export const ModelConfigPage = () => {
	return (
		<ModelContextProvider>
			<SwiperConfigContextProvider>
				<ModelViewSection/>
				<ConfigSection/>
			</SwiperConfigContextProvider>
		</ModelContextProvider>
	)
}