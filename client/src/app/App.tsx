import "../styles/main.scss"

import {RouterProvider} from "react-router-dom";
import {router} from "../config/router.tsx";
import {LoginModalContextProvider, RegisterModalContextProvider} from "../modules/auth";

export function App() {
	return (
		<LoginModalContextProvider>
			<RegisterModalContextProvider>
				<RouterProvider router={router}/>
			</RegisterModalContextProvider>
		</LoginModalContextProvider>
	)
}

