"use client";

import { stats } from "@/data/stats";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Stats(): JSX.Element {
	return (
		<section id="stats" className="py-10 lg:py-20">
			<div className="container mx-auto grid gap-6 sm:grid-cols-3">
				{stats.map((stat) => (
					<Card key={stat.title} className="border-border/60 text-center shadow-sm sm:text-left">
						<CardHeader className="pb-2">
							<CardTitle className="flex flex-col items-center gap-2 text-xl font-semibold sm:flex-row sm:justify-start md:text-2xl">
								<span className="text-primary [&>svg]:h-7 [&>svg]:w-7">{stat.icon}</span>
								{stat.title}
							</CardTitle>
						</CardHeader>
						<CardContent>
							<p className="text-base leading-relaxed text-muted-foreground">{stat.description}</p>
						</CardContent>
					</Card>
				))}
			</div>
		</section>
	);
}
