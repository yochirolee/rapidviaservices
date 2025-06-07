import SearchForm from "@/components/Tracking/search-form";
import OurServices from "@/components/OurServices";
import QueryProvider from "@/lib/react-query-client";
import Head from "next/head";
import { Suspense } from "react";

export default function Tracking() {
	return (
		<>
			<Head>
				<title>Rapid Via Services - Tracking</title>
			</Head>
			<div className="relative container w-full flex flex-col mx-auto items-center justify-center pb-0 pt-20 md:pt-40 px-5">
				<Suspense fallback={<div>Loading...</div>}>
					<QueryProvider>
						<SearchForm />
					</QueryProvider>
				</Suspense>
				<OurServices />
			</div>
		</>
	);
}
