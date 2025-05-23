import Hero from "@/components/hero";
import Container from "@/components/container";
import Section from "@/components/section";

export default function Home() {
	return (
		<>
			<Hero />
			<Container>
				<Section
					id="pricing"
					title="Pricing"
					description="Simple, transparent pricing. No surprises."
				>
					{/* <Pricing /> */}
				</Section>

				<Section
					id="testimonials"
					title="What Our Clients Say"
					description="Hear from those who have partnered with us."
				>
					{/* <Testimonials /> */}
				</Section>

				{/* <FAQ /> */}

				{/* <Stats /> */}

				{/* <CTA /> */}
			</Container>
		</>
	);
}
