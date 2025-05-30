import { ICard } from "@/app/types";

import { ROUTES } from "@/app/constants/routes";

export const cardDetails: ICard[] = [
	{
		title: "Engine Diagnostics & Repair",
		description:
			"Accurate engine troubleshooting and repair using advanced diagnostic tools to keep your car running at peak performance.",
		icon: "/engine-diagnostic.svg",
		href: ROUTES.SERVICES
	},
	{
		title: "Brake Repair & Replacement",
		description:
			"Safe, efficient brake inspections and services including pad, rotor, and fluid replacement to ensure reliable stopping power.",
		icon: "/brake.svg",
		href: ROUTES.SERVICES
	},
	{
		title: "A/C & Heating System Service",
		description:
			"Complete climate control services including R1234yf A/C repairs for newer vehicles and heater core inspections.",
		icon: "/air-conditioner.svg",
		href: ROUTES.SERVICES
	},
	{
		title: "Oil Changes & Preventive Maintenance",
		description:
			"Quick, professional oil changes with high-quality filters and fluids to extend your vehicle’s life and performance.",
		icon: "/oil-change.svg",
		href: ROUTES.SERVICES
	},
	{
		title: "Tire Rotation, Repair & Replacement",
		description:
			"Proper tire care, balancing, and replacements to improve safety, fuel economy, and tire longevity.",
		icon: "/tire.svg",
		href: ROUTES.SERVICES
	},
	{
		title: "Transmission Services",
		description:
			"Fluid flushes, repairs, or full transmission replacements — we handle both automatic and manual transmissions with precision.",
		icon: "/transmission.svg",
		href: ROUTES.SERVICES
	}
];
