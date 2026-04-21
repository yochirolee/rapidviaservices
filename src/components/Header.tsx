"use client";
import Link from "next/link";
import Image from "next/image";
import { Menu, PackageSearch } from "lucide-react";
import { siteDetails } from "@/data/siteDetails";
import { menuItems } from "@/data/menuItems";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

const navLinkClass =
   "text-sm font-medium text-foreground/90 transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm";

export default function Header(): JSX.Element {
   return (
      <header className="fixed top-0 left-0 right-0 z-50 w-full md:absolute">
         <div className="mx-auto max-w-7xl">
            <nav
               className={cn(
                  "mx-auto flex items-center justify-between gap-4 px-4 py-3 md:py-8",
                  "border-b border-border/60 bg-background/95 shadow-sm backdrop-blur md:border-0 md:bg-transparent md:shadow-none md:backdrop-blur-none",
               )}
            >
               <Link href="/" className="flex items-center gap-2 shrink-0">
                  <Image
                     src="/images/logo.png"
                     alt="Rapid Via Logo, envíos a Cuba, trámites legales, notario"
                     width={80}
                     height={80}
                     className="h-12 w-12 min-w-fit"
                  />
                  <span className="text-xl font-semibold tracking-tight text-foreground">{siteDetails.siteName}</span>
               </Link>

               <ul className="hidden items-center gap-6 md:flex">
                  {menuItems.map((item) => (
                     <li key={item.url}>
                        <Link href={item.url} className={navLinkClass}>
                           {item.text}
                        </Link>
                     </li>
                  ))}
                  <li>
                     <Button className="rounded-xl shadow-sm" size="sm" asChild>
                        <Link href="/tracking" className="inline-flex items-center gap-2">
                           <PackageSearch className="h-4 w-4" />
                           Rastrear
                        </Link>
                     </Button>
                  </li>
               </ul>

               <Sheet>
                  <SheetTrigger asChild>
                     <Button variant="outline" size="icon" className="md:hidden" aria-label="Abrir menú">
                        <Menu className="h-5 w-5" />
                     </Button>
                  </SheetTrigger>
                  <SheetContent side="right">
                     <SheetHeader>
                        <SheetTitle className="text-left">Menú</SheetTitle>
                     </SheetHeader>
                     <Separator />
                     <nav className="flex flex-col gap-1 mx-4">
                        {menuItems.map((item) => (
                           <Link href={item.url}>{item.text}</Link>
                        ))}
                        <Button className="mt-2 justify-start gap-2 rounded-xl" asChild>
                           <Link href="/tracking">
                              <PackageSearch className="h-4 w-4" />
                              Rastrear
                           </Link>
                        </Button>
                     </nav>
                  </SheetContent>
               </Sheet>
            </nav>
         </div>
      </header>
   );
}
