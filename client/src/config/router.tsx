import {createBrowserRouter} from "react-router-dom";
import {MainLanding} from "../pages/main-landing";
import {HomePage} from "../pages/home-page";
import {ModelsPage} from "../pages/models-page";

export enum RoutePaths {
	homePage = "/",
	modelsPage = "/models",
}

export const router = createBrowserRouter([
	{
		path: '/',
		element: <MainLanding/>,
		children: [
			{
				index: true,
				element: <HomePage/>
			},
			{
				element: <ModelsPage/>,
				path: 'models'
			}
		]
	}
])