import {useMutation, useQueryClient} from "@tanstack/react-query";
import {userApi} from "../api/user-api.ts";
import {useAuth} from "./use-auth.ts";
import {toast} from "sonner";

export const useLogout = () => {

	const queryClient = useQueryClient();
	const {
		setLogout
	} = useAuth()

	const logoutMutation = useMutation({
		mutationFn: userApi.logout,

		onSuccess: () => {
			localStorage.removeItem("accessToken");
			queryClient.removeQueries({
				queryKey: [userApi.getCacheKey()]
			})
			setLogout();

			toast.success('Logout successfully.');
		}
	})

	const handleLogout = () => {
		logoutMutation.mutate();
	}

	return {
		handleLogout
	}
}