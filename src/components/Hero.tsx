import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink, MapPin, MessageCircle, Search, ShieldCheck, Truck } from "lucide-react";

import { renderHeadingWithHighlight } from "@/components/HandDrawnUnderline";
import { Button } from "@/components/ui/button";
import { heroDetails } from "@/data/hero";
import { cn } from "@/lib/utils";

function HeroContourDecor({ className }: { className?: string }): JSX.Element {
   return (
      <svg className={cn("pointer-events-none text-primary", className)} viewBox="0 0 420 420" fill="none" aria-hidden>
         <g stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.9" opacity="0.5">
            <path d="M-20 280c80-28 160-22 240-8s160 28 240 4" />
            <path d="M-40 220c90-35 190-30 280-12s170 38 260 14" />
            <path d="M-10 340c70-20 150-18 230-6s170 24 250 8" />
            <path d="M0 180c100-40 200-32 300-10s180 42 280 16" />
            <path d="M20 380c60-15 130-14 200-4s140 18 210 6" />
            <path d="M-30 140c110-45 230-38 340-14s190 48 290 18" />
         </g>
      </svg>
   );
}

function googleMapsSearchUrl(query: string): string {
	return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
}

function HeroFloatingInfoCard({
	icon,
	title,
	subtitle,
}: {
	icon: ReactNode;
	title: string;
	subtitle: string;
}): JSX.Element {
	return (
		<div className="w-full  rounded-xl border border-border/45 bg-card/98 p-3 shadow-[0_16px_40px_-12px_rgb(15_23_42/0.2)] backdrop-blur-sm">
			<div className="flex items-center gap-2.5">
				{icon}
				<div className="min-w-0 text-left">
					<p className="text-xs font-bold leading-tight text-foreground">{title}</p>
					<p className="mt-0.5 text-[11px] leading-snug text-muted-foreground">{subtitle}</p>
				</div>
			</div>
		</div>
	);
}

