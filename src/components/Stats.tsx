"use client";
import { stats } from "@/data/stats";

const Stats: React.FC = () => {
  return (
    <section id="stats" className="py-10 lg:py-20">
      <div className="grid sm:grid-cols-3 gap-8">
        {stats.map((stat) => (
          <div
            key={stat.title}
            className="text-center sm:text-left max-w-md sm:max-w-full mx-auto"
          >
            <h3
              className="mb-4 flex items-center gap-2 justify-center sm:justify-start
                         text-xl md:text-2xl font-semibold leading-tight
                         [&>svg]:h-6 [&>svg]:w-6 md:[&>svg]:h-7 md:[&>svg]:w-7"
            >
              {stat.icon}
              {stat.title}
            </h3>

            <p className="text-base leading-relaxed text-body-color">
              {stat.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stats;
