"use client";

import BenefitShowcaseSection from "./BenefitShowcaseSection";
import type { IBenefit } from "@/types";

interface Props {
	benefit: IBenefit;
	imageFirst: boolean;
	headingId: string;
}

const BenefitSection: React.FC<Props> = ({ benefit, imageFirst, headingId }: Props) => {
	return <BenefitShowcaseSection benefit={benefit} imageFirst={imageFirst} headingId={headingId} />;
};

export default BenefitSection;
