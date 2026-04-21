import { format, parseISO } from "date-fns";
import { es } from "date-fns/locale";
import { Check, Truck } from "lucide-react";
import { dedupeTrackingEventsForDisplay, getTrackingEventPresentation } from "@/lib/trackingEventLabels";
import type { ITrackingEvent } from "@/types";

const getEventIcon = (statusCode: string) => {
   if (statusCode === "DELIVERED") {
      return <Truck className="w-6 h-6 text-green-500" />;
   }
   return <Check className="w-6 h-6 text-[#e90e0e]" />;
};

const formatEventDate = (timestamp: string) => {
   if (!timestamp || timestamp === "0000-00-00") return "";

   try {
      const date = parseISO(timestamp);
      if (isNaN(date.getTime())) return "";
      return format(date, "d MMM yyyy, HH:mm", { locale: es });
   } catch {
      return "";
   }
};

export const TrackingHistoryCard = ({ events }: { events: ITrackingEvent[] | undefined }) => {
   const displayEvents = events && events.length > 0 ? dedupeTrackingEventsForDisplay(events) : [];
   const hasEvents = displayEvents.length > 0;

   return (
      <div className="flex flex-col w-full">
         {hasEvents ? (
            <ul className="space-y-8 lg:border-l border-slate-900/10 pl-4 text-sm leading-6 text-slate-700">
               {[...displayEvents].reverse().map((event, index) => {
                  const line = getTrackingEventPresentation(event);
                  return (
                     <li key={index} className="flex items-start">
                        {getEventIcon(line.statusCode)}
                        <div className="ml-5 flex flex-col gap-0.5">
                           <strong
                              className={`font-semibold ${
                                 line.statusCode === "DELIVERED" ? "text-green-600" : "text-slate-900"
                              }`}
                           >
                              {line.primary}
                           </strong>
                           {line.contextLine && (
                              <span className="text-xs font-medium text-slate-600">{line.contextLine}</span>
                           )}

                           {line.location && <span className="text-xs text-slate-600">{line.location}</span>}
                           {event.timestamp && formatEventDate(event.timestamp) && (
                              <span className="text-xs text-[#ff2200] mt-1">{formatEventDate(event.timestamp)}</span>
                           )}
                        </div>
                     </li>
                  );
               })}
            </ul>
         ) : (
            <div className="text-sm text-slate-500 py-4">No hay eventos disponibles</div>
         )}
      </div>
   );
};
