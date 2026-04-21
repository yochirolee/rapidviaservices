"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, type Variants } from "framer-motion";

import { Button } from "@/components/ui/button";
import { renderHeadingWithHighlight } from "@/components/HandDrawnUnderline";
import { heroDetails } from "@/data/hero";
import type { IBenefit } from "@/types";
import { cn } from "@/lib/utils";

const containerVariants: Variants = {
	offscreen: { opacity: 0, y: 48 },
	onscreen: {
		opacity: 1,
		y: 0,
		transition: { type: "spring", bounce: 0.18, duration: 0.85, staggerChildren: 0.12, delayChildren: 0.08 },
	},
};

const itemVariants: Variants = {
	offscreen: { opacity: 0, y: 28 },
	onscreen: {
		opacity: 1,
		y: 0,
		transition: { type: "spring", bounce: 0.2, duration: 0.75 },
	},
};

interface BenefitShowcaseSectionProps {
	benefit: IBenefit;
	imageFirst: boolean;
	headingId: string;
}

export default function BenefitShowcaseSection({
	benefit,
	imageFirst,
	headingId,
}: BenefitShowcaseSectionProps): JSX.Element {
	const {
		title,
		description,
		imageSrc,
		imageAlt,
		bullets,
		eyebrow,
		scriptLead,
		titleHighlight,
		band,
		cta,
	} = benefit;

	const resolvedCta = cta ?? {
		label: "Reserva una consulta",
		href: heroDetails.whatsapp.href,
		external: true,
	};

	const bandVar = `--benefit-band-${band}` as const;

	return (
		<section className="benefit-section">
			<div
				className="relative left-1/2 w-screen max-w-[100vw] -translate-x-1/2 overflow-x-clip py-14 md:py-20"
				style={{ backgroundColor: `var(${bandVar})` }}
				aria-labelledby={headingId}
			>
				<div className="container mx-auto max-w-6xl px-4 sm:px-6 md:px-8">
					<motion.div
						className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14 xl:gap-16"
						variants={containerVariants}
						initial="offscreen"
						whileInView="onscreen"
						viewport={{ once: true, margin: "-64px" }}
					>
						<motion.div
							variants={itemVariants}
							className={cn(
								"mx-auto w-full max-w-md lg:mx-0 lg:max-w-none",
								!imageFirst && "lg:order-2"
							)}
						>
							<Image
								src={imageSrc}
								alt={imageAlt ?? title}
								width={480}
								height={620}
								quality={80}
								className="h-auto w-full rounded-2xl object-cover shadow-[0_24px_60px_-16px_rgb(15_23_42/0.28)]"
								sizes="(min-width: 1024px) min(45vw, 480px), 90vw"
							/>
						</motion.div>

						<motion.div
							variants={itemVariants}
							className={cn("text-center lg:text-left", !imageFirst && "lg:order-1")}
						>
							<p className="text-xs font-semibold uppercase tracking-[0.2em] text-foreground/85">{eyebrow}</p>
							<h2
								id={headingId}
								className="mt-3 text-balance text-3xl font-bold leading-[1.12] tracking-tight text-foreground sm:text-4xl md:text-[2.65rem]"
							>
								{renderHeadingWithHighlight(title, titleHighlight)}
							</h2>

							{scriptLead ? (
								<p className="font-script mt-5 text-[1.65rem] leading-snug text-foreground/90 md:text-[2rem]">
									{scriptLead}
								</p>
							) : null}
							<p className="mt-4 text-base leading-relaxed text-foreground/90 md:text-lg">{description}</p>

							<div className="mt-8 rounded-2xl border border-foreground/12 bg-card p-6 shadow-[0_20px_50px_-12px_rgb(15_23_42/0.22)] md:p-8">
								<ul className="divide-y divide-border/80">
									{bullets.map((item, index) => (
										<li key={index} className="flex gap-4 py-6 first:pt-0 last:pb-0">
											<div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-foreground text-background [&>svg]:h-6 [&>svg]:w-6">
												{item.icon}
											</div>
											<div className="min-w-0 text-left">
												<h3 className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
													{item.title}
												</h3>
												<p className="mt-2 text-base leading-relaxed text-card-foreground">{item.description}</p>
											</div>
										</li>
									))}
								</ul>
								<Button
									size="lg"
									className="mt-4 h-12 w-full rounded-lg text-sm font-bold uppercase tracking-wide shadow-md"
									asChild
								>
									<Link
										href={resolvedCta.href}
										{...(resolvedCta.external === true
											? { target: "_blank", rel: "noopener noreferrer" }
											: {})}
									>
										{resolvedCta.label}
									</Link>
								</Button>
							</div>
						</motion.div>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
