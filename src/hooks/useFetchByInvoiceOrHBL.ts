import { useQuery } from "@tanstack/react-query";
import type { ITrackingInvoice } from "@/types";

const RATE_LIMIT_MESSAGE = "Demasiadas solicitudes. Intente de nuevo en un minuto.";

function stripCTESuffix(value: string): string {
	const trimmed = value.trim();
	if (trimmed.endsWith("CTE") || trimmed.endsWith("cte")) {
		return trimmed.slice(0, -3);
	}
	return trimmed;
}

async function fetchTracking(searchTerm: string): Promise<ITrackingInvoice | null> {
	const trimmed = stripCTESuffix(searchTerm);
	const isOrderId = /^\d+$/.test(trimmed);
	const param = isOrderId ? `order_id=${encodeURIComponent(trimmed)}` : `tracking=${encodeURIComponent(trimmed)}`;
	const url = `/api/tracking/lookup?${param}`;

	const res = await fetch(url);

	if (res.status === 429) {
		throw new Error(RATE_LIMIT_MESSAGE);
	}

	if (!res.ok) {
		if (res.status === 404) return null;
		const body = await res.json().catch(() => ({}));
		const msg = (body as { error?: string; message?: string })?.error ?? (body as { message?: string })?.message ?? "Error al cargar los datos";
		throw new Error(msg);
	}

	const data = (await res.json()) as ITrackingInvoice;
	if (!data?.parcels?.length) {
		return null;
	}

	return data;
}

export function useFetchByInvoiceOrHBL(searchTerm: string) {
	const trimmed = stripCTESuffix(searchTerm);
	const enabled = /^\d+$/.test(trimmed) || trimmed.length >= 3;

	return useQuery({
		queryKey: ["fetchProductByHBL", searchTerm],
		queryFn: () => fetchTracking(searchTerm),
		staleTime: 1000 * 60 * 5,
		enabled: !!searchTerm && enabled,
		retry: 0,
	});
}
