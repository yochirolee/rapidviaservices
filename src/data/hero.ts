export const heroDetails = {
	heading: "Documentos legales y envío de paquetes a Cuba desde EE.UU.",
	/** Word or phrase in `heading` to mark with hand-drawn primary underline */
	headingHighlight: "Cuba",
	subheading:
		"En RapidVia Services, tu vía rápida y segura, te asistimos en la preparación de documentos para trámites legales y migratorios. También realizamos envío de paquetes a Cuba con seguimiento hasta la puerta de tu hogar.",
	subheading2: "No somos abogados y no damos asesoría",
	centerImageSrc: "/images/rapidvia-services1.webp",
	/** Small floating tags by the portrait (travel-style hero) */
	heroTags: {
		left: {
			title: "Trámites de confianza",
			subtitle: "Notaría, migración y traducciones",
		},
		right: {
			label: "Sarasota, FL",
		},
		/** Overlaps the red disc on desktop; full card stacked on mobile */
		middle: {
			label: "Envíos a Cuba",
			subtitle: "Aéreo, marítimo y seguimiento hasta tu destino",
		},
	},
	/** Row under CTAs — icon + title + subtitle */
	featureStrip: {
		title: "+10 años sirviendo a la comunidad",
		subtitle: "Documentos legales, traducciones certificadas y envíos a Cuba",
	},
	primaryCta: { label: "Seguir envío", href: "/tracking" as const },
	whatsapp: { label: "WhatsApp", href: "https://wa.me/+19415367542" as const },
	/** Physical office — used for Google Maps link in hero */
	office: {
		address: "3220 17th Street, Sarasota, FL 34235",
	},
};
