import * as React from "react";
import { cn } from "@/lib/utils";

interface SectionTitleProps {
	children: React.ReactElement<{ className?: string }>;
}

export default function SectionTitle({ children }: SectionTitleProps): JSX.Element {
	return React.cloneElement(children, {
		className: cn(
			children.props.className,
			"text-balance text-3xl font-bold leading-tight tracking-tight text-foreground md:text-4xl lg:text-5xl lg:leading-tight"
		),
	});
}
