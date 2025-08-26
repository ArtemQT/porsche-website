import {createBrowserRouter} from "react-router-dom";
import {MainLanding} from "../pages/main-landing";
import {HomePage} from "../pages/home-page";

export const router = createBrowserRouter([
	{
		path: '/',
		element: <MainLanding/>,
		children: [
			{
				index: true,
				element: <HomePage/>
			}
		]
	}
])