import { ROUTES } from "./constants/routes";

import Hero from "@/components/hero";
import Section from "@/components/section";
import Mission from "@/components/mission";
import CardList from "@/components/card-list";
import Button from "@/components/button";

export default function Home() {
	return (
		<>
			<Hero />
			<div className="mx-auto w-full max-w-7xl !px-0 md:px-5">
				<Section id="mission" title="Our Mission" description="">
					<Mission />
				</Section>
				<Section
					id="services"
					title="Services"
					description="A list of commonly needed services"
				>
					<CardList />
					<Button
						text="See All Services"
						className="btn-primary"
						href={ROUTES.SERVICES}
					/>
				</Section>
				<Section
					id="testimonials"
					title="What Our Clients Say"
					description="Carousel of reviews"
				></Section>
				<Section
					id="Certifications & Warranty"
					title="certifications"
					description="Icons"
				></Section>
				<Section
					id="booking"
					title="Booking"
					description="CTA section for scheduling appointments"
				></Section>
			</div>
		</>
	);
}
