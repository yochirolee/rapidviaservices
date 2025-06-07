"use client";
import React from "react";

interface ServiceCardProps {
	icon: React.ReactNode;
	title: string;
	details: string;
}

const OurServices = () => {
	return (
		<section id="our-services" className="relative flex items-center justify-center ">
			<div className="absolute left-0 top-0 bottom-0 -z-10 w-full">
				<div className="absolute inset-0 h-full w-full bg-red-800 bg-gradient-to-r from-gray-200 to-gray-300  bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)]"></div>
			</div>
			<div className="container mx-auto">
				<div className=" flex flex-wrap">
					<div className="w-full px-4">
						<div className="mx-auto mb-12 max-w-[510px] text-center lg:mb-20">
							<span className="mb-2 block text-lg font-semibold text-primary"></span>
							<h1 className="mb-3 text-3xl font-bold leading-[1.2]   sm:text-4xl md:text-[40px]">
								Servicios que ofrecemos
							</h1>
							<p className=" text-body-color ">
								Ofrecemos servicios de inmigración confiables y personalizados para ayudarte con tus
								trámites legales en EE.UU., incluyendo asilo político, ajuste de estatus, ciudadanía
								americana y más.
							</p>
						</div>
					</div>
				</div>

				<div className="flex flex-wrap">
					<ServiceCard
						title="Asilo político"
						details="Asistencia profesional en la preparación y presentación de solicitudes de asilo político en Estados Unidos."
						icon={
							<svg
								aria-label="Icono de asilo político"
								width="36"
								height="36"
								viewBox="0 0 36 36"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<title>Icono de asilo político</title>
								<path
									fillRule="evenodd"
									clipRule="evenodd"
									d="M8 4C8 2.89543 8.89543 2 10 2H22L30 10V30C30 31.1046 29.1046 32 28 32H10C8.89543 32 8 31.1046 8 30V4ZM21 3.5V10H27.5L21 3.5ZM12 18H24V20H12V18ZM12 24H24V26H12V24Z"
									fill="white"
								/>
							</svg>
						}
					/>
					<ServiceCard
						title="Ajuste de estatus"
						details="Gestión completa para solicitar la residencia permanente (Green Card) a través del ajuste de estatus migratorio."
						icon={
							<svg
								aria-label="Icono de Ajuste de estatus"
								width="36"
								height="36"
								viewBox="0 0 36 36"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<title>Icono de Ajuste de estatus</title>
								<path
									fillRule="evenodd"
									clipRule="evenodd"
									d="M6 6C4.89543 6 4 6.89543 4 8V28C4 29.1046 4.89543 30 6 30H30C31.1046 30 32 29.1046 32 28V8C32 6.89543 31.1046 6 30 6H6ZM8 10H28V12H8V10ZM8 16H20V18H8V16ZM8 22H16V24H8V22Z"
									fill="white"
								/>
							</svg>
						}
					/>
					<ServiceCard
						title="Permisos de trabajo"
						details="Tramitamos peticiones laborales para inmigrantes que buscan oportunidades de empleo legal en EE.UU."
						icon={
							<svg
								aria-label="Icono de Permisos de trabajo"
								width="36"
								height="36"
								viewBox="0 0 36 36"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<title>Icono de Permisos de trabajo</title>
								<path
									fillRule="evenodd"
									clipRule="evenodd"
									d="M6 6C4.89543 6 4 6.89543 4 8V28C4 29.1046 4.89543 30 6 30H30C31.1046 30 32 29.1046 32 28V8C32 6.89543 31.1046 6 30 6H6ZM12 11C13.6569 11 15 12.3431 15 14C15 15.6569 13.6569 17 12 17C10.3431 17 9 15.6569 9 14C9 12.3431 10.3431 11 12 11ZM9 22C9 19.7909 10.7909 18 13 18H19C21.2091 18 23 19.7909 23 22V24H9V22ZM26 17H28V19H26V17ZM26 21H28V23H26V21ZM26 25H28V27H26V25Z"
									fill="white"
								/>
							</svg>
						}
					/>
					<ServiceCard
						title="Peticiones de reunificación familiar"
						details="Ayuda en el proceso de petición familiar para reunir a familiares directos en Estados Unidos."
						icon={
							<svg
								aria-label="Icono de Peticiones de reunificación familiar"
								width="36"
								height="36"
								viewBox="0 0 36 36"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<title>Icono de Peticiones de reunificación familiar</title>
								<path
									fillRule="evenodd"
									clipRule="evenodd"
									d="M18 2C18.5523 2 19 2.44772 19 3V5H26V7H23.5L28.5 16H33V18H25C25 20.7614 22.7614 23 20 23V27H24V30H12V27H16V23C13.2386 23 11 20.7614 11 18H3V16H7.5L12.5 7H10V5H17V3C17 2.44772 17.4477 2 18 2ZM14.5 16C14.5 17.3807 15.6193 18.5 17 18.5C18.3807 18.5 19.5 17.3807 19.5 16H14.5ZM21.5 16H26.5C26.5 17.933 25.433 19.5 24 19.5C22.567 19.5 21.5 17.933 21.5 16ZM9.5 16H14.5C14.5 17.933 13.433 19.5 12 19.5C10.567 19.5 9.5 17.933 9.5 16Z"
									fill="white"
								/>
							</svg>
						}
					/>
					<ServiceCard
						title="Ciudadanía"
						details="Preparación de la solicitud de ciudadanía americana y apoyo en todo el proceso de naturalización."
						icon={
							<svg
								aria-label="Icono de Ciudadanía"
								width="36"
								height="36"
								viewBox="0 0 36 36"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<title>Icono de Ciudadanía</title>
								<path
									fillRule="evenodd"
									clipRule="evenodd"
									d="M18 2L30 7V16C30 25.5 24 30 18 32C12 30 6 25.5 6 16V7L18 2ZM20.1 11.3L22 14.8L18 12.9L14 14.8L15.9 11.3L13 9H16.5L18 5.5L19.5 9H23L20.1 11.3Z"
									fill="white"
								/>
							</svg>
						}
					/>
					<ServiceCard
						title="Renovación de Green Card"
						details="Gestión para renovar tu residencia permanente de forma rápida y segura."
						icon={
							<svg
								aria-label="Icono de Renovación de Green Card"
								width="36"
								height="36"
								viewBox="0 0 36 36"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<title>Icono de Renovación de Green Card</title>
								<path
									fillRule="evenodd"
									clipRule="evenodd"
									d="M6 6C4.89543 6 4 6.89543 4 8V28C4 29.1046 4.89543 30 6 30H30C31.1046 30 32 29.1046 32 28V8C32 6.89543 31.1046 6 30 6H6ZM8 10H28V14H8V10ZM12 18C13.6569 18 15 16.6569 15 15C15 13.3431 13.6569 12 12 12C10.3431 12 9 13.3431 9 15C9 16.6569 10.3431 18 12 18ZM8 22H22V26H8V22Z"
									fill="white"
								/>
							</svg>
						}
					/>
				</div>
			</div>
		</section>
	);
};

export default OurServices;

const ServiceCard = ({ icon, title, details }: ServiceCardProps) => {
	return (
		<>
			<div className="w-full px-4 md:w-1/2 lg:w-1/3">
				<div className="mb-9 rounded-[20px] bg-white p-10 shadow-2 hover:shadow-lg  md:px-7 xl:px-10">
					<div className="mb-8 flex h-[70px] w-[70px] items-center justify-center rounded-2xl bg-primary">
						{icon}
					</div>
					<h4 className="mb-[14px] text-2xl font-semibold text-dark ">{title}</h4>
					<p className="text-body-color ">{details}</p>
				</div>
			</div>
		</>
	);
};
