import React from "react";

export default function Section({
	id,
	title,
	description,
	children
}: {
	id: string;
	title: string;
	description: string;
	children?: React.ReactNode;
}) {
	return (
		<section id={id} className="py-10 lg:py-20">
			<h2 className="mb-4 text-center text-3xl font-bold lg:text-5xl lg:leading-tight">
				{title}
			</h2>
			<p className="mb-12 text-center">{description}</p>
			{React.Children.map(children, (child) => {
				if (!React.isValidElement(child)) return child;
				return <div className="mb-4 last:mb-0">{child}</div>;
			})}
		</section>
	);
}
