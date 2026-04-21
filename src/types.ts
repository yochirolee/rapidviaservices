export interface IMenuItem {
	text: string;
	url: string;
}

export const BENEFIT_SHOWCASE_BANDS = ["mustard", "sand", "peach"] as const;

export type BenefitShowcaseBand = (typeof BENEFIT_SHOWCASE_BANDS)[number];

export interface IBenefitCta {
	label: string;
	href: string;
	/** Defaults to false; set true for WhatsApp / external URLs */
	external?: boolean;
}

/** Full-bleed band + white “form” card layout (shared by all benefit sections) */
export interface IBenefit {
	title: string;
	description: string;
	imageSrc: string;
	imageAlt?: string;
	bullets: IBenefitBullet[];
	eyebrow: string;
	band: BenefitShowcaseBand;
	scriptLead?: string;
	/** Substring of `title` to underline with primary stroke */
	titleHighlight?: string;
	cta?: IBenefitCta;
}

export interface IBenefitBullet {
	title: string;
	description: string;
	icon: JSX.Element;
}

export interface IPricing {
	name: string;
	price: number | string;
	features: string[];
}

export interface IFAQ {
	question: string;
	answer: string;
}

export interface ITestimonial {
	name: string;
	role: string;
	message: string;
	avatar: string;	
	rating: number;
}


export interface IStats {
	title: string;
	icon: JSX.Element;
	description: string;
}

export interface ISocials {
	facebook?: string;
	github?: string;
	instagram?: string;
	linkedin?: string;
	threads?: string;
	twitter?: string;
	youtube?: string;
	x?: string;
	[key: string]: string | undefined;
}

export interface ITrackingInvoice {
	agency: string;
	invoiceId: string;
	/** Present on some API payloads */
	order_id?: string;
	province?: string;
	city?: string;

	parcels: ITrackingParcel[];
}

export interface ITrackingParcel {
	id: string;
	hbl: string;
	description: string;
	events: ITrackingEvent[];
}
export interface ITrackingEvent {
	id: string;
	description: string;
	location: string;
	updatedAt: string;
	locations: ITrackingLocation;
}

export interface ITrackingLocation {
	id: string;
	name: string;
}
