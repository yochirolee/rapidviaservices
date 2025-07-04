"use client";

import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import { Transition } from "@headlessui/react";
import { HiOutlineXMark, HiBars3 } from "react-icons/hi2";
import { siteDetails } from "@/data/siteDetails";
import { menuItems } from "@/data/menuItems";

const Header: React.FC = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	return (
		<header className="bg-transparent fixed top-0 left-0 right-0 md:absolute z-50 mx-auto w-full">
			<div className="md:container mx-auto">
				<nav className="shadow-md md:shadow-none bg-white md:bg-transparent mx-auto flex justify-between items-center py-2 px-5 md:py-8">
					<Link href="/" className="flex items-center gap-2">
						<Image
							src="/images/logo.png"
							alt="Rapid Via Logo, envíos a Cuba, trámites legales, notario, ajuste de estatus, ciudadanía, traducciones certificadas"
							width={80}
							height={80}
							className="text-foreground min-w-fit w-16 h-10"
						/>
						<span className=" text-xl font-semibold text-foreground cursor-pointer">
							{siteDetails.siteName}
						</span>
					</Link>

					{/* Desktop Menu */}
					<ul className="hidden md:flex items-center space-x-6">
						{menuItems.map((item, index) => (
							<Link
								key={index}
								href={item.url}
								className="text-foreground  hover:text-foreground-accent transition-colors"
							>
								{item.text}
							</Link>
						))}
					</ul>

					{/* Mobile Menu Button */}
					<div className="md:hidden flex items-center">
						<button
							onClick={toggleMenu}
							type="button"
							className="tex-primary focus:outline-none rounded-full w-10 h-10 flex items-center justify-center"
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
			</div>

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
				<div id="mobile-menu" className="md:hidden bg-white shadow-lg">
					<ul className="flex flex-col space-y-4 pt-1 pb-6 px-6">
						{menuItems.map((item, index) => (
							<Link
								key={index}
								href={item.url}
								className="text-foreground hover:text-primary block"
								onClick={toggleMenu}
							>
								{item.text}
							</Link>
						))}
					</ul>
				</div>
			</Transition>
		</header>
	);
};

export default Header;
