import "../styles/main.scss"

import {RouterProvider} from "react-router-dom";
import {router} from "../config/router.tsx";
import {QueryClientProvider} from "@tanstack/react-query";
import {queryClient} from "../config/query-client.ts";
import {AuthProvider} from "@modules/auth";
import {ReactQueryDevtools} from "@tanstack/react-query-devtools";

export function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<AuthProvider>
				<RouterProvider router={router}/>
				<ReactQueryDevtools initialIsOpen={false} />
			</AuthProvider>
		</QueryClientProvider>
	)
}

