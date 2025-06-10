"use client";
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";
import { BiMinus, BiPlus } from "react-icons/bi";

import SectionTitle from "./SectionTitle";
import { faqs } from "@/data/faq";
import { FaEnvelope } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";
import Link from "next/link";

const FAQ: React.FC = () => {
	return (
		<section id="faq" className="py-10 lg:py-20">
			<div className="flex flex-col lg:flex-row items-center gap-10">
				<div className="flex flex-col items-center lg:items-start">
					<p className="hidden lg:block text-foreground-accent"></p>
					<SectionTitle>
						<h2 className="my-3 !leading-snug lg:max-w-sm text-center lg:text-left text-lg text-lg">
							Preguntas frecuentes
						</h2>
					</SectionTitle>
					<p className="text-red-600 text-center lg:mt-10 lg:text-left text-base lg:text-2xl ">
						¡Pregúntanos lo que quieras!
					</p>
					<Link
						href="mailto:rapidviaservices@gmail.com"
						target="_blank"
						rel="noopener noreferrer"
						className="mt-3 inline-flex items-center gap-2 text-base lg:text-2xl text-foreground-accent font-semibold hover:underline text-center lg:text-left"
					>
						<FaEnvelope size={24} className="ml-2 w-6 h-6 lg:w-8 lg:h-8" />
						rapidviaservices@gmail.com
					</Link>
					<Link
						href="https://wa.me/19415367542"
						target="_blank"
						rel="noopener noreferrer"
						className="mt-3 inline-flex  items-center gap-2 text-base lg:text-2xl  font-semibold  text-center lg:text-left"
					>
						<FaWhatsapp size={24} className="min-w-fit" />
						+1 (941) 536-7542
					</Link>
				</div>

				<div className="w-full lg:max-w-2xl mx-auto border-b">
					{faqs.map((faq, index) => (
						<div key={index} className="mb-7">
							<Disclosure>
								{({ open }) => (
									<>
										<DisclosureButton className="flex items-center justify-between w-full px-4 pt-7 text-lg text-left border-t">
											<span className="text-xl font-semibold">{faq.question}</span>
											{open ? (
												<BiMinus className="w-5 h-5 text-red-600" />
											) : (
												<BiPlus className="w-5 h-5 text-red-600" />
											)}
										</DisclosureButton>
										<DisclosurePanel className="px-4 pt-4 pb-2 text-foreground-accent">
											{faq.answer}
										</DisclosurePanel>
									</>
								)}
							</Disclosure>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default FAQ;
