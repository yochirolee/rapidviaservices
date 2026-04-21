import Link from "next/link";
import Image from "next/image";
import { siteDetails } from "@/data/siteDetails";
import { footerDetails } from "@/data/footer";
import { getPlatformIconByName } from "@/utils";

const footerTextLinkClass =
	"inline text-left text-sm font-normal text-primary underline-offset-4 transition-colors hover:underline md:text-[15px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-sm";

const footerNavLinkClass =
	"inline text-sm text-muted-foreground underline-offset-4 transition-colors hover:text-foreground hover:underline md:text-[15px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-sm";

const footerIconLinkClass =
	"inline-flex size-9 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-muted/50 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background";

export default function Footer(): JSX.Element {
	return (
		<footer className="dark bg-background text-foreground">
			<div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-10 px-6 py-12 md:grid-cols-3 md:gap-12">
				<div className="space-y-3">
					<Link href="/" className="flex items-center gap-3">
						<Image
							src="/images/rapidvia-services-tramites-notariales-logo.png"
							alt="RapidViaServices Logo"
							width={48}
							height={48}
							className="h-10 w-10 md:h-12 md:w-12"
						/>
						<h3 className="text-lg font-semibold leading-tight text-foreground md:text-xl">{siteDetails.siteName}</h3>
					</Link>
					<p className="text-sm leading-relaxed text-muted-foreground md:text-base">{footerDetails.subheading}</p>
				</div>

				<div>
					<h4 className="mb-4 text-base font-semibold text-foreground md:text-lg">Enlaces rápidos</h4>
					<ul className="space-y-2 text-sm md:text-[15px]">
						{footerDetails.quickLinks.map((link) => (
							<li key={link.text}>
								<Link href={link.url} className={footerNavLinkClass}>
									{link.text}
								</Link>
							</li>
						))}
					</ul>
				</div>

				<div>
					<h4 className="mb-4 text-base font-semibold text-foreground md:text-lg">Contáctanos</h4>
					<div className="flex flex-col gap-2 text-sm text-muted-foreground md:text-[15px]">
						{footerDetails.Address ? (
							<a
								href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(footerDetails.Address)}`}
								target="_blank"
								rel="noopener noreferrer"
								className={footerTextLinkClass}
							>
								Dirección: {footerDetails.Address}
							</a>
						) : null}
						{footerDetails.Horario ? <span>Horario: {footerDetails.Horario}</span> : null}
						{footerDetails.email ? (
							<a href={`mailto:${footerDetails.email}`} className={`${footerTextLinkClass} whitespace-nowrap`}>
								Email: {footerDetails.email}
							</a>
						) : null}
						{footerDetails.telephone ? (
							<a href={`tel:${footerDetails.telephone}`} className={footerTextLinkClass}>
								Tel: {footerDetails.telephone}
							</a>
						) : null}
					</div>

					{footerDetails.socials ? (
						<div className="mt-5 flex flex-wrap items-center gap-3">
							{Object.keys(footerDetails.socials).map((platformName) => {
								const url = footerDetails.socials[platformName];
								if (!platformName || !url) return null;
								return (
									<Link
										key={platformName}
										href={url}
										target="_blank"
										rel="noopener noreferrer"
										className={footerIconLinkClass}
										aria-label={platformName}
									>
										{getPlatformIconByName(platformName)}
									</Link>
								);
							})}
						</div>
					) : null}
				</div>
			</div>

			<div className="bg-card/40 px-6 py-6 text-center text-xs leading-relaxed text-muted-foreground md:text-sm">
				Copyright © {new Date().getFullYear()} {siteDetails.siteName}. Todos los derechos reservados. · Desarrollado por Valelee LLC
			</div>
		</footer>
	);
}
