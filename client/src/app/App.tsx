import "../styles/main.scss"

import {RouterProvider} from "react-router-dom";
import {router} from "../config/router.tsx";

export function App() {
	return (
		<RouterProvider router={router}/>
	)
}

