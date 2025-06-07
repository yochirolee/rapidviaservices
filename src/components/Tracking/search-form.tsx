"use client";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useFetchByInvoiceOrHBL } from "../../hooks/useFetchByInvoiceOrHBL";
import TrackingDetails from "./TrackingDetails";
import { Alert, AlertDescription, AlertTitle } from "../ui/alert";

export default function SearchForm() {
	const [inputValue, setInputValue] = useState("");
	const [searchTerm, setSearchTerm] = useState("");
	const { data, isLoading, isError } = useFetchByInvoiceOrHBL(searchTerm);
	const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (inputValue.length < 3) {
			return;
		}
		setSearchTerm(inputValue);
	};

	return (
		<div className="flex flex-col mx-auto w-full md:w-7xl  pb-20 items-center justify-center gap-4">
			<form
				onSubmit={handleOnSubmit}
				className="flex mx-auto container max-w-lg py-10 md:pb-6 md:pt-0 md:w-lg  md:flex-row flex-col gap-4"
			>
				<Input
					placeholder="Buscar por Factura o HBL"
					value={inputValue}
					onChange={(e) => setInputValue(e.target.value)}
				/>
				<Button
					disabled={isLoading || inputValue.length < 3}
					variant="default"
					className="bg-red-600 text-white"
					type="submit"
				>
					{isLoading ? "Buscando..." : "Buscar"}
				</Button>
			</form>
			{isError && (
				<Alert variant="destructive">
					<AlertTitle>Error</AlertTitle>
					<AlertDescription>Error al cargar los datos</AlertDescription>
				</Alert>
			)}
			{data && <TrackingDetails invoice={data} />}
		</div>
	);
}
