import clsx from "clsx";
import { BsFillCheckCircleFill } from "react-icons/bs";

import { IPricing } from "@/types";

interface Props {
	tier: IPricing;
	highlight?: boolean;
}

const PricingColumn: React.FC<Props> = ({ tier, highlight }: Props) => {
	const { name, features } = tier;

	return (
		<div
			className={clsx(
				"w-full max-w-sm mx-auto bg-white rounded-xl border border-gray-200 n-all duration-300 hover:scale-105 lg:max-w-full",
				{ "shadow-lg": highlight },
			)}
		>
			<div className="p-6 border-b border-gray-200 rounded-t-xl">
				<h3 className="text-2xl font-semibold mb-1 text-red-800">{name}</h3>

				{/* <button className={clsx("w-full py-3 px-4 rounded-full transition-colors", { "bg-primary hover:bg-primary-accent": highlight, "bg-hero-background hover:bg-gray-200": !highlight })}>
                    Gee
                </button>*/}
			</div>
			<div className="p-6 mt-1">
				<p className="font-bold mb-0">INCLUIMOS</p>
				<p className="text-foreground-accent mb-5"></p>
				<ul className="space-y-4 mb-1">
					{features.map((feature, index) => (
						<li key={index} className="flex items-center text-sm leading-tight">
							<BsFillCheckCircleFill className="relative top-[1px] h-4 w-5 text-red-800 mr-2 hover:text-red-400" />
							<span className="text-foreground-accent">{feature}</span>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default PricingColumn;
