import Link from "next/link";
import React from "react";

import { siteDetails } from "@/data/siteDetails";
import { footerDetails } from "@/data/footer";
import { getPlatformIconByName } from "@/utils";
import Image from "next/image";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="max-w-7xl w-full mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
        <div>
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/images/rapidvia-services-tramites-notariales-logo.png"
              alt="RapidViaServices Logo"
              width={48}
              height={48}
              className="h-10 w-10 md:h-12 md:w-12"
            />
            <h3 className="manrope text-lg md:text-xl font-semibold leading-tight">
              {siteDetails.siteName}
            </h3>
          </Link>

          <p className="mt-3.5 text-white/80 font-normal text-sm md:text-base leading-relaxed">
            {footerDetails.subheading}
          </p>
        </div>

        <div>
          <h4 className="text-base md:text-lg font-semibold mb-4 leading-tight">
            Enlaces Rápidos
          </h4>
          <ul className="text-white/80 font-normal text-sm md:text-[15px]">
            {footerDetails.quickLinks.map((link) => (
              <li key={link.text} className="mb-2 last:mb-0">
                <Link
                  href={link.url}
                  className="hover:text-white focus:outline-none focus:ring-2 focus:ring-white/30 rounded-sm transition-colors"
                >
                  {link.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-base md:text-lg font-semibold mb-4 leading-tight">
            Contáctanos
          </h4>

          <div className="flex flex-col gap-2">
            {footerDetails.Address && (
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(footerDetails.Address)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-white/80 font-normal text-sm md:text-[15px] hover:text-white focus:outline-none focus:ring-2 focus:ring-white/30 rounded-sm transition-colors"
              >
                Dirección: {footerDetails.Address}
              </a>
            )}

            {footerDetails.Horario && (
              <span className="block text-white/80 font-normal text-sm md:text-[15px]">
                Horario: {footerDetails.Horario}
              </span>
            )}

            {footerDetails.email && (
              <a
                href={`mailto:${footerDetails.email}`}
                className="block text-white/80 font-normal text-sm md:text-[15px] hover:text-white focus:outline-none focus:ring-2 focus:ring-white/30 rounded-sm transition-colors"
              >
                Email: {footerDetails.email}
              </a>
            )}

            {footerDetails.telephone && (
              <a
                href={`tel:${footerDetails.telephone}`}
                className="block text-white/80 font-normal text-sm md:text-[15px] hover:text-white focus:outline-none focus:ring-2 focus:ring-white/30 rounded-sm transition-colors"
              >
                Phone: {footerDetails.telephone}
              </a>
            )}
          </div>

          {footerDetails.socials && (
            <div className="mt-5 flex items-center gap-4 flex-wrap">
              {Object.keys(footerDetails.socials).map((platformName) => {
                if (platformName && footerDetails.socials[platformName]) {
                  return (
                    <Link
                      href={footerDetails.socials[platformName]}
                      key={platformName}
                      aria-label={platformName}
                      className="opacity-80 hover:opacity-100 transition-opacity focus:outline-none focus:ring-2 focus:ring-white/30 rounded-sm [&>svg]:h-5 [&>svg]:w-5"
                    >
                      {getPlatformIconByName(platformName)}
                    </Link>
                  );
                }
                return null;
              })}
            </div>
          )}
        </div>
      </div>

      <div className="mt-8 border-t border-white/10 pt-6 text-center text-white/60 text-xs md:text-sm px-6 leading-relaxed">
        Copyright &copy; {new Date().getFullYear()} {siteDetails.siteName}. All rights reserved. · Desarrollado por Valelee LLC
      </div>
    </footer>
  );
};

export default Footer;
