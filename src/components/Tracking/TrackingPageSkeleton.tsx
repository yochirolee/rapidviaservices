import type { ReactElement } from "react";

import { Skeleton } from "@/components/ui/skeleton";

export function TrackingPageSkeleton(): ReactElement {
	return (
		<div
			className="flex w-full max-w-xl flex-col gap-6 py-4"
			aria-busy
			aria-label="Loading tracking form"
		>
			<div className="space-y-2 text-center">
				<Skeleton className="mx-auto h-8 w-3/4 max-w-sm" />
				<Skeleton className="mx-auto h-4 w-full max-w-md" />
			</div>
			<Skeleton className="h-11 w-full rounded-lg" />
			<Skeleton className="h-10 w-full rounded-lg" />
		</div>
	);
}
