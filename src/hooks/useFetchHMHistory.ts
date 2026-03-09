import { useQuery } from "@tanstack/react-query";

interface HMHistoryResponse {
	historial: unknown[];
	[key: string]: unknown;
}

/**
 * Fetches HM history for a given HBL
 * Uses HM API directly (NEXT_PUBLIC_HM_API_URL). Set to empty to use proxy for CORS.
 * @param {string} hbl - The HBL code to fetch history for
 * @returns {Promise<HMHistoryResponse>} - The HM history response
 */
const HM_FETCH_TIMEOUT_MS = 2500;

const HM_API_BASE =
	process.env.NEXT_PUBLIC_HM_API_URL ?? "http://72.60.114.241/api/historial/envio";

const getHMUrl = (hbl: string): string =>
	`${HM_API_BASE.replace(/\/$/, "")}/${hbl.trim()}/`;

const fetchHMHistory = async (hbl: string): Promise<HMHistoryResponse> => {
	if (!hbl || hbl.trim() === "") {
		return { historial: [] };
	}

	const controller = new AbortController();
	const timeoutId = setTimeout(() => controller.abort(), HM_FETCH_TIMEOUT_MS);

	const url = getHMUrl(hbl);

	try {
		const response = await fetch(url, {
			signal: controller.signal,
		});
		clearTimeout(timeoutId);

		if (!response.ok) {
			return { historial: [] };
		}

		return response.json();
	} catch {
		clearTimeout(timeoutId);
		return { historial: [] };
	}
};

/**
 * React Query hook to fetch HM history for a parcel
 * @param {string} hbl - The HBL code
 * @returns {object} - React Query result with data, isLoading, error
 */
export const useFetchHMHistory = (hbl: string) => {
	return useQuery({
		queryKey: ["fetchHMHistory", hbl],
		queryFn: () => fetchHMHistory(hbl),
		enabled: Boolean(hbl && hbl.trim() !== ""),
		staleTime: 1000 * 60 * 5, // 5 minutes
		retry: 1,
	});
};
