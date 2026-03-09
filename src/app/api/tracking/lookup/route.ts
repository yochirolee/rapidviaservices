import { NextRequest, NextResponse } from "next/server";
import axios from "axios";
import { checkRateLimit } from "@/lib/rateLimit";

const PRODUCTION_BASE = "https://tracking.ctenvios.com/api/v1";
const API_KEY = process.env.TRACKING_API_KEY ?? "c3VwYmFzZWNyZXQ=";
const NEW_TRACKING_BASE = "https://api.ctenvios.com";
const REQUEST_TIMEOUT_MS = 4000;

const MAX_LENGTH = 64;
const MIN_TRACKING_LENGTH = 3;

function stripCTESuffix(value: string): string {
   const trimmed = value.trim();
   if (trimmed.endsWith("CTE") || trimmed.endsWith("cte")) {
      return trimmed.slice(0, -3);
   }
   return trimmed;
}

function getClientIp(request: NextRequest): string {
   const forwarded = request.headers.get("x-forwarded-for");
   const realIp = request.headers.get("x-real-ip");
   if (forwarded) return forwarded.split(",")[0].trim();
   if (realIp) return realIp;
   return "127.0.0.1";
}

function isNotFound(response: unknown): boolean {
   if (!response || typeof response !== "object") return true;
   const obj = response as Record<string, unknown>;
   const message = String(obj.message ?? "").toLowerCase();
   if (message.includes("not found")) return true;
   const parcels = obj.parcels;
   return !Array.isArray(parcels) || parcels.length === 0;
}

export async function GET(request: NextRequest): Promise<NextResponse> {
   const ip = getClientIp(request);
   const { allowed } = checkRateLimit(ip);
   if (!allowed) {
      return NextResponse.json({ error: "Demasiadas solicitudes. Intente de nuevo en un minuto." }, { status: 429 });
   }

   const url = new URL(request.url);
   const rawTracking = url.searchParams.get("tracking") ?? "";
   const rawOrderId = url.searchParams.get("order_id") ?? "";

   let value: string;
   let useOrderId: boolean;

   if (rawOrderId) {
      value = rawOrderId.trim();
      useOrderId = /^\d+$/.test(value);
   } else if (rawTracking) {
      value = stripCTESuffix(rawTracking);
      useOrderId = /^\d+$/.test(value);
   } else {
      return NextResponse.json({ error: "Se requiere 'tracking' o 'order_id'" }, { status: 400 });
   }

   if (value.length > MAX_LENGTH) {
      return NextResponse.json({ error: "El valor excede el límite permitido" }, { status: 400 });
   }

   if (!useOrderId && value.length < MIN_TRACKING_LENGTH) {
      return NextResponse.json({ error: "El valor debe tener al menos 3 caracteres" }, { status: 400 });
   }

   const headers = { "api-key": API_KEY };

   if (NEW_TRACKING_BASE) {
      const newUrl = useOrderId
         ? `${NEW_TRACKING_BASE}/api/v1/tracking/lookup?order_id=${encodeURIComponent(value)}`
         : `${NEW_TRACKING_BASE}/api/v1/tracking/lookup?tracking=${encodeURIComponent(value)}`;

      try {
         const res = await axios.get(newUrl, {
            headers,
            timeout: REQUEST_TIMEOUT_MS,
            validateStatus: () => true,
         });

         if (res.status === 200 && !isNotFound(res.data)) {
            return NextResponse.json(res.data);
         }
      } catch {
         // Fall through to production
      }
   }

   const prodBase = PRODUCTION_BASE;
   const axiosOpts = {
      headers,
      timeout: REQUEST_TIMEOUT_MS,
      validateStatus: () => true,
   };

   const prodLookupUrl = useOrderId
      ? `${prodBase}/tracking/lookup?order_id=${encodeURIComponent(value)}`
      : `${prodBase}/tracking/lookup?tracking=${encodeURIComponent(value)}`;

   const productionUrls: string[] = [
      prodLookupUrl,
      ...(useOrderId ? [`${prodBase}/parcels/order/${encodeURIComponent(value)}`] : []),
      ...(value.length >= 4 && value.length <= 6
         ? [`${prodBase}/parcels/invoice/${encodeURIComponent(value)}`]
         : []),
      `${prodBase}/parcels/hbl/${encodeURIComponent(value)}`,
   ];

   const results = await Promise.allSettled(
      productionUrls.map((u) => axios.get(u, axiosOpts))
   );

   for (const result of results) {
      if (result.status === "fulfilled" && result.value.status === 200 && !isNotFound(result.value.data)) {
         return NextResponse.json(result.value.data);
      }
   }

   return NextResponse.json({ message: "No encontrado", parcels: [] }, { status: 404 });
}
