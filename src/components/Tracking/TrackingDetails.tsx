import React from "react";
import { TrackingCard } from "./TrackingCard";

export const TrackingDetails = ({ invoice }: { invoice: any }) => {
   if (!invoice || Object.keys(invoice).length === 0) {
      return <p>No se encontraron datos</p>;
   }

   return (
      <div className="flex flex-col gap-4 max-w-2xl mx-auto">
         {invoice.parcels.map((parcel: any, index: number) => (
            <TrackingCard key={`parcel-${index}`} parcel={parcel} invoice={invoice} />
         ))}
      </div>
   );
};
