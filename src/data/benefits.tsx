import { FiFileText, FiFile, FiCreditCard, FiCheckCircle, FiHeart, FiTruck, FiMapPin, FiUserCheck} from "react-icons/fi";

import { heroDetails } from "@/data/hero";
import { IBenefit } from "@/types";

export const benefits: IBenefit[] = [
    {
        title: "Traducciones Certificadas y Profesionales",
        eyebrow: "Traducciones certificadas",
        band: "sand",
        scriptLead: "Precisión que las instituciones reconocen.",
        titleHighlight: "Profesionales",
        description:
            "Ofrecemos traducciones certificadas para trámites migratorios y legales en EE.UU., con formato válido para presentación ante autoridades.",
        imageAlt: "Traducciones certificadas para documentos migratorios y legales",
        cta: {
            label: "Solicita una cotización",
            href: heroDetails.whatsapp.href,
            external: true,
        },
        bullets: [
            {
                title: "Partidas de nacimiento, matrimonio y defunción",
                description: "Traducción certificada de actas civiles para trámites migratorios, peticiones familiares, ciudadanía y otros procesos legales en EE.UU. Aceptadas por USCIS y otras instituciones.",
                icon: <FiFileText size={26} />
            },
            {
                title: "Poderes notariales y documentos legales",
                description: "Traducimos poderes notariales, contratos, declaraciones juradas y documentos legales para su presentación en procesos judiciales, notariales o migratorios, con formato válido y certificación.",
                icon: <FiFile size={26} />
            },
            {
                title: "Cartas oficiales, identificaciones y formularios gubernamentales",
                description: "Traducción precisa de cartas de autoridades, licencias, identificaciones, y formularios como el I-130, I-485, entre otros. Entregamos en el formato requerido por las entidades correspondientes.",
                icon: <FiCreditCard size={26} />
            }
        ],
        imageSrc: "/images/traducciones-certificadas.webp"       
    },
    {
        title: "¿Necesitas un Notario Público?",
        eyebrow: "Servicio notarial",
        band: "mustard",
        scriptLead: "Te ayudamos a legalizar tus documentos.",
        titleHighlight: "Notario Público?",
        description:
            "Notario confiable con experiencia en trámites migratorios y civiles. Brindamos servicios rápidos, seguros y accesibles para todos.",
        imageAlt: "Servicio de notario público en Sarasota — RapidVia Services",
        bullets: [
            {
                title: "Autenticación de firmas y documentos legales",
                description: "Notarización de contratos, declaraciones juradas, formularios de inmigración y poderes. Documentos listos para uso legal inmediato en EE.UU.",
                icon: <FiCheckCircle size={26} />
            },
            {
                title: "Poderes notariales para trámites en EE.UU. y Cuba",
                description: "Redacción y notarización de poderes específicos o generales, válidos para asuntos legales y migratorios tanto dentro como fuera del país.",
                icon: <FiFileText size={26} />
            },
            {
                title: "Servicios de ministro de bodas",
                description: "Ceremonias de bodas legales con ministro autorizado y documentación completa.",
                icon: <FiHeart size={26} />
            }
        ],
        imageSrc: "/images/servicio-notario-publico-sarasota.webp"
    },
    {
        title: "Envío de Paquetes a Cuba",
        eyebrow: "Envíos internacionales",
        band: "peach",
        scriptLead: "De tu puerta en EE.UU. hasta la de tu familia.",
        titleHighlight: "Cuba",
        description:
            "Ofrecemos envíos rápidos, seguros y económicos a toda Cuba. Ya sea por vía aérea o marítima, llevamos tus cajas, alimentos, medicinas y regalos directo a tus seres queridos.",
        imageAlt: "Envío de paquetes a Cuba por vía aérea y marítima",
        cta: {
            label: "Rastrea tu envío",
            href: "/tracking",
            external: false,
        },
        bullets: [
            {
                title: "Envíos aéreos y marítimos",
                description: "Opciones de transporte para todo tipo de paquetes: ropa, comida, medicinas y más.",
                icon: <FiTruck size={26} />
            },
            {
                title: "Cobertura en toda Cuba",
                description: "Envíos a cualquier provincia o municipio en Cuba, sin importar la distancia.",
                icon: <FiMapPin size={26} />
            },
            {
                title: "Atención personalizada y seguimiento",
                description: "Consulta por WhatsApp, rastreo del paquete y asistencia durante todo el proceso.",
                icon: <FiUserCheck size={26} />
            }
        ],
        imageSrc: "/images/envio-paquetes-cuba-aereo-maritimo.webp"
    },
]