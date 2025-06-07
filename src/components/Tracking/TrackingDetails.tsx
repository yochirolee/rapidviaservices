import React from "react";
import { TrackingCard } from "./TrackingCard";
import { ITrackingInvoice } from "@/types";

export default function TrackingDetails({ invoice }: { invoice: ITrackingInvoice }) {
	// Early return if invoice is falsy or empty
	if (!invoice || Object.keys(invoice).length === 0) {
		return <div>No se encontraron datos</div>;
	}

	const { parcels } = invoice;

	// Early return if parcels is falsy or empty
	if (!parcels || parcels.length === 0) {
		return <div>No se encontraron datos</div>;
	}

	return (
		<div className="flex flex-col gap-4 px-4 w-full md:max-w-2xl md:mx-auto">
			{parcels?.map((parcel: any, index: number) => (
				<TrackingCard key={`parcel-${index}`} parcel={parcel} invoice={invoice} />
			))}
		</div>
	);
}
