import "../styles/main.scss"

import {RouterProvider} from "react-router-dom";
import {router} from "../config/router.tsx";
import {LoginModalContextProvider} from "../modules/auth";

export function App() {
	return (
		<LoginModalContextProvider>
			<RouterProvider router={router}/>
		</LoginModalContextProvider>
	)
}

