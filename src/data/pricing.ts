import { IPricing } from "@/types";

export const tiers: IPricing[] = [
    {
        name: 'Servicios Notariales',
        price: 99,
        features: [
            'Asilo político',
            'Ajuste de estatus (Residencia)',
            'Permisos de trabajo',
            'Peticiones de reunificación familiar',
            'Ciudadanía',
            'Más',
        ],
    },
    {
        name: 'Traduccion de documentos',
        price: 99,
        features: [
            'Partidas de nacimiento, matrimonio y defunción',
            'Poderes notariales y documentos legales',
            'Formularios de inmigración',
            'Mociones y peticiones',
            'Más',
        ],
    },
    {
        name: 'Envío de paquetes a Cuba',
        price: 2.50,
        features: [
            'Miscelaneas',
            'Duraderos',
            'Medicamntos',
            'Alimentos',
            'Regalos',
            'Más',
        ],
    },
]