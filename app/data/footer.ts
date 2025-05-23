import { IMenuItem, ISocials } from "@/app/types";

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
			url: "/"
		},
		{
			text: "Services",
			url: "/services"
		},
		{
			text: "Vehicles",
			url: "/vehicles"
		},
		{
			text: "About Us",
			url: "/about"
		},
		{
			text: "Contact",
			url: "/contact"
		}
	],
	email: "address@yoursite.com",
	telephone: "+1 (123) 456-7890",
	socials: {
		// github: 'https://github.com',
		// x: 'https://twitter.com/x',
		twitter: "https://twitter.com/Twitter",
		facebook: "https://facebook.com",
		// youtube: 'https://youtube.com',
		linkedin: "https://www.linkedin.com",
		// threads: 'https://www.threads.net',
		instagram: "https://www.instagram.com"
	}
};
