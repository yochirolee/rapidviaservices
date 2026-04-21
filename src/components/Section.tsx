import SectionTitle from "./SectionTitle";
import { cn } from "@/lib/utils";

interface SectionProps {
	id: string;
	title: string;
	description: string;
	className?: string;
}

export default function Section({
	id,
	title,
	description,
	children,
	className,
}: React.PropsWithChildren<SectionProps>): JSX.Element {
	return (
		<section id={id} className={cn("px-4 py-10 lg:px-0 lg:py-20", className)}>
			<div className="container mx-auto">
				<SectionTitle>
					<h2 className="mb-4 text-center">{title}</h2>
				</SectionTitle>
				<p className="mx-auto mb-12 max-w-2xl text-center text-muted-foreground">{description}</p>
				{children}
			</div>
		</section>
	);
}
