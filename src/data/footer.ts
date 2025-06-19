import { IMenuItem, ISocials } from "@/types";

export const footerDetails: {
	subheading: string;
	quickLinks: IMenuItem[];
	email: string;
	telephone: string;
	socials: ISocials;
	Address: string;
	Horario: string;
} = {
	subheading:
		"Envíos seguros a Cuba y ayuda con la documentación para trámites legales confiables en Sarasota.",
	quickLinks: [
		{
			text: "Servicios ",
			url: "/#our-services",
		},
		{
			text: "Preguntas Frecuentes",
			url: "/#faq",
		},
		{
			text: "Rastrear Envío",
			url: "/tracking",
		},
	],
	Address: "3220 17th Street, Sarasota, FL 34235",
	Horario: "Lunes a Viernes — 9:00 AM a 5:00 PM",
	email: "rapidviaservices@gmail.com",
	telephone: "+1 (941) 536-7542",
	socials: {
		// github: 'https://github.com',
		// x: 'https://twitter.com/x',
		//twitter: 'https://twitter.com/Twitter',
		facebook: "https://www.facebook.com/orlen.escalona.2025/",
		// youtube: 'https://youtube.com',
		//linkedin: 'https://www.linkedin.com',
		// threads: 'https://www.threads.net',
		instagram: "https://www.instagram.com/reel/DJwrQejxWCx/",
	},
};
