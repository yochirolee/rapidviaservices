import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const production_URL = "https://tracking.ctenvios.com/api/v1";
const dev_url = "http://localhost:3000/api/v1";
axios.defaults.baseURL = production_URL;
const apiKey = "c3VwYmFzZWNyZXQ=";
axios.defaults.headers.common = { "api-key": apiKey };

const getProductData = async (id: string) => {
	if (!id) return [];
	if (id.endsWith("CTE") || id.endsWith("cte")) {
		id = id.slice(0, -3);
	}
	//scalp id
	if (id.length >= 4 && id.length < 7) {
		const response = await axios.get(`parcels/invoice/${id}`);
		return response.data;
	} else {
		const response = await axios.get(`parcels/hbl/${id}`);
		return response.data;
	}
};

export const useFetchByInvoiceOrHBL = (id: string) => {
	return useQuery({
		queryKey: ["fetchProductByHBL", id],
		queryFn: () => getProductData(id),
		staleTime: 1000 * 60 * 5,
		enabled: !!id,
	});
};
