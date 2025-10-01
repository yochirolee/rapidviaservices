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
				{ "shadow-lg": highlight }
			)}
		>
			<div className="p-6 border-b border-gray-200 rounded-t-xl">
				<h3 className="text-xl md:text-2xl font-semibold leading-tight text-red-800 mb-1">
					{name}
				</h3>
				{/* CTA temporalmente comentado */}
			</div>

			<div className="p-6 mt-1">
				<p className="font-semibold text-sm md:text-base tracking-wide mb-1">
					INCLUIMOS
				</p>
				<p className="text-body-color text-base leading-relaxed mb-5"></p>

				<ul className="space-y-3 mb-1">
					{features.map((feature, index) => (
						<li key={index} className="flex items-start gap-3">
							<BsFillCheckCircleFill className="h-4 w-4 mt-[2px] shrink-0 text-red-800" />
							<span className="text-base leading-relaxed text-body-color">
								{feature}
							</span>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default PricingColumn;
