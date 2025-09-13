import "../styles/main.scss"

import {RouterProvider} from "react-router-dom";
import {router} from "../config/router.tsx";
import {LoginModalContextProvider, RegisterModalContextProvider} from "../modules/auth";
import {QueryClientProvider} from "@tanstack/react-query";
import {queryClient} from "../config/query-client.ts";

export function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<LoginModalContextProvider>
				<RegisterModalContextProvider>
					<RouterProvider router={router}/>
				</RegisterModalContextProvider>
			</LoginModalContextProvider>
		</QueryClientProvider>
	)
}

