import type { Metadata } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Poppins } from "next/font/google";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { siteDetails } from "@/data/siteDetails";

import "./globals.css";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

export const metadata: Metadata = {
	title: siteDetails.metadata.title,
	description: siteDetails.metadata.description,
	openGraph: {
		title: siteDetails.metadata.title,
		description: siteDetails.metadata.description,
		url: siteDetails.siteUrl,
		type: "website",
		images: [
			{
				url: "/images/og-image.jpg",
				width: 1200,
				height: 675,
				alt: siteDetails.siteName,
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: siteDetails.metadata.title,
		description: siteDetails.metadata.description,
		images: ["/images/twitter-image.jpg"],
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={` ${poppins.className} antialiased`}>
				{siteDetails.googleAnalyticsId && <GoogleAnalytics gaId={siteDetails.googleAnalyticsId} />}
				<Header />
				<main>{children}</main>
				<Footer />
			</body>
		</html>
	);
}
