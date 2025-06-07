"use client";
import { useState } from "react";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

const QueryProvider = ({ children }: { children: React.ReactNode }) => {
	const [client] = useState(
		new QueryClient({
			defaultOptions: { queries: { staleTime: 5000, refetchOnWindowFocus: false } },
		}),
	);

	return <QueryClientProvider client={client}>{children}</QueryClientProvider>;
};

export default QueryProvider;
