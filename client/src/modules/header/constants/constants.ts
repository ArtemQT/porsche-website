import {UserIcon} from "../ui/user-icon";
import {SearchIcon} from "../ui/search-icon";
import {BasketIcon} from "../ui/basket-icon";


export const ICONS = [
	{
		id: 1,
		name: 'profile',
		IconComponent: UserIcon,
	},
	{
		id: 2,
		name: 'search',
		IconComponent: SearchIcon
	},
	{
		id: 3,
		name: 'basket',
		IconComponent: BasketIcon
	},
]

export const AUTH_PATHS = [
	{
		id: 1,
		name: 'login',
		path: '/auth/login',
		text: 'Login'
	},
	{
		id: 2,
		name: 'register',
		path: '/auth/register',
		text: 'Register'
	}
]

