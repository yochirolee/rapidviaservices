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
				url: "/images/rapidvia-services-logo.jpeg",
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
			<head>
				<meta
					name="google-site-verification"
					content="nZtwGfB9aepU8AimkJmEjhGhuOJ8CifTOvPPKYRitZI"
				/>
				
				{/* Open Graph manual */}
				<meta property="og:title" content={siteDetails.metadata.title} />
				<meta property="og:description" content={siteDetails.metadata.description} />
				<meta property="og:type" content="website" />
				<meta property="og:url" content={siteDetails.siteUrl} />
				<meta
					property="og:image"
					content={`${siteDetails.siteUrl}/images/rapidvia-services-logo.jpeg`}
				/>
				<meta property="og:image:width" content="1200" />
				<meta property="og:image:height" content="675" />

				{/* Twitter Card manual */}
				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:title" content={siteDetails.metadata.title} />
				<meta name="twitter:description" content={siteDetails.metadata.description} />
				<meta
					name="twitter:image"
					content={`${siteDetails.siteUrl}/images/rapidvia-services-logo.jpeg`}
				/>
			</head>
			<body className={` ${poppins.className} antialiased`}>
				{siteDetails.googleAnalyticsId && <GoogleAnalytics gaId={siteDetails.googleAnalyticsId} />}
				<Header />
				<main>{children}</main>
				<Footer />
			</body>
		</html>
	);
}
