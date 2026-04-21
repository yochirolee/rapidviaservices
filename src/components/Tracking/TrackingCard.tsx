import { FileText } from "lucide-react";
import type { ITrackingInvoice, ITrackingParcel } from "@/types";
import { TrackingHistoryCard } from "./TrackingHistoryCard";

interface TrackingCardProps {
	parcel: ITrackingParcel;
	invoice: ITrackingInvoice;
}

export function TrackingCard({ parcel, invoice }: TrackingCardProps): JSX.Element {
	const orderOrInvoiceLabel = invoice.invoiceId ?? invoice.order_id ?? "";

	return (
		<div className="relative z-10 -mx-4 shadow-lg ring-1 ring-slate-900/10 sm:mx-0 sm:rounded-3xl lg:flex-none">
			<div className="relative flex flex-col items-center gap-6 bg-white px-4 py-10 sm:rounded-3xl sm:px-10 lg:flex-row">
				<div>
					<div className="my-6 flex items-center justify-between gap-2 lg:gap-0">
						<h1 className="text-xl">{invoice.agency}</h1>
						<span className="inline-flex justify-center rounded-lg border bg-white/5 px-3 py-2 text-sm font-semibold text-gray-700">
							<span className="flex items-center gap-2">
								<FileText className="h-6 w-6" />
								<span aria-hidden="true">{orderOrInvoiceLabel}</span>
							</span>
						</span>
					</div>
					<div className="text-sm text-gray-500">
						{invoice.province} - {invoice.city}
					</div>
					<div className="my-4 flex items-center">
						<p className="text-[1.5rem] leading-none text-slate-900">
							<span className="font-bold">{parcel.hbl}</span>
						</p>
						<p className="ml-3 space-x-1 text-sm">
							<span className="font-semibold text-slate-900">HBL</span>
						</p>
					</div>
					<span className="mt-4 text-slate-500">{parcel.description}</span>
				</div>
				<TrackingHistoryCard events={parcel.events} />
			</div>
		</div>
	);
}
