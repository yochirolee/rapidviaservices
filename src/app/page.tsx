import Section from "@/components/Section";
import { Suspense, lazy } from "react";
import type { Metadata } from "next";


const Hero = lazy(() => import("@/components/Hero"));
const OurServices = lazy(() => import("@/components/OurServices"));
const About1 = lazy(() => import("@/components/About1"));

// Lazy load components that are below the fold
const Testimonials = lazy(() => import("@/components/Testimonials"));
const Pricing = lazy(() => import("@/components/Pricing/Pricing"));
const FAQ = lazy(() => import("@/components/FAQ"));
const Benefits = lazy(() => import("@/components/Benefits/Benefits"));
const Stats = lazy(() => import("@/components/Stats"));

export const metadata: Metadata = {
	title: "Servicios Notariales e Inmigración en Sarasota | Rapid Via Services",
	description:
		"Trámites de inmigración, notaría pública, traducciones certificadas y envío de paquetes a Cuba desde Sarasota. Servicio de envíos a Cuba confiables y personalizados.",
	keywords:
		"servicios notariales Sarasota, trámites de inmigración, preparador de formas, preparador de formularios de inmigración,TPS, ajuste de estatus, ciudadanía, traducciones certificadas, envíos a Cuba",
	authors: [{ name: "Rapid Via Services" }],
	robots: "index, follow",
};

const HomePage: React.FC = () => {
	return (
		<>
			<div className="container mx-auto space-y-10 md:space-y-20 ">
				<Suspense fallback={<div className="h-64 bg-gray-100 animate-pulse rounded-lg" />}>
					<Hero />
				</Suspense>
				<Suspense fallback={<div className="h-64 bg-gray-100 animate-pulse rounded-lg" />}>
					<OurServices />
				</Suspense>
				<Suspense fallback={<div className="h-64 bg-gray-100 animate-pulse rounded-lg" />}>
					<About1 />
				</Suspense>

				<Suspense fallback={<div className="h-64 bg-gray-100 animate-pulse rounded-lg" />}>
					<Benefits />
				</Suspense>

				<Section
					id="pricing"
					title=" ¿Qué Incluye Cada Servicio?"
					description="Descubre en detalle lo que ofrecemos en cada uno de nuestros servicios."
				>
					<Suspense fallback={<div className="h-96 bg-gray-100 animate-pulse rounded-lg" />}>
						<Pricing />
					</Suspense>
				</Section>

				<Section
					id="testimonials"
					title="Lo que dicen nuestros clientes"
					description="Conoce la experiencia de quienes han confiado en nosotros."
				>
					<Suspense fallback={<div className="h-64 bg-gray-100 animate-pulse rounded-lg" />}>
						<Testimonials />
					</Suspense>
				</Section>

				<Suspense fallback={<div className="h-48 bg-gray-100 animate-pulse rounded-lg" />}>
					<FAQ />
				</Suspense>

				<Suspense fallback={<div className="h-32 bg-gray-100 animate-pulse rounded-lg" />}>
					<Stats />
				</Suspense>
			</div>
		</>
	);
};

export default HomePage;
