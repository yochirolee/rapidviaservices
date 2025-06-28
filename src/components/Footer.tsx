import Link from "next/link";
import React from "react";

import { siteDetails } from "@/data/siteDetails";
import { footerDetails } from "@/data/footer";
import { getPlatformIconByName } from "@/utils";
import Image from "next/image";

const Footer: React.FC = () => {
	return (
		<footer className="bg-gray-900 text-white  py-10">
			<div className="max-w-7xl w-full mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
				<div>
					<Link href="/" className="flex items-center gap-2">
						<Image
							src="/images/rapidvia-services-tramites-notariales-logo.png"
							alt="RapidViaServices Logo"
							width={80}
							height={80}
							className="min-w-fit w-8 h-8 md:w-10 md:h-10"
						/>
						<h3 className="manrope text-xl font-semibold cursor-pointer">{siteDetails.siteName}</h3>
					</Link>
					<p className="mt-3.5 text-white font-light text-lg">{footerDetails.subheading}</p>
				</div>
				<div>
					<h4 className="text-lg font-semibold mb-4">Enlaces Rápidos</h4>
					<ul className="text-white font-light text-sm">
						{footerDetails.quickLinks.map((link) => (
							<li key={link.text} className="mb-2">
								<Link href={link.url} className="hover:text-white">
									{link.text}
								</Link>
							</li>
						))}
					</ul>
				</div>
				<div>
					<h4 className="text-lg font-semibold mb-4">Contáctanos</h4>
					<div className="flex flex-col gap-2">
						{footerDetails.Address && (
						<a
						href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(footerDetails.Address)}`}
						target="_blank"
						rel="noopener noreferrer"
						className="block text-white font-light text-sm hover:text-white"
						  >
						Dirección: {footerDetails.Address}
						</a>
						)}
						{footerDetails.Horario && (
						<span className="block text-white font-light text-sm">
							Horario: {footerDetails.Horario}
						</span>
						)}
						{footerDetails.email && (
							<a
								href={`mailto:${footerDetails.email}`}
								className="block text-white font-light text-sm  hover:text-white"
							>
								Email: {footerDetails.email}
							</a>
						)}

						{footerDetails.telephone && (
							<a
								href={`tel:${footerDetails.telephone}`}
								className="block text-white font-light text-sm  hover:text-white"
							>
								Phone: {footerDetails.telephone}
							</a>
						)}
					</div>

					{footerDetails.socials && (
						<div className="mt-5 flex items-center gap-5 flex-wrap">
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
			<div className="mt-8 text-center text-white text-xs px-6">
				Copyright &copy; {new Date().getFullYear()} {siteDetails.siteName}. All rights reserved.
			</div>
		</footer>
	);
};

export default Footer;
