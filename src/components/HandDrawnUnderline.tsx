import { cn } from "@/lib/utils";

export function HandDrawnUnderline({ className }: { className?: string }): JSX.Element {
	return (
		<svg
			className={cn(
				"pointer-events-none absolute -bottom-1 left-0 h-4 w-full max-w-[min(100%,280px)] overflow-visible text-primary",
				className
			)}
			viewBox="0 0 280 14"
			fill="none"
			aria-hidden
		>
			<path
				d="M4 9.5c46-5.5 92-6.5 138-3.5s92 6 134-1"
				stroke="currentColor"
				strokeWidth="2.75"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M6 11.5c40 2.5 88 1.5 132-0.5s86-3 126 1.5"
				stroke="currentColor"
				strokeWidth="1.25"
				strokeLinecap="round"
				opacity="0.4"
			/>
		</svg>
	);
}

export function renderHeadingWithHighlight(fullTitle: string, highlight?: string): JSX.Element {
	if (!highlight) {
		return <>{fullTitle}</>;
	}
	const idx = fullTitle.indexOf(highlight);
	if (idx === -1) {
		return <>{fullTitle}</>;
	}
	const before = fullTitle.slice(0, idx);
	const after = fullTitle.slice(idx + highlight.length);
	return (
		<>
			{before}
			<span className="relative inline-block pb-1">
				{highlight}
				<HandDrawnUnderline />
			</span>
			{after}
		</>
	);
}
