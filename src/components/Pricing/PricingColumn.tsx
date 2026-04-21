import { Check } from "lucide-react";
import { IPricing } from "@/types";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

interface PricingColumnProps {
	tier: IPricing;
	highlight?: boolean;
}

export default function PricingColumn({ tier, highlight }: PricingColumnProps): JSX.Element {
	const { name, features } = tier;

	return (
		<Card
			className={cn(
				"mx-auto w-full max-w-sm border-border/60 transition-shadow lg:max-w-full",
				highlight && "border-primary/50 shadow-lg ring-2 ring-primary/20"
			)}
		>
			<CardHeader className="rounded-t-xl border-b bg-muted/30 pb-4">
				<div className="flex flex-wrap items-center gap-2">
					<CardTitle className="text-xl text-primary md:text-2xl">{name}</CardTitle>
					{highlight ? <Badge>Popular</Badge> : null}
				</div>
			</CardHeader>
			<CardContent className="pt-6">
				<p className="mb-1 text-sm font-semibold uppercase tracking-wide text-muted-foreground">Incluimos</p>
				<Separator className="my-4" />
				<ul className="space-y-3">
					{features.map((feature, index) => (
						<li key={index} className="flex items-start gap-3">
							<Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden />
							<span className="text-base leading-relaxed text-muted-foreground">{feature}</span>
						</li>
					))}
				</ul>
			</CardContent>
		</Card>
	);
}
