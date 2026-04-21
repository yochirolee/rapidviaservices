import type { Metadata } from "next";
import type { ReactElement } from "react";
import { Suspense } from "react";

import OurServices from "@/components/OurServices";
import SearchForm from "@/components/Tracking/search-form";
import { TrackingPageSkeleton } from "@/components/Tracking/TrackingPageSkeleton";
import QueryProvider from "@/lib/react-query-client";
import { siteDetails } from "@/data/siteDetails";

export const metadata: Metadata = {
	title: `Tracking | ${siteDetails.siteName}`,
	description: "Track your shipment by invoice or HBL number.",
};

export default function TrackingPage(): ReactElement {
	return (
		<div className="relative container mx-auto flex w-full flex-col items-center justify-center px-5 pb-0 pt-20 md:pt-40">
			<Suspense fallback={<TrackingPageSkeleton />}>
				<QueryProvider>
					<SearchForm />
				</QueryProvider>
			</Suspense>
			<OurServices />
		</div>
	);
}
