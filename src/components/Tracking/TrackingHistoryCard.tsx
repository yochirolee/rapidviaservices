import { CheckIcon } from "lucide-react";
import { format, parseISO, isValid } from "date-fns";
import { ITrackingEvent } from "@/types";

export function TrackingHistoryCard({ events }: { events: ITrackingEvent[] }) {
	if (!events) return;

	return (
		<ul className=" space-y-8 lg:border-l  border-slate-900/10 pl-4 text-sm leading-6 text-slate-700">
			{[...events].reverse().map((event: ITrackingEvent, index: number) => (
				<li key={index} className="flex  items-center ">
					<CheckIcon className="w-6 h-6 text-red-600" />
					<p className="ml-5 flex flex-col ">
						<strong className="flex font-semibold gap-2 text-slate-900">
							{event?.location}
						</strong>
						<span className="text-xs text-gray-700">
							{event?.updatedAt && event?.updatedAt !== "0000-00-00"
								? (() => {
										try {
											const date = parseISO(event.updatedAt);
											return isValid(date) ? format(date, "MMM d, yyyy") : event.updatedAt;
										} catch {
											return event.updatedAt;
										}
								  })()
								: ""}
						</span>
					</p>
				</li>
			))}
		</ul>
	);
}
