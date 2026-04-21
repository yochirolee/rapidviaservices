"use client";

import { useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { Loader2, PackageSearch, Search } from "lucide-react";
import { useFetchByInvoiceOrHBL } from "@/hooks/useFetchByInvoiceOrHBL";
import { TrackingDetails } from "./TrackingDetails";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

function stripCTESuffix(value: string): string {
   const trimmed = value.trim();
   if (trimmed.endsWith("CTE") || trimmed.endsWith("cte")) {
      return trimmed.slice(0, -3);
   }
   return trimmed;
}

function isValidSearch(value: string): boolean {
   const trimmed = stripCTESuffix(value);
   return /^\d+$/.test(trimmed) || trimmed.length >= 3;
}

export default function SearchForm(): JSX.Element {
   const router = useRouter();
   const searchParams = useSearchParams();
   const urlSearch = searchParams.get("search") ?? "";
   const [inputValue, setInputValue] = useState(urlSearch);
   const [searchTerm, setSearchTerm] = useState(urlSearch);

   useEffect(() => {
      if (urlSearch && isValidSearch(urlSearch)) {
         setInputValue(urlSearch);
         setSearchTerm(urlSearch);
      }
   }, [urlSearch]);

   const { data, isLoading, isError, error, isFetched } = useFetchByInvoiceOrHBL(searchTerm);

   const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
      e.preventDefault();
      if (!isValidSearch(inputValue)) return;
      setSearchTerm(inputValue);
      const params = new URLSearchParams(searchParams.toString());
      params.set("search", inputValue);
      router.replace(`?${params.toString()}`, { scroll: false });
   };

   const showNotFound = isFetched && !isError && data === null && searchTerm;

   return (
      <div className="mx-auto flex w-full max-w-3xl flex-col items-stretch gap-8 my-4">
         <div className="text-center">
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
               <PackageSearch className="h-7 w-7" aria-hidden />
            </div>
            <h1 className="text-balance text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
               Rastreo de envíos
            </h1>
            <p className="mt-2 text-pretty text-sm text-muted-foreground md:text-base">
               Ingrese su número de factura, HBL o ID de pedido para ver el estado del paquete.
            </p>
         </div>

         <Card className="  p-4">
            <CardHeader className="space-y-1 pb-4">
               <CardTitle className="text-lg">Buscar envío</CardTitle>
               <CardDescription>
                  Mínimo 3 caracteres para texto; los IDs numéricos se aceptan con cualquier longitud.
               </CardDescription>
            </CardHeader>
            <CardContent>
               <form onSubmit={handleOnSubmit} className="flex flex-col gap-4 sm:flex-row sm:items-end">
                  <div className="flex-1 space-y-2">
                     <Label htmlFor="tracking-search">Factura, HBL o pedido</Label>
                     <Input
                        id="tracking-search"
                        placeholder="Ej. CTE260300016F01 o 145343"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        autoComplete="off"
                        className="h-11"
                     />
                  </div>
                  <Button
                     type="submit"
                     disabled={isLoading || !isValidSearch(inputValue)}
                     className="h-11 shrink-0 sm:min-w-[140px]"
                  >
                     {isLoading ? (
                        <>
                           <Loader2 className="animate-spin" aria-hidden />
                           Buscando
                        </>
                     ) : (
                        <>
                           <Search className="shrink-0" aria-hidden />
                           Buscar
                        </>
                     )}
                  </Button>
               </form>
            </CardContent>
         </Card>

         {isError && (
            <Alert variant="destructive" className="border-destructive/50">
               <AlertTitle>No se encontraron resultados</AlertTitle>
               <AlertDescription>
                  Verifique el número e intente de nuevo. Puede buscar por HBL o ID de pedido.
               </AlertDescription>
            </Alert>
         )}

         {showNotFound && (
            <Card className="border-dashed border-muted-foreground/25 bg-muted/30">
               <CardContent className="flex flex-col items-center gap-2 py-10 text-center">
                  <PackageSearch className="h-10 w-10 text-muted-foreground/60" aria-hidden />
                  <p className="font-medium text-foreground">No se encontraron resultados</p>
                  <p className="max-w-sm text-sm text-muted-foreground">
                     Verifique el número e intente de nuevo. Puede buscar por HBL o ID de pedido.
                  </p>
               </CardContent>
            </Card>
         )}

         {data && <TrackingDetails invoice={data} />}
      </div>
   );
}
