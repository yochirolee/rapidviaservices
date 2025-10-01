"use client";
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";
import { BiMinus, BiPlus } from "react-icons/bi";

import SectionTitle from "./SectionTitle";
import { faqs } from "@/data/faq";
import { FaEnvelope } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";
import Link from "next/link";

const FAQ: React.FC = () => {
  return (
    <section id="faq" className="py-10 lg:py-20">
      <div className="flex flex-col lg:flex-row items-center gap-10">
        <div className="flex flex-col items-center lg:items-start">
          <p className="hidden lg:block text-foreground-accent"></p>

          <SectionTitle>
            {/* Título: escala clara y consistente */}
            <h2 className="my-3 !leading-snug lg:max-w-sm text-center lg:text-left text-2xl md:text-3xl">
              Preguntas frecuentes
            </h2>
          </SectionTitle>

          {/* Subtítulo / llamada: un paso por debajo del H2 */}
          <p className="text-red-600 text-center lg:text-left text-base md:text-lg lg:text-xl font-medium lg:mt-6">
            ¡Pregúntanos lo que quieras!
          </p>

          {/* Enlaces de contacto: misma escala en ambos + iconos consistentes */}
          <Link
            href="mailto:rapidviaservices@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex items-center gap-2 text-sm md:text-base lg:text-lg text-foreground-accent font-semibold hover:underline text-center lg:text-left"
          >
            <FaEnvelope className="w-5 h-5 md:w-6 md:h-6" />
            rapidviaservices@gmail.com
          </Link>

          <Link
            href="https://wa.me/19415367542"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-flex items-center gap-2 text-sm md:text-base lg:text-lg font-semibold text-center lg:text-left"
          >
            <FaWhatsapp className="w-5 h-5 md:w-6 md:h-6" />
            +1 (941) 536-7542
          </Link>
        </div>

        <div className="w-full lg:max-w-2xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4 border-b border-black/10">
              <Disclosure>
                {({ open }) => (
                  <>
                    {/* Botón: jerarquía y foco accesible */}
                    <DisclosureButton className="flex items-center justify-between w-full px-4 py-5 text-left focus:outline-none focus:ring-2 focus:ring-black/10 rounded-sm">
                      <span className="text-base md:text-lg font-semibold leading-snug">
                        {faq.question}
                      </span>
                      {open ? (
                        <BiMinus className="w-5 h-5 md:w-6 md:h-6 text-red-600" />
                      ) : (
                        <BiPlus className="w-5 h-5 md:w-6 md:h-6 text-red-600" />
                      )}
                    </DisclosureButton>

                    {/* Panel: cuerpo con línea base uniforme */}
                    <DisclosurePanel className="px-4 pb-5 text-foreground-accent text-sm md:text-base leading-relaxed">
                      {faq.answer}
                    </DisclosurePanel>
                  </>
                )}
              </Disclosure>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
