"use client";

import type { FormEvent } from "react";
import { ctaDetails } from "@/data/cta";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export default function CTA(): JSX.Element {
	const onSubmit = (e: FormEvent<HTMLFormElement>): void => {
		e.preventDefault();
		const form = e.currentTarget;
		const data = new FormData(form);
		const email = String(data.get("email") ?? "").trim();
		if (!email) {
			return;
		}
		const subject = encodeURIComponent("Suscripción al boletín — RapidVia Services");
		const body = encodeURIComponent(`Hola,\n\nDeseo suscribirme al boletín con este correo: ${email}\n`);
		window.location.href = `mailto:${ctaDetails.contactEmail}?subject=${subject}&body=${body}`;
	};

	return (
		<section id="cta" className="my-12 lg:my-24">
			<Card className="mx-auto max-w-3xl overflow-hidden rounded-3xl border border-border/50 bg-muted/20 shadow-card">
				<CardContent className="px-6 py-12 text-center sm:px-10 sm:py-14">
					<h2 className="mb-3 text-balance text-2xl font-bold tracking-tight text-foreground sm:text-3xl md:text-4xl">
						{ctaDetails.heading}
					</h2>
					<p className="mx-auto mb-8 max-w-lg text-base leading-relaxed text-muted-foreground md:text-lg">
						{ctaDetails.subheading}
					</p>
					<form
						className="mx-auto flex max-w-md flex-col gap-3 sm:flex-row sm:items-stretch"
						onSubmit={onSubmit}
					>
						<Input
							type="email"
							name="email"
							required
							autoComplete="email"
							placeholder="Tu correo electrónico"
							className="h-11 flex-1 rounded-xl border-border/80 bg-background px-4 text-base"
						/>
						<Button type="submit" size="lg" className="h-11 shrink-0 rounded-xl px-8 sm:w-auto">
							Suscribirse
						</Button>
					</form>
				</CardContent>
			</Card>
		</section>
	);
}
