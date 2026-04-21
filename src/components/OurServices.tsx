"use client";

import Link from "next/link";
import {  MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

/** Pill CTAs — only brand red + navy (matches hero: primary + #1A212E / foreground) */
const btnPrimary =
	"rounded-full bg-primary px-5 text-primary-foreground shadow-sm hover:bg-primary/90";
const btnNavy =
	"rounded-full bg-foreground px-5 text-background shadow-sm hover:bg-foreground/90";

interface ServiceOffer {
	title: string;
	blurb: string;
	deco: string;
	shell: string;
	right: string;
	decoClass: string;
	btnClass: string;
}

const services: ServiceOffer[] = [
	{
		title: "Asilo político",
		blurb: "Preparación y presentación de solicitudes ante las autoridades competentes.",
		deco: "Asilo",
		shell: "bg-red-50",
		right: "bg-primary/[0.11]",
		decoClass: "text-primary/20",
		btnClass: btnPrimary,
	},
	{
		title: "Ajuste de estatus",
		blurb: "Camino hacia la residencia permanente y la Green Card.",
		deco: "Estatus",
		shell: "bg-slate-100",
		right: "bg-slate-200/55",
		decoClass: "text-foreground/14",
		btnClass: btnNavy,
	},
	{
		title: "Permisos de trabajo",
		blurb: "Peticiones laborales para empleo legal en EE.UU.",
		deco: "Laboral",
		shell: "bg-background",
		right: "bg-muted",
		decoClass: "text-muted-foreground/35",
		btnClass: btnPrimary,
	},
	{
		title: "Peticiones de reunificación familiar",
		blurb: "Reunir a familiares directos con procesos claros y seguimiento cercano.",
		deco: "Familia",
		shell: "bg-red-50/80",
		right: "bg-primary/[0.08]",
		decoClass: "text-primary/18",
		btnClass: btnNavy,
	},
	{
		title: "Ciudadanía",
		blurb: "Naturalización y apoyo en cada etapa del trámite.",
		deco: "Ciudadanía",
		shell: "bg-[color-mix(in_oklab,var(--benefit-band-peach)_42%,white)]",
		right: "bg-[color-mix(in_oklab,var(--benefit-band-mustard)_28%,white)]",
		decoClass: "text-amber-950/18",
		btnClass: btnNavy,
	},
	{
		title: "Envío de paquetes a Cuba",
		blurb: "Envíos seguros con seguimiento y entrega a domicilio.",
		deco: "Cuba",
		shell: "bg-slate-50",
		right: "bg-slate-100/90",
		decoClass: "text-foreground/12",
		btnClass: btnPrimary,
	},
];

function ServiceCategoryCard({
	title,
	blurb,
	deco,
	shell,
	right,
	decoClass,
	btnClass,
}: ServiceOffer): JSX.Element {
	return (
		<div
			className={cn(
				"overflow-hidden rounded-2xl shadow-sm ring-1 ring-foreground/6 transition-shadow hover:shadow-md",
				shell,
			)}
		>
			<div className="flex min-h-[200px] flex-col sm:min-h-[220px] md:flex-row">
				<div className="flex flex-1 flex-col justify-center gap-3 p-6 md:py-8">
					<h3 className="text-lg font-bold leading-snug tracking-tight text-foreground md:text-xl">{title}</h3>
					<p className="text-sm leading-relaxed text-muted-foreground">{blurb}</p>
					<Button className={cn("h-9 w-fit text-sm font-semibold", btnClass)} asChild>
						<Link href="/#pricing">Más información</Link>
					</Button>
				</div>
				<div
					className={cn(
						"relative flex min-h-[100px] flex-1 items-center justify-center px-4 py-8 md:max-w-[44%] md:py-0",
						right,
					)}
				>
					<p
						className={cn(
							"text-center text-3xl font-black uppercase leading-none tracking-tighter sm:text-4xl md:text-[2.35rem]",
							decoClass,
						)}
					>
						{deco}
					</p>
				</div>
			</div>
		</div>
	);
}

export default function OurServices(): JSX.Element {
	return (
		<section id="our-services" className="bg-background py-16 md:py-24">
			<div className="container mx-auto px-4 sm:px-6">
				<div className="mb-10 flex flex-col gap-6 sm:mb-12 md:flex-row md:items-end md:justify-between">
					<div className="max-w-2xl">
						<p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">Servicios</p>
						<h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-[2.25rem]">
							Servicios que ofrecemos
						</h2>
						<p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
							Trámites migratorios y envíos a Cuba, con el mismo nivel de detalle en cada servicio.
						</p>
					</div>
					<Button
						variant="outline"
						className="h-11 shrink-0 gap-2 rounded-xl border-foreground/20 bg-background px-6 text-foreground hover:bg-muted hover:text-foreground"
						asChild
					>
						<Link href="https://wa.me/19415367542">
							<MessageCircle className="size-4 text-primary" aria-hidden />
							Más información
						</Link>
					</Button>
				</div>

				<div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 xl:grid-cols-3">
					{services.map((s) => (
						<ServiceCategoryCard key={s.title} {...s} />
					))}
				</div>
			</div>
		</section>
	);
}
