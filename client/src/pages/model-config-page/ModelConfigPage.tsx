import {ModelViewSection} from "./components/model-view-section";
import {ConfigSection} from "./components/config-section";
import {ModelContextProvider} from "../../modules/model-config";

export const ModelConfigPage = () => {
	return (
		<ModelContextProvider>
			<ModelViewSection/>
			<ConfigSection/>
		</ModelContextProvider>
	)
}