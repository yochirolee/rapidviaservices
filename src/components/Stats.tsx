"use client";
import { stats } from "@/data/stats";
import React, { useEffect } from "react";

const Stats: React.FC = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://static.elfsight.com/platform/platform.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section id="stats" className="py-10 lg:py-20">
      <div className="grid sm:grid-cols-3 gap-8">
        {stats.map((stat) => (
          <div
            key={stat.title}
            className="text-center sm:text-left max-w-md sm:max-w-full mx-auto"
          >
            <h3 className="mb-5 flex items-center gap-2 text-3xl font-semibold justify-center sm:justify-start">
              {stat.icon}
              {stat.title}
            </h3>
            <p className="text-foreground-accent">{stat.description}</p>
          </div>
        ))}
      </div>
      <div className="mt-4 text-center">
        <div
          className="elfsight-app-8c76c1bb-6eb6-46d1-b0f0-87825be4b3b2"
          data-elfsight-app-lazy
        ></div>
      </div>

      <div className="mt-12 text-center">
        <h2 className="mb-6 text-2xl font-semibold">Síguenos en Instagram</h2>
        <div
          className="elfsight-app-11bc5979-fb71-4473-814b-dbf0b6747f20"
          data-elfsight-app-lazy
        ></div>
      </div>
    </section>
  );
};

export default Stats;
