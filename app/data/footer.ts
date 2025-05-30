import { IMenuItem, ISocials } from "@/app/types";

import { ROUTES } from "@/app/constants/routes";

export const footerDetails: {
	subheading: string;
	quickLinks: IMenuItem[];
	email: string;
	telephone: string;
	socials: ISocials;
} = {
	subheading:
		"Empowering businesses with cutting-edge financial technology solutions.",
	quickLinks: [
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
	],
	email: "japaneseautorepair@gmail.com",
	telephone: "+1 (972) 241-4922",
	socials: {
		facebook: "https://facebook.com"
	}
};
