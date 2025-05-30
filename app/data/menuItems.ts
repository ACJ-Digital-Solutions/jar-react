import { IMenuItem } from "@/app/types";
import { ROUTES } from "@/app/constants/routes";

export const menuItems: IMenuItem[] = [
	{
		text: "Home",
		url: ROUTES.HOME
	},
	{
		text: "Services",
		url: ROUTES.SERVICES
	},
	{
		text: "Vehicles",
		url: ROUTES.VEHICLES
	},
	{
		text: "About Us",
		url: ROUTES.ABOUT
	},
	{
		text: "Contact",
		url: ROUTES.CONTACT
	}
];
