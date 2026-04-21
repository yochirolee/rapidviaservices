"use client";

import { useState } from "react";
import Link from "next/link";
import { Mail, MessageCircle } from "lucide-react";
import SectionTitle from "./SectionTitle";
import { faqs } from "@/data/faq";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

export default function FAQ(): JSX.Element {
	const [openItem, setOpenItem] = useState<string | undefined>(undefined);

	return (
		<section id="faq" className="w-full py-12 lg:py-24">
			<div className="mx-auto flex w-full max-w-6xl flex-col items-center px-4 sm:px-6 lg:px-10">
				<SectionTitle>
					<h2 className="my-3 text-center text-2xl md:text-3xl">Preguntas frecuentes</h2>
				</SectionTitle>
				<p className="text-center text-base font-medium text-primary md:text-xl">
					¡Pregúntanos lo que quieras!
				</p>

				<div
					className={cn(
						"mt-12 flex w-full flex-col items-center gap-12 md:mt-14 md:gap-14",
						"lg:mt-16 lg:flex-row lg:items-start lg:justify-center lg:gap-0 xl:mt-20"
					)}
				>
					{/* Contact — fixed width, grouped with FAQ and centered in section */}
					<div className="flex w-full max-w-md shrink-0 flex-col items-center border-border/50 lg:w-[min(100%,380px)] lg:max-w-none lg:items-start lg:border-r lg:pr-12 xl:pr-16">
						<p className="mb-4 text-center text-xs font-semibold uppercase tracking-wider text-muted-foreground lg:text-left">
							Contacto
						</p>
						<div className="flex w-full max-w-md flex-col gap-5 lg:max-w-none">
							<Link
								href="mailto:rapidviaservices@gmail.com"
								target="_blank"
								className="flex items-start gap-3 rounded-lg py-1 text-sm transition-colors hover:text-primary md:text-base"
								rel="noopener noreferrer"
							>
								<Mail className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden />
								<span className="whitespace-nowrap leading-snug">rapidviaservices@gmail.com</span>
							</Link>
							<Link
								href="https://wa.me/19415367542"
								target="_blank"
								className="flex items-center gap-3 rounded-lg py-1 text-sm transition-colors hover:text-primary md:text-base"
								rel="noopener noreferrer"
							>
								<MessageCircle className="h-5 w-5 shrink-0 text-primary" aria-hidden />
								<span>+1 (941) 536-7542</span>
							</Link>
						</div>
					</div>

					{/* FAQ — max width only; row justify-center keeps block in middle of section */}
					<div
						className={cn(
							"min-w-0 w-full lg:w-auto lg:pl-12 xl:pl-16",
							"transition-[max-width] duration-300 ease-out",
							openItem ? "lg:max-w-3xl xl:max-w-4xl" : "lg:max-w-2xl xl:max-w-3xl"
						)}
					>
						<Accordion
							type="single"
							collapsible
							value={openItem}
							onValueChange={setOpenItem}
							className="flex w-full flex-col gap-3 md:gap-4"
						>
							{faqs.map((faq, index) => (
								<AccordionItem
									key={index}
									value={`faq-${index}`}
									className="rounded-xl px-3 py-1 transition-[padding,background-color] duration-200 md:px-4 md:py-2 data-[state=open]:bg-muted/25 data-[state=open]:shadow-sm"
								>
									<AccordionTrigger className="min-h-12 py-3 text-left text-base font-semibold md:min-h-13 md:text-lg">
										{faq.question}
									</AccordionTrigger>
									<AccordionContent className="pb-4 pt-0 text-sm leading-relaxed text-muted-foreground md:text-base md:leading-relaxed">
										{faq.answer}
									</AccordionContent>
								</AccordionItem>
							))}
						</Accordion>
						<Separator className="mt-8 lg:hidden" />
					</div>
				</div>
			</div>
		</section>
	);
}
