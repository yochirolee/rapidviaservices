"use client";
import React from "react";
import Image from "next/image";

const About1 = () => {
	return (
		<section className="overflow-hidden   bg-white ">
			<div className="container   mx-auto items-center">
				<div className="flex flex-wrap items-center justify-between ">
					<div className="w-full px-4 lg:w-1/2 xl:w-5/12">
						<div className="mt-10 lg:mt-0">
							<span className="block mb-4 text-lg font-semibold text-primary">
								¿Por qué elegirnos?
							</span>
							<h2 className="mb-5 text-3xl font-bold text-dark  sm:text-[40px]/[48px]">
								Hacemos felices a nuestros clientes con servicios confiables y personalizados.
							</h2>
							<p className="mb-5  text-body-color dark:text-dark-6">
							Con más de 10 años de experiencia al servicio de la comunidad latina en la preparación de documentos para trámites migratorios y servicios notariales. Nos aseguramos de que tus formularios estén completos, en regla y listos para presentar ante las autoridades.
							</p>
							<p className="mb-8  text-body-color dark:text-dark-6">
								Además, ofrecemos envíos seguros y económicos a Cuba, por vía aérea y marítima.
								Garantizamos entrega puntual y seguimiento en cada etapa para su tranquilidad.
							</p>
						</div>
					</div>
					<div className="w-full px-4 lg:w-6/12">
						<div className="flex items-center -mx-3 sm:-mx-4">
							<div className="w-full px-3 sm:px-4 xl:w-1/2">
								<div className="py-3 sm:py-4">
									<Image
										src="/images/servicio-notario-publico.png"
										alt="Traducciones certificadas de documentos para trámites migratorios y legales"
										className="w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] rounded-2xl object-container shadow-lg"
										height={400}
										width={200}
									/>
								</div>
								<div className="py-3 sm:py-4">
									<Image
										src="/images/envio-paquetes-cuba.png"
										alt="Servicio notario publico para trámites legales y notariales"
										className="w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] rounded-2xl object-cover object-top shadow-lg"
										height={300}
										width={300}
									/>
								</div>
							</div>

							<div className="w-full px-3 sm:px-4 xl:w-1/2">
								<div className="relative z-10 my-4">
									<Image
										src="/images/servicio-notario-publico-pasaporte.png"
										alt="Firma de documentos ante notario público, solicitud de pasaportes para la comunidad latina y otros servicios"
										className="w-full rounded-2xl shadow-lg"
										height={400}
										width={400}
									/>
									<span className="absolute -right-7 -bottom-7 z-[-1]">
										<svg
											width={134}
											height={106}
											viewBox="0 0 134 106"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<circle
												cx="1.66667"
												cy={104}
												r="1.66667"
												transform="rotate(-90 1.66667 104)"
												fill="#A51117"
											/>
											<circle
												cx="16.3333"
												cy={104}
												r="1.66667"
												transform="rotate(-90 16.3333 104)"
												fill="#A51117"
											/>
											<circle
												cx={31}
												cy={104}
												r="1.66667"
												transform="rotate(-90 31 104)"
												fill="#A51117"
											/>
											<circle
												cx="45.6667"
												cy={104}
												r="1.66667"
												transform="rotate(-90 45.6667 104)"
												fill="#A51117"
											/>
											<circle
												cx="60.3334"
												cy={104}
												r="1.66667"
												transform="rotate(-90 60.3334 104)"
												fill="#A51117"
											/>
											<circle
												cx="88.6667"
												cy={104}
												r="1.66667"
												transform="rotate(-90 88.6667 104)"
												fill="#A51117"
											/>
											<circle
												cx="117.667"
												cy={104}
												r="1.66667"
												transform="rotate(-90 117.667 104)"
												fill="#A51117"
											/>
											<circle
												cx="74.6667"
												cy={104}
												r="1.66667"
												transform="rotate(-90 74.6667 104)"
												fill="#A51117"
											/>
											<circle
												cx={103}
												cy={104}
												r="1.66667"
												transform="rotate(-90 103 104)"
												fill="#A51117"
											/>
											<circle
												cx={132}
												cy={104}
												r="1.66667"
												transform="rotate(-90 132 104)"
												fill="#A51117"
											/>
											<circle
												cx="1.66667"
												cy="89.3333"
												r="1.66667"
												transform="rotate(-90 1.66667 89.3333)"
												fill="#A51117"
											/>
											<circle
												cx="16.3333"
												cy="89.3333"
												r="1.66667"
												transform="rotate(-90 16.3333 89.3333)"
												fill="#A51117"
											/>
											<circle
												cx={31}
												cy="89.3333"
												r="1.66667"
												transform="rotate(-90 31 89.3333)"
												fill="#A51117"
											/>
											<circle
												cx="45.6667"
												cy="89.3333"
												r="1.66667"
												transform="rotate(-90 45.6667 89.3333)"
												fill="#A51117"
											/>
											<circle
												cx="60.3333"
												cy="89.3338"
												r="1.66667"
												transform="rotate(-90 60.3333 89.3338)"
												fill="#A51117"
											/>
											<circle
												cx="88.6667"
												cy="89.3338"
												r="1.66667"
												transform="rotate(-90 88.6667 89.3338)"
												fill="#A51117"
											/>
											<circle
												cx="117.667"
												cy="89.3338"
												r="1.66667"
												transform="rotate(-90 117.667 89.3338)"
												fill="#A51117"
											/>
											<circle
												cx="74.6667"
												cy="89.3338"
												r="1.66667"
												transform="rotate(-90 74.6667 89.3338)"
												fill="#A51117"
											/>
											<circle
												cx={103}
												cy="89.3338"
												r="1.66667"
												transform="rotate(-90 103 89.3338)"
												fill="#A51117"
											/>
											<circle
												cx={132}
												cy="89.3338"
												r="1.66667"
												transform="rotate(-90 132 89.3338)"
												fill="#A51117"
											/>
											<circle
												cx="1.66667"
												cy="74.6673"
												r="1.66667"
												transform="rotate(-90 1.66667 74.6673)"
												fill="#A51117"
											/>
											<circle
												cx="1.66667"
												cy="31.0003"
												r="1.66667"
												transform="rotate(-90 1.66667 31.0003)"
												fill="#A51117"
											/>
											<circle
												cx="16.3333"
												cy="74.6668"
												r="1.66667"
												transform="rotate(-90 16.3333 74.6668)"
												fill="#A51117"
											/>
											<circle
												cx="16.3333"
												cy="31.0003"
												r="1.66667"
												transform="rotate(-90 16.3333 31.0003)"
												fill="#A51117"
											/>
											<circle
												cx={31}
												cy="74.6668"
												r="1.66667"
												transform="rotate(-90 31 74.6668)"
												fill="#A51117"
											/>
											<circle
												cx={31}
												cy="31.0003"
												r="1.66667"
												transform="rotate(-90 31 31.0003)"
												fill="#A51117"
											/>
											<circle
												cx="45.6667"
												cy="74.6668"
												r="1.66667"
												transform="rotate(-90 45.6667 74.6668)"
												fill="#A51117"
											/>
											<circle
												cx="45.6667"
												cy="31.0003"
												r="1.66667"
												transform="rotate(-90 45.6667 31.0003)"
												fill="#A51117"
											/>
											<circle
												cx="60.3333"
												cy="74.6668"
												r="1.66667"
												transform="rotate(-90 60.3333 74.6668)"
												fill="#A51117"
											/>
											<circle
												cx="60.3333"
												cy="30.9998"
												r="1.66667"
												transform="rotate(-90 60.3333 30.9998)"
												fill="#A51117"
											/>
											<circle
												cx="88.6667"
												cy="74.6668"
												r="1.66667"
												transform="rotate(-90 88.6667 74.6668)"
												fill="#A51117"
											/>
											<circle
												cx="88.6667"
												cy="30.9998"
												r="1.66667"
												transform="rotate(-90 88.6667 30.9998)"
												fill="#A51117"
											/>
											<circle
												cx="117.667"
												cy="74.6668"
												r="1.66667"
												transform="rotate(-90 117.667 74.6668)"
												fill="#A51117"
											/>
											<circle
												cx="117.667"
												cy="30.9998"
												r="1.66667"
												transform="rotate(-90 117.667 30.9998)"
												fill="#A51117"
											/>
											<circle
												cx="74.6667"
												cy="74.6668"
												r="1.66667"
												transform="rotate(-90 74.6667 74.6668)"
												fill="#A51117"
											/>
											<circle
												cx="74.6667"
												cy="30.9998"
												r="1.66667"
												transform="rotate(-90 74.6667 30.9998)"
												fill="#A51117"
											/>
											<circle
												cx={103}
												cy="74.6668"
												r="1.66667"
												transform="rotate(-90 103 74.6668)"
												fill="#A51117"
											/>
											<circle
												cx={103}
												cy="30.9998"
												r="1.66667"
												transform="rotate(-90 103 30.9998)"
												fill="#A51117"
											/>
											<circle
												cx={132}
												cy="74.6668"
												r="1.66667"
												transform="rotate(-90 132 74.6668)"
												fill="#A51117"
											/>
											<circle
												cx={132}
												cy="30.9998"
												r="1.66667"
												transform="rotate(-90 132 30.9998)"
												fill="#A51117"
											/>
											<circle
												cx="1.66667"
												cy="60.0003"
												r="1.66667"
												transform="rotate(-90 1.66667 60.0003)"
												fill="#A51117"
											/>
											<circle
												cx="1.66667"
												cy="16.3333"
												r="1.66667"
												transform="rotate(-90 1.66667 16.3333)"
												fill="#A51117"
											/>
											<circle
												cx="16.3333"
												cy="60.0003"
												r="1.66667"
												transform="rotate(-90 16.3333 60.0003)"
												fill="#A51117"
											/>
											<circle
												cx="16.3333"
												cy="16.3333"
												r="1.66667"
												transform="rotate(-90 16.3333 16.3333)"
												fill="#A51117"
											/>
											<circle
												cx={31}
												cy="60.0003"
												r="1.66667"
												transform="rotate(-90 31 60.0003)"
												fill="#A51117"
											/>
											<circle
												cx={31}
												cy="16.3333"
												r="1.66667"
												transform="rotate(-90 31 16.3333)"
												fill="#A51117"
											/>
											<circle
												cx="45.6667"
												cy="60.0003"
												r="1.66667"
												transform="rotate(-90 45.6667 60.0003)"
												fill="#A51117"
											/>
											<circle
												cx="45.6667"
												cy="16.3333"
												r="1.66667"
												transform="rotate(-90 45.6667 16.3333)"
												fill="#A51117"
											/>
											<circle
												cx="60.3333"
												cy="60.0003"
												r="1.66667"
												transform="rotate(-90 60.3333 60.0003)"
												fill="#A51117"
											/>
											<circle
												cx="60.3333"
												cy="16.3333"
												r="1.66667"
												transform="rotate(-90 60.3333 16.3333)"
												fill="#A51117"
											/>
											<circle
												cx="88.6667"
												cy="60.0003"
												r="1.66667"
												transform="rotate(-90 88.6667 60.0003)"
												fill="#A51117"
											/>
											<circle
												cx="88.6667"
												cy="16.3333"
												r="1.66667"
												transform="rotate(-90 88.6667 16.3333)"
												fill="#A51117"
											/>
											<circle
												cx="117.667"
												cy="60.0003"
												r="1.66667"
												transform="rotate(-90 117.667 60.0003)"
												fill="#A51117 "
											/>
											<circle
												cx="117.667"
												cy="16.3333"
												r="1.66667"
												transform="rotate(-90 117.667 16.3333)"
												fill="#A51117"
											/>
											<circle
												cx="74.6667"
												cy="60.0003"
												r="1.66667"
												transform="rotate(-90 74.6667 60.0003)"
												fill="#A51117"
											/>
											<circle
												cx="74.6667"
												cy="16.3333"
												r="1.66667"
												transform="rotate(-90 74.6667 16.3333)"
												fill="#A51117"
											/>
											<circle
												cx={103}
												cy="60.0003"
												r="1.66667"
												transform="rotate(-90 103 60.0003)"
												fill="#A51117"
											/>
											<circle
												cx={103}
												cy="16.3333"
												r="1.66667"
												transform="rotate(-90 103 16.3333)"
												fill="#A51117"
											/>
											<circle
												cx={132}
												cy="60.0003"
												r="1.66667"
												transform="rotate(-90 132 60.0003)"
												fill="#A51117"
											/>
											<circle
												cx={132}
												cy="16.3333"
												r="1.66667"
												transform="rotate(-90 132 16.3333)"
												fill="#A51117"
											/>
											<circle
												cx="1.66667"
												cy="45.3333"
												r="1.66667"
												transform="rotate(-90 1.66667 45.3333)"
												fill="#A51117"
											/>
											<circle
												cx="1.66667"
												cy="1.66683"
												r="1.66667"
												transform="rotate(-90 1.66667 1.66683)"
												fill="#A51117"
											/>
											<circle
												cx="16.3333"
												cy="45.3333"
												r="1.66667"
												transform="rotate(-90 16.3333 45.3333)"
												fill="#A51117"
											/>
											<circle
												cx="16.3333"
												cy="1.66683"
												r="1.66667"
												transform="rotate(-90 16.3333 1.66683)"
												fill="#A51117"
											/>
											<circle
												cx={31}
												cy="45.3333"
												r="1.66667"
												transform="rotate(-90 31 45.3333)"
												fill="#A51117"
											/>
											<circle
												cx={31}
												cy="1.66683"
												r="1.66667"
												transform="rotate(-90 31 1.66683)"
												fill="#A51117"
											/>
											<circle
												cx="45.6667"
												cy="45.3333"
												r="1.66667"
												transform="rotate(-90 45.6667 45.3333)"
												fill="#A51117"
											/>
											<circle
												cx="45.6667"
												cy="1.66683"
												r="1.66667"
												transform="rotate(-90 45.6667 1.66683)"
												fill="#A51117"
											/>
											<circle
												cx="60.3333"
												cy="45.3338"
												r="1.66667"
												transform="rotate(-90 60.3333 45.3338)"
												fill="#A51117"
											/>
											<circle
												cx="60.3333"
												cy="1.66683"
												r="1.66667"
												transform="rotate(-90 60.3333 1.66683)"
												fill="#A51117"
											/>
											<circle
												cx="88.6667"
												cy="45.3338"
												r="1.66667"
												transform="rotate(-90 88.6667 45.3338)"
												fill="#A51117"
											/>
											<circle
												cx="88.6667"
												cy="1.66683"
												r="1.66667"
												transform="rotate(-90 88.6667 1.66683)"
												fill="#A51117"
											/>
											<circle
												cx="117.667"
												cy="45.3338"
												r="1.66667"
												transform="rotate(-90 117.667 45.3338)"
												fill="#A51117"
											/>
											<circle
												cx="117.667"
												cy="1.66683"
												r="1.66667"
												transform="rotate(-90 117.667 1.66683)"
												fill="#A51117"
											/>
											<circle
												cx="74.6667"
												cy="45.3338"
												r="1.66667"
												transform="rotate(-90 74.6667 45.3338)"
												fill="#A51117"
											/>
											<circle
												cx="74.6667"
												cy="1.66683"
												r="1.66667"
												transform="rotate(-90 74.6667 1.66683)"
												fill="#A51117"
											/>
											<circle
												cx={103}
												cy="45.3338"
												r="1.66667"
												transform="rotate(-90 103 45.3338)"
												fill="#A51117"
											/>
											<circle
												cx={103}
												cy="1.66683"
												r="1.66667"
												transform="rotate(-90 103 1.66683)"
												fill="#A51117"
											/>
											<circle
												cx={132}
												cy="45.3338"
												r="1.66667"
												transform="rotate(-90 132 45.3338)"
												fill="#A51117"
											/>
											<circle
												cx={132}
												cy="1.66683"
												r="1.66667"
												transform="rotate(-90 132 1.66683)"
												fill="#A51117"
											/>
										</svg>
									</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About1;
