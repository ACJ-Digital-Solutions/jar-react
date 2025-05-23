"use client";

import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import { HiOutlineXMark, HiBars3 } from "react-icons/hi2";
import Link from "next/link";
import Image from "next/image";

import Container from "@/components/container";
import { siteDetails } from "@/app/data/siteDetails";
import { menuItems } from "@/app/data/menuItems";

export default function Header() {
	const [isOpen, setIsOpen] = useState(false);

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};
	return (
		// <header className="fixed top-0 right-0 left-0 z-50 mx-auto w-full bg-transparent md:absolute">
		// 	<div className="container mx-auto flex items-center justify-between px-4 py-4">
		// 		<div className="flex items-center">
		// 			<Image src="/logo.jpg" alt="logo" width={200} height={200} />
		// 		</div>
		// 		<nav className="flex items-center">
		// 			<ul className="mr-2 flex space-x-2">
		// 				<li>
		// 					<Link
		// 						href="/"
		// 						className="rounded-md px-4 py-2 text-sm text-gray-800 transition-colors hover:bg-gray-100 dark:text-white dark:hover:bg-gray-800"
		// 					>
		// 						Home
		// 					</Link>
		// 				</li>
		// 				<li>
		// 					<Link
		// 						href="/services"
		// 						className="rounded-md px-4 py-2 text-sm text-gray-800 transition-colors hover:bg-gray-100 dark:text-white dark:hover:bg-gray-800"
		// 					>
		// 						Services
		// 					</Link>
		// 				</li>
		// 				<li>
		// 					<Link
		// 						href="/vehicles"
		// 						className="rounded-md px-4 py-2 text-sm text-gray-800 transition-colors hover:bg-gray-100 dark:text-white dark:hover:bg-gray-800"
		// 					>
		// 						Vehicles
		// 					</Link>
		// 				</li>
		// 				<li>
		// 					<Link
		// 						href="/about"
		// 						className="rounded-md px-4 py-2 text-sm text-gray-800 transition-colors hover:bg-gray-100 dark:text-white dark:hover:bg-gray-800"
		// 					>
		// 						About Us
		// 					</Link>
		// 				</li>
		// 				<li>
		// 					<Link
		// 						href="/contact"
		// 						className="rounded-md px-4 py-2 text-sm text-gray-800 transition-colors hover:bg-gray-100 dark:text-white dark:hover:bg-gray-800"
		// 					>
		// 						Contact
		// 					</Link>
		// 				</li>
		// 				<li>
		// 					<a
		// 						className="rounded-md px-4 py-2 text-sm text-gray-800 transition-colors hover:bg-gray-100 dark:text-white dark:hover:bg-gray-800"
		// 						href="https://booking.shopgenie.io/?shop=japanese-auto-repair-2833013251&preselect_account=japanese-auto-repair-speciali-2833013790"
		// 						target="_blank"
		// 					>
		// 						Schedule Appointment
		// 					</a>
		// 				</li>
		// 			</ul>
		// 		</nav>
		// 	</div>
		// </header>
		<header className="fixed top-0 right-0 left-0 z-50 mx-auto w-full bg-transparent md:absolute">
			<Container className="!px-0">
				<nav className="mx-auto flex items-center justify-between bg-white px-5 py-2 shadow-md md:bg-transparent md:py-10 md:shadow-none">
					{/* Logo */}
					<Link href="/" className="flex items-center gap-2">
						<span className="manrope text-foreground cursor-pointer text-xl font-semibold">
							{siteDetails.siteName}
						</span>
					</Link>

					{/* Desktop Menu */}
					<ul className="hidden space-x-6 md:flex">
						{menuItems.map((item) => (
							<li key={item.text}>
								<Link
									href={item.url}
									className="text-foreground hover:text-foreground-accent transition-colors"
								>
									{item.text}
								</Link>
							</li>
						))}
						<li>
							<Link
								href="#cta"
								className="bg-primary hover:bg-primary-accent rounded-full px-8 py-3 text-black transition-colors"
							>
								Download
							</Link>
						</li>
					</ul>

					{/* Mobile Menu Button */}
					<div className="flex items-center md:hidden">
						<button
							onClick={toggleMenu}
							type="button"
							className="bg-primary flex h-10 w-10 items-center justify-center rounded-full text-black focus:outline-none"
							aria-controls="mobile-menu"
							aria-expanded={isOpen}
						>
							{isOpen ? (
								<HiOutlineXMark className="h-6 w-6" aria-hidden="true" />
							) : (
								<HiBars3 className="h-6 w-6" aria-hidden="true" />
							)}
							<span className="sr-only">Toggle navigation</span>
						</button>
					</div>
				</nav>
			</Container>

			{/* Mobile Menu with Transition */}
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
									className="text-foreground hover:text-primary block"
									onClick={toggleMenu}
								>
									{item.text}
								</Link>
							</li>
						))}
						<li>
							<Link
								href="#cta"
								className="bg-primary hover:bg-primary-accent block w-fit rounded-full px-5 py-2 text-black"
								onClick={toggleMenu}
							>
								Get Started
							</Link>
						</li>
					</ul>
				</div>
			</Transition>
		</header>
	);
}
