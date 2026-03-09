"use client";

import { Input } from "@/components/ui/input";
import { useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { useFetchByInvoiceOrHBL } from "@/hooks/useFetchByInvoiceOrHBL";
import TrackingDetails from "./TrackingDetails";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

function stripCTESuffix(value: string): string {
	const trimmed = value.trim();
	if (trimmed.endsWith("CTE") || trimmed.endsWith("cte")) {
		return trimmed.slice(0, -3);
	}
	return trimmed;
}

function isValidSearch(value: string): boolean {
	const trimmed = stripCTESuffix(value);
	return /^\d+$/.test(trimmed) || trimmed.length >= 3;
}

export default function SearchForm(): JSX.Element {
	const router = useRouter();
	const searchParams = useSearchParams();
	const urlSearch = searchParams.get("search") ?? "";
	const [inputValue, setInputValue] = useState(urlSearch);
	const [searchTerm, setSearchTerm] = useState(urlSearch);

	useEffect(() => {
		if (urlSearch && isValidSearch(urlSearch)) {
			setInputValue(urlSearch);
			setSearchTerm(urlSearch);
		}
	}, [urlSearch]);

	const { data, isLoading, isError, error, isFetched } = useFetchByInvoiceOrHBL(searchTerm);

	const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
		e.preventDefault();
		if (!isValidSearch(inputValue)) return;
		setSearchTerm(inputValue);
		const params = new URLSearchParams(searchParams.toString());
		params.set("search", inputValue);
		router.replace(`?${params.toString()}`, { scroll: false });
	};

	const showNotFound = isFetched && !isError && data === null && searchTerm;

	return (
		<div className="flex flex-col mx-auto w-full md:w-7xl pb-20 items-center justify-center gap-4">
			<form
				onSubmit={handleOnSubmit}
				className="flex mx-auto container max-w-lg py-10 md:pb-6 md:pt-0 md:w-lg md:flex-row flex-col gap-4"
			>
				<Input
					placeholder="Buscar por Factura o HBL"
					value={inputValue}
					onChange={(e) => setInputValue(e.target.value)}
				/>
				<button
					disabled={isLoading || !isValidSearch(inputValue)}
					className="bg-red-600 text-white text-sm rounded-md px-6 py-2 min-w-[120px] transition duration-300 ease-in-out hover:bg-red-700 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed"
					type="submit"
				>
					{isLoading ? "Buscando..." : "Buscar"}
				</button>
			</form>
			{isError && (
				<Alert variant="destructive">
					<AlertTitle>Error</AlertTitle>
					<AlertDescription>{error?.message ?? "Error al cargar los datos"}</AlertDescription>
				</Alert>
			)}
			{showNotFound && (
				<div className="text-muted-foreground">No se encontraron datos</div>
			)}
			{data && <TrackingDetails invoice={data} />}
		</div>
	);
}
