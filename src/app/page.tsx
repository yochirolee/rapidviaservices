import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing/Pricing";
import FAQ from "@/components/FAQ";
import Logos from "@/components/Logos";
import Benefits from "@/components/Benefits/Benefits";
import Section from "@/components/Section";
import Stats from "@/components/Stats";
import CTA from "@/components/CTA";
import About1 from "@/components/About1";
import OurServices from "@/components/OurServices";
import Head from "next/head";
const HomePage: React.FC = () => {
  return (
    <>
    <Head>
        <title>Servicios Notariales e Inmigración en Sarasota | Rapid Via Services</title>
        <meta
          name="description"
          content="Trámites de inmigración, notaría pública, traducciones certificadas y envío de paquetes a Cuba desde Sarasota. Servicio de envíos a Cuba confiables y personalizados."
        />
        <meta
          name="keywords"
          content="servicios notariales Sarasota, trámites de inmigración, TPS, ajuste de estatus, ciudadanía, traducciones certificadas, envíos a Cuba"
        />
        <meta name="author" content="Rapid Via Services" />
        <meta name="robots" content="index, follow" />
      </Head>
      <div className="container mx-auto">
        <About1 />
        <OurServices />
        <Hero />
        <Logos />
    
        <Benefits />
        <Section
          id="pricing"
          title="Precios"
          description="Precios simples y transparentes. Sin sorpresas."
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
        
        <CTA />

        </div>
   
    </>
  );
};

export default HomePage;
