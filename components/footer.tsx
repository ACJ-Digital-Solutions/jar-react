import Link from "next/link";
import React from "react";

import { siteDetails } from "@/app/data/siteDetails";
import { footerDetails } from "@/app/data/footer";
import { getPlatformIconByName } from "@/app/utils";

export default function Footer() {
	return (
		<footer className="py-10">
			<div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-10 px-6 md:grid-cols-3">
				<div>
					<Link href="/" className="flex items-center gap-2">
						<h3 className="cursor-pointer text-xl font-semibold">
							Japanese Auto Repair
						</h3>
					</Link>
					<p className="mt-3.5">Description</p>
				</div>
				<div>
					<h4 className="mb-4 text-lg font-semibold">Quick Links</h4>
					<ul>
						{footerDetails.quickLinks.map((link) => (
							<li key={link.text} className="mb-2">
								<Link href={link.url} className="hover:text-foreground">
									{link.text}
								</Link>
							</li>
						))}
					</ul>
				</div>
				<div>
					<h4 className="mb-4 text-lg font-semibold">Contact Us</h4>

					{footerDetails.email && (
						<a
							href={`mailto:${footerDetails.email}`}
							// needs theme
							className="text-foreground-accent hover:text-foreground block"
						>
							Email: {footerDetails.email}
						</a>
					)}

					{footerDetails.telephone && (
						<a
							href={`tel:${footerDetails.telephone}`}
							// needs theme
							className="text-foreground-accent hover:text-foreground block"
						>
							Phone: {footerDetails.telephone}
						</a>
					)}

					{footerDetails.socials && (
						<div className="mt-5 flex flex-wrap items-center gap-5">
							{Object.keys(footerDetails.socials).map((platformName) => {
								if (platformName && footerDetails.socials[platformName]) {
									return (
										<Link
											href={footerDetails.socials[platformName]}
											key={platformName}
											aria-label={platformName}
										>
											{getPlatformIconByName(platformName)}
										</Link>
									);
								}
							})}
						</div>
					)}
				</div>
			</div>
			<div className="text-foreground-accent mt-8 px-6 md:text-center">
				<p>
					Copyright &copy; {new Date().getFullYear()} {siteDetails.siteName}.
					All rights reserved.
				</p>
				<p className="mt-2 text-sm text-gray-500">
					Made with &hearts; by{" "}
					<a href="https://nexilaunch.com" target="_blank">
						Nexi Launch
					</a>
				</p>
				<p className="mt-2 text-sm text-gray-500">
					UI kit by{" "}
					<a
						href="https://ui8.net/youthmind/products/fintech-finance-mobile-app-ui-kit"
						target="_blank"
					>
						Youthmind
					</a>
				</p>
			</div>
		</footer>
	);
}
