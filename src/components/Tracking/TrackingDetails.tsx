import type { ITrackingInvoice } from "@/types";
import { TrackingCard } from "./TrackingCard";

interface TrackingDetailsProps {
	invoice: ITrackingInvoice | null | undefined;
}

export function TrackingDetails({ invoice }: TrackingDetailsProps): JSX.Element {
	if (!invoice || Object.keys(invoice).length === 0) {
		return <p>No se encontraron datos</p>;
	}

	return (
		<div className="mx-auto flex max-w-2xl flex-col gap-4">
			{invoice.parcels.map((parcel, index) => (
				<TrackingCard key={`parcel-${parcel.id}-${index}`} parcel={parcel} invoice={invoice} />
			))}
		</div>
	);
}
