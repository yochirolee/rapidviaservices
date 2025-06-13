import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing/Pricing";
import FAQ from "@/components/FAQ";
import Benefits from "@/components/Benefits/Benefits";
import Section from "@/components/Section";
import Stats from "@/components/Stats";
import About1 from "@/components/About1";
import OurServices from "@/components/OurServices";
import Head from "next/head";
const HomePage: React.FC = () => {
	return (
		<>
			<Head>
				<title>Servicios Notariales, Preparación de Documentos Migratorios y Envío de Paquetes a Cuba | Rapidvia Services</title>
				<meta
					name="description"
					content="Notaría pública, preparación de documentos para trámites migratorios, traducciones certificadas y envío de paquetes a Cuba desde Sarasota. Servicios rápidos, seguros y personalizados."					
				/>
				<meta
					name="keywords"
					content="servicios notariales Sarasota, preparación de documentos migratorios, traducciones certificadas, envíos a Cuba, notaría pública Sarasota"
				/>
				<meta name="author" content="Rapid Via Services" />
				<meta name="robots" content="index, follow" />
				{/* Open Graph para compartir en redes */}
				<meta property="og:title" content="Servicios Notariales, Preparación de Documentos Migratorios y Envío de Paquetes a Cuba | Rapidvia Services" />
				<meta property="og:description" content="Notaría pública, preparación de documentos para trámites migratorios, traducciones certificadas y envío de paquetes a Cuba desde Sarasota. Servicios rápidos, seguros y personalizados." />
				<meta property="og:image" content="/images/logo.png" />
				<meta property="og:url" content="https://rapidviaservices.vercel.app/" />
				<meta property="og:type" content="website" />
			</Head>
			<div className="container mx-auto space-y-10 md:space-y-20 ">
				<Hero />
				<OurServices />
				<About1 />

				<Benefits />
				<Section
					id="pricing"
					title=" ¿Qué Incluye Cada Servicio?"
					description="Descubre en detalle lo que ofrecemos en cada uno de nuestros servicios."
				>
					<Pricing />
				</Section>

				<Section
					id="testimonials"
					title="Lo que dicen nuestros clientes"
					description="Conoce la experiencia de quienes han confiado en nosotros."
				>
					<Testimonials />
				</Section>

				<FAQ />

				<Stats />
			</div>
		</>
	);
};

export default HomePage;
