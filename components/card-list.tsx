import { cardDetails } from "@/app/data/card";

import Card from "./card";

export default function CardList() {
	return (
		<div className="mx-auto grid w-full max-w-sm grid-cols-1 gap-10 px-6 md:grid-cols-3">
			{cardDetails.map((card, index) => (
				<Card
					key={index}
					title={card.title}
					description={card.description}
					icon={card.icon}
					href={card.href}
				/>
			))}
		</div>
	);
}
