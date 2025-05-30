"use client";

import Image from "next/image";

import { ICard } from "@/app/types";

export default function Card({ title, description, icon, href }: ICard) {
	return (
		<div className="flex flex-col items-center bg-white text-center">
			{icon && (
				<Image src={icon} alt={title} height={32} width={32} className="mb-5" />
			)}
			<h3 className="mb-2 text-xl font-semibold">{title}</h3>
			<p className="mb-4">{description}</p>
			{href && (
				<a href={href} className="text-blue-600 hover:underline">
					Learn More →
				</a>
			)}
		</div>
	);
}
