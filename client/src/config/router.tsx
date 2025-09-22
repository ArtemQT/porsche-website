import {createBrowserRouter} from "react-router-dom";
import {MainLanding} from "../pages/main-landing";
import {HomePage} from "../pages/home-page";
import {ModelsPage} from "../pages/models-page";
import {RoutePaths} from "@config/route-paths.ts";
import {ModelConfigPage} from "../pages/model-config-page";

export const router = createBrowserRouter([
	{
		path: RoutePaths.homePage,
		element: <MainLanding/>,
		children: [
			{
				index: true,
				element: <HomePage/>
			},
			{
				element: <ModelsPage/>,
				path: `${RoutePaths.modelsPage}/:row`
			},
			{
				element: <ModelConfigPage/>,
				path: `${RoutePaths.modelConfigPage}/:modelId`
			}
		]
	}
])