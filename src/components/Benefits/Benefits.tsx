import BenefitSection from "./BenefitSection";
import { benefits } from "@/data/benefits";

const Benefits: React.FC = () => {
  return (
    <div id="features">
      <h2 className="sr-only">Features</h2>
      {benefits.map((item, index) => (
        <BenefitSection
          key={index}
          benefit={item}
          imageFirst={index % 2 === 0}
          headingId={`benefit-showcase-${index}`}
        />
      ))}
    </div>
  );
};

export default Benefits;
