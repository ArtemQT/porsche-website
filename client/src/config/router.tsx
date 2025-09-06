import {createBrowserRouter} from "react-router-dom";
import {MainLanding} from "../pages/main-landing";
import {HomePage} from "../pages/home-page";
import {AuthLanding} from "../pages/auth-landing";
import {LoginForm, RegisterForm} from "../modules/auth";

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
	},
	{
		path: '/auth',
		element: <AuthLanding/>,
		children: [
			{
				path: 'register',
				element: <RegisterForm/>
			},
			{
				path: 'login',
				element: <LoginForm/>
			}
		]
	}
])