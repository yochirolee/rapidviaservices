import { BsBarChartFill, BsFillStarFill } from "react-icons/bs";
import { PiGlobeFill } from "react-icons/pi";

import { IStats } from "@/types";

export const stats: IStats[] = [
	{
		title: "10k+",
		icon: <BsBarChartFill size={34} />,
		description:
			"Preparación de formularios migratorios con resultados satisfactorios: poderes notariales, peticiones de reunificación familiar, mociones y más.",
	},
	{
		title: "100+",
		icon: <BsFillStarFill size={34} />,
		description: "Traducciones certificadas para trámites migratorios y legales en EE. UU.",
	},
	{
		title: "200+ ",
		icon: <PiGlobeFill size={34} />,
		description: "Paquetes enviados a Cuba por vía aérea y marítima con seguimiento personalizado.",
	},
];
