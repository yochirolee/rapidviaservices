import { ITestimonial } from "@/types";
import { siteDetails } from "./siteDetails";

export const testimonials: ITestimonial[] = [
    {
        name: 'George Waggle',
        role: '',
        message: `${siteDetails.siteName} brinda un Excelente servicio. Me ayudaron con todo el proceso de renovación de mi Green Card de forma rápida y clara. Muy profesionales y amables. Los recomiendo al 100%.`,
        avatar: '/images/testimonio-1.webp',
    },
    {
        name: 'Leidi Dominguez',
        role: '',
        message: `Muy contenta con ${siteDetails.siteName}, mandé un paquete a mi mamá en La Habana y llegó en perfectas condiciones y a tiempo. Me dieron seguimiento durante todo el proceso. ¡Muy confiables`,
        avatar: '/images/testimonio-2.webp',
    },
    {
        name: 'Adairis Pupo',
        role: '',
        message: `${siteDetails.siteName} recomendado, hice la traducción certificada de mis documentos y la notaria me orientó con mucho detalle. Todo fue rápido y seguro. Excelente atención al cliente.`,
        avatar: '/images/testimonio-3.webp',
    },
];