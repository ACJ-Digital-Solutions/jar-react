"use client";

import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import { HiOutlineXMark, HiBars3 } from "react-icons/hi2";
import Link from "next/link";
import Image from "next/image";
import { ROUTES } from "@/app/constants/routes";
import { URL } from "@/app/constants/urls";

import { menuItems } from "@/app/data/menuItems";

import Button from "@/components/button";

export default function Header() {
	const [isOpen, setIsOpen] = useState(false);

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};
	return (
		<header className="fixed top-0 right-0 left-0 z-50 mx-auto w-full bg-white md:absolute">
			<div className="mx-auto w-full max-w-7xl !px-0 md:px-5">
				<nav className="mx-auto flex items-center justify-between px-5 py-2 shadow-md md:py-10 md:shadow-none">
					<Link href={ROUTES.HOME} className="flex items-center gap-2">
						<Image src="/logo.svg" alt="logo" width={150} height={150} />
					</Link>

					<ul className="hidden space-x-6 md:flex">
						{menuItems.map((item) => (
							<li key={item.text}>
								<Link
									href={item.url}
									className="text-black transition-colors hover:text-primary hover:underline"
								>
									{item.text}
								</Link>
							</li>
						))}
						<li>
							<Button
								text="Schedule Appointment"
								href={URL.SHOP_GENIE_URL}
								target="_blank"
								className="btn-primary"
							/>
						</li>
					</ul>

					<div className="flex items-center md:hidden">
						<button
							onClick={toggleMenu}
							type="button"
							className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-black focus:outline-none"
							aria-controls="mobile-menu"
							aria-expanded={isOpen}
						>
							{isOpen ? (
								<HiOutlineXMark
									className="h-6 w-6 stroke-white"
									aria-hidden="true"
								/>
							) : (
								<HiBars3 className="h-6 w-6 stroke-white" aria-hidden="true" />
							)}
							<span className="sr-only">Toggle navigation</span>
						</button>
					</div>
				</nav>
			</div>

			<Transition
				show={isOpen}
				enter="transition ease-out duration-200 transform"
				enterFrom="opacity-0 scale-95"
				enterTo="opacity-100 scale-100"
				leave="transition ease-in duration-75 transform"
				leaveFrom="opacity-100 scale-100"
				leaveTo="opacity-0 scale-95"
			>
				<div id="mobile-menu" className="bg-white shadow-lg md:hidden">
					<ul className="flex flex-col space-y-4 px-6 pt-1 pb-6">
						{menuItems.map((item) => (
							<li key={item.text}>
								<Link
									href={item.url}
									className="text-foreground block hover:text-primary"
									onClick={toggleMenu}
								>
									{item.text}
								</Link>
							</li>
						))}
						<li>
							<Button
								text="Schedule Appointment"
								href={URL.SHOP_GENIE_URL}
								target="_blank"
								className="btn-primary"
							/>
						</li>
					</ul>
				</div>
			</Transition>
		</header>
	);
}
