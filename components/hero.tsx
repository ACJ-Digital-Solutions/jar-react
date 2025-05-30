import React from "react";
import Image from "next/image";

import { heroDetails } from "@/app/data/hero";
import { URL } from "@/app/constants/urls";

import Button from "@/components/button";

export default function Hero() {
	return (
		<section
			id="hero"
			className="relative flex items-center justify-center px-5 pt-32 pb-0 md:pt-40"
		>
			<div className="text-center">
				<h1 className="text-foreground mx-auto max-w-lg text-4xl font-bold md:max-w-2xl md:text-6xl md:leading-tight">
					{heroDetails.heading}
				</h1>
				<p className="text-foreground mx-auto mt-4 max-w-lg">
					{heroDetails.subheading}
				</p>
				<div className="mx-auto mt-6 flex w-fit items-center sm:flex-row sm:gap-4">
					<Button
						text="Schedule Appointment"
						className="btn-primary"
						href={URL.SHOP_GENIE_URL}
					/>
					<Button text="Learn More" className="btn-secondary" />
				</div>
				{/* <Image
					src={heroDetails.imageSrc}
					width={384}
					height={340}
					quality={100}
					sizes="(max-width: 768px) 100vw, 384px"
					priority={true}
					unoptimized={true}
					alt="app mockup"
					className="relative z-10 mx-auto mt-12 md:mt-16"
				/> */}
			</div>
		</section>
	);
}
