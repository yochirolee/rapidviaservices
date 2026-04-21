"use client";

import { Star, StarHalf } from "lucide-react";
import { testimonials } from "@/data/testimonials";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface TestimonialWithRating {
	name: string;
	role?: string;
	message: string;
	avatar: string;
	rating: number;
}

function renderStars(rating: number): JSX.Element[] {
	const stars: JSX.Element[] = [];
	const full = Math.floor(rating);
	const hasHalf = rating - full >= 0.5;
	const empty = 5 - full - (hasHalf ? 1 : 0);
	for (let i = 0; i < full; i++) {
		stars.push(<Star key={`f-${i}`} className="h-4 w-4 fill-primary text-primary md:h-5 md:w-5" />);
	}
	if (hasHalf) {
		stars.push(<StarHalf key="h" className="h-4 w-4 fill-primary text-primary md:h-5 md:w-5" />);
	}
	for (let i = 0; i < empty; i++) {
		stars.push(<Star key={`e-${i}`} className="h-4 w-4 text-primary/25 md:h-5 md:w-5" />);
	}
	return stars;
}

export default function TestimonialsSection(): JSX.Element {
	return (
		<section className="bg-background py-4 md:py-6">
			<div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
				<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
					{testimonials.map((t: TestimonialWithRating, index) => (
						<Card
							key={`${t.name}-${index}`}
							className="rounded-3xl border border-border/50 text-left shadow-card transition-shadow duration-300 hover:shadow-card-hover"
						>
							<CardContent className="p-6 md:p-7">
								<div className="mb-4 flex items-center gap-4">
									<Avatar className="h-12 w-12">
										<AvatarImage src={t.avatar} alt={t.name} />
										<AvatarFallback>{t.name.slice(0, 2)}</AvatarFallback>
									</Avatar>
									<div>
										<p className="text-base font-semibold leading-snug text-foreground md:text-lg">{t.name}</p>
										{t.role ? <p className="text-sm text-muted-foreground">{t.role}</p> : null}
										<div className="mt-1 flex" aria-label={`Calificación: ${t.rating} de 5`}>
											{renderStars(t.rating)}
										</div>
									</div>
								</div>
								<p className="text-base leading-relaxed text-muted-foreground">{t.message}</p>
							</CardContent>
						</Card>
					))}
				</div>
			</div>
		</section>
	);
}
