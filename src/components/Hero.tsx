import React from "react";
import Image from "next/image";
import { heroDetails } from "@/data/hero";
import Link from "next/link";
import { FaSearchLocation, FaWhatsapp } from "react-icons/fa";

const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative flex items-center justify-center pb-0 pt-20 md:pt-40 px-5 overflow-x-clip"
    >
      <div className="absolute left-0 top-0 bottom-0 -z-10 w-full">
        <div className="absolute inset-0 h-full w-full bg-hero-background bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)] "></div>
      </div>

      <div className="container grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mx-auto">
        <div className="flex items-center justify-center">
          <Image
            className="rounded-full shadow-xl w-full max-w-[600px] h-auto"
            src={heroDetails.centerImageSrc}
            alt="RapidVia Services - Servicios de inmigración y envíos a Cuba"
            width={600}
            height={600}
            quality={75}
            priority
            sizes="(min-width: 1024px) 600px, 80vw"
          />
        </div>

        <div className="flex flex-col text-center space-y-6 p-4 lg:text-left">
          <h1 className="text-red-700 font-bold leading-tight text-4xl md:text-6xl">
            RapidVia Services
          </h1>

          <h2 className="font-bold text-foreground leading-tight text-2xl md:text-4xl max-w-lg md:max-w-2xl mx-auto lg:mx-0">
            {heroDetails.heading}
          </h2>

          <p className="text-body-color text-base leading-relaxed max-w-xl mx-auto lg:mx-0">
            {heroDetails.subheading}
          </p>
          <p className="text-body-color text-base leading-relaxed max-w-xl mx-auto lg:mx-0">
            {heroDetails.subheading2}
          </p>

          <div className="flex flex-col md:flex-row gap-4 justify-center lg:justify-start items-center">
            <Link
              href="https://wa.me/+19415367542"
              target="_blank"
              className="inline-flex items-center justify-center h-12 gap-3 px-4 py-2 rounded-md text-base font-medium text-green-600"
            >
              <FaWhatsapp className="h-5 w-5 md:h-6 md:w-6" />
              Whatsapp
            </Link>

            <Link
              href="tracking"
              className="inline-flex items-center justify-center h-12 gap-3 px-4 py-2 rounded-md text-base font-medium text-red-600"
            >
              <FaSearchLocation className="h-5 w-5 md:h-6 md:w-6" />
              Seguir Envío
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