export default function Hero(): JSX.Element {
	const { heading, headingHighlight, subheading, subheading2, centerImageSrc, heroTags, office } = heroDetails;
	const mapsHref = googleMapsSearchUrl(office.address);

   return (
      <section
         id="hero"
         className="relative overflow-x-visible bg-background px-5 pt-30 md:pb-24 md:pt-28 lg:pb-28 lg:pt-32"
      >
         <div className="pointer-events-none absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-background" />
         </div>

         <div className="container relative mx-auto max-w-7xl">
            <div className="grid items-center gap-16 overflow-visible md:gap-20 lg:grid-cols-[1fr_1.12fr] lg:gap-x-20 lg:gap-y-14 xl:gap-x-28 xl:gap-y-16">
               <div className="flex flex-col space-y-8 text-center lg:max-w-xl lg:text-left">
                  <div className="space-y-5">
                     <h1 className="text-balance text-4xl font-bold leading-[1.08] tracking-tight text-foreground sm:text-5xl md:text-[2.75rem] lg:text-[3.15rem] xl:text-[3.35rem]">
                        {renderHeadingWithHighlight(heading, headingHighlight)}
                     </h1>
                     <div className="mx-auto max-w-xl space-y-3 text-base leading-relaxed text-muted-foreground md:text-lg lg:mx-0">
                        <p>{subheading}</p>
                        <p className="text-sm text-muted-foreground/90 md:text-base">{subheading2}</p>
                     </div>
                  </div>

                  <div className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:flex-wrap sm:justify-center">
                     <Button
                        size="lg"
                        className="h-12 min-w-44 rounded-full border border-foreground/10 bg-foreground px-8 text-base font-semibold text-background shadow-[0_12px_28px_-8px_rgb(15_23_42/0.35)] hover:bg-foreground/90"
                        asChild
                     >
                        <Link href={heroDetails.primaryCta.href} className="inline-flex items-center gap-2">
                           <Search className="h-5 w-5 shrink-0 opacity-90" aria-hidden />
                           {heroDetails.primaryCta.label}
                        </Link>
                     </Button>

                     <Button
                        variant="outline"
                        size="lg"
                        className="h-12 min-w-44 rounded-full border-2 border-foreground/20 bg-background px-8 text-base font-semibold text-foreground shadow-sm hover:bg-muted/40"
                        asChild
                     >
                        <Link
                           href={heroDetails.whatsapp.href}
                           target="_blank"
                           rel="noopener noreferrer"
                           className="inline-flex items-center gap-2 "
                        >
                           <MessageCircle className="h-5 w-5 shrink-0 text-primary" aria-hidden />
                           {heroDetails.whatsapp.label}
                        </Link>
                     </Button>
                  </div>

                  <div className="mx-auto  border-t border-border/60 pt-8 text-center sm:max-w-none w-full">
                     <a
                        href={mapsHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex max-w-full items-start gap-3 rounded-xl py-1 text-left outline-none transition-colors hover:text-primary focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                        aria-label={`Abrir ${office.address} en Google Maps`}
                     >
                        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/12 text-primary transition-colors group-hover:bg-primary/18">
                           <MapPin className="h-5 w-5" aria-hidden />
                        </span>
                        <span className="min-w-0 pt-0.5">
                           <span className="block text-sm font-semibold leading-snug text-foreground group-hover:text-primary">
                              {office.address}
                           </span>
                           <span className="mt-1 inline-flex items-center gap-1 text-xs font-medium text-primary">
                              Ver en Google Maps
                              <ExternalLink className="h-3.5 w-3.5 opacity-80" aria-hidden />
                           </span>
                        </span>
                     </a>
                  </div>
               </div>

               <div className="relative mx-auto w-full min-w-0 max-w-[min(100%,520px)] overflow-visible pt-10 pb-12 sm:pt-12 sm:pb-14 lg:mx-0 lg:ml-auto lg:max-w-none lg:justify-self-stretch lg:pb-32">
                  <HeroContourDecor className="absolute -right-4 top-1/2 hidden h-[min(105%,560px)] w-[min(135%,520px)] -translate-y-1/2 opacity-[0.07] lg:block xl:-right-10 2xl:-right-4" />

                  <div className="relative z-1 mx-auto w-[min(88vw,420px)] sm:w-[min(82vw,440px)] lg:mx-0 lg:ml-auto lg:w-full lg:max-w-[min(100%,500px)] xl:max-w-[540px]">
                     <div className="relative aspect-square w-full">
                        {/* Red disc: base + dot pattern + soft inner depth */}
                        <div
                           className={cn(
                              "absolute top-1/2 z-0 aspect-square max-w-[min(100%,340px)] -translate-y-1/2 rounded-full bg-primary shadow-[inset_0_0_56px_rgb(0_0_0/0.08)]",
                              "left-1/2 w-full min-w-[240px] -translate-x-1/2",
                              "lg:left-0 lg:w-[76%] lg:max-w-[360px] lg:min-w-0 lg:-translate-x-[10%] xl:-translate-x-[12%]"
                           )}
                           aria-hidden
                        >
                           <div
                              className="pointer-events-none absolute inset-0 rounded-full bg-[radial-gradient(circle_at_center,rgb(255_255_255/0.14)_1.25px,transparent_1.26px)] bg-size-[20px_20px] opacity-90"
                              aria-hidden
                           />
                           <div
                              className="pointer-events-none absolute inset-0 rounded-full bg-[repeating-linear-gradient(-32deg,rgb(0_0_0/0)_0,rgb(0_0_0/0)_10px,rgb(255_255_255/0.04)_10px,rgb(255_255_255/0.04)_11px)]"
                              aria-hidden
                           />
                        </div>

                        {/* Desktop: pill on the red disc */}
                        <div
                           className="absolute left-[2%] top-1/2 z-30 hidden w-max max-w-[min(200px,calc(100vw-3rem))] -translate-y-1/4 sm:left-[-18%] lg:block"
                           role="status"
                        >
                           <div className="flex items-center gap-2 rounded-full border border-border/45 bg-card/98 py-2.5 pl-2.5 pr-3.5 shadow-[0_16px_40px_-12px_rgb(15_23_42/0.25)] backdrop-blur-sm sm:pr-4">
                              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                                 <Truck className="h-4 w-4" aria-hidden />
                              </span>
                              <span className="text-xs font-semibold tracking-tight text-foreground">
                                 {heroTags.middle.label}
                              </span>
                           </div>
                        </div>

                        <div className="relative z-10 flex h-full w-full items-center justify-center p-1.5 sm:p-2">
                           <div className="aspect-square w-[88%] max-w-[min(100%,480px)] overflow-hidden rounded-full shadow-[0_28px_60px_-20px_rgb(15_23_42/0.35)] sm:w-[86%] lg:w-[88%]">
                              <Image
                                 className="h-full w-full object-cover object-center"
                                 src={centerImageSrc}
                                 alt="RapidVia Services — servicios de inmigración y envíos a Cuba"
                                 width={600}
                                 height={600}
                                 quality={80}
                                 priority
                                 sizes="(min-width: 1280px) 480px, (min-width: 1024px) 42vw, 88vw"
                              />
                           </div>
                        </div>
                     </div>

                     {/* Mobile: stacked cards (same look as Trámites) — Envíos first */}
                     <div
                        className="mx-auto mt-6 flex w-full max-w-[min(100%,320px)] flex-col gap-4 px-1 lg:hidden"
                        role="region"
                        aria-label="Servicios destacados"
                     >
                        <HeroFloatingInfoCard
                           title={heroTags.middle.label}
                           subtitle={heroTags.middle.subtitle}
                           icon={
                              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                                 <Truck className="h-5 w-5" aria-hidden />
                              </span>
                           }
                        />
                        <HeroFloatingInfoCard
                           title={heroTags.left.title}
                           subtitle={heroTags.left.subtitle}
                           icon={
                              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                                 <ShieldCheck className="h-5 w-5" aria-hidden />
                              </span>
                           }
                        />
                     </div>

                     {/* Desktop: trust card under portrait */}
                     <div
                        className="absolute left-1/2 top-full z-20 mt-4 hidden w-full max-w-[280px] -translate-x-1/2 px-1 sm:mt-5 sm:max-w-[300px] lg:block"
                        role="status"
                     >
                        <HeroFloatingInfoCard
                           title={heroTags.left.title}
                           subtitle={heroTags.left.subtitle}
                           icon={
                              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                                 <ShieldCheck className="h-5 w-5" aria-hidden />
                              </span>
                           }
                        />
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
}
