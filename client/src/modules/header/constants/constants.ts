import {UserMenu} from "../components/user-menu";
import {BasketIcon} from "../ui/basket-icon";
import {SearchMenu} from "../../search-menu";

export const ICONS = [
	{
		id: 1,
		name: 'profile',
		IconComponent: UserMenu,
	},
	{
		id: 2,
		name: 'search',
		IconComponent: SearchMenu
	},
	{
		id: 3,
		name: 'basket',
		IconComponent: BasketIcon
	},
]

