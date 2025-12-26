/* eslint-disable react/jsx-no-comment-textnodes */
import { Building2 } from "lucide-react";
import React from "react";

const Experience: React.FC = () => {
  const experiences = [
    {
      id: "LOG_01",
      company: "TechFlow Systems",
      role: "Senior Web Developer",
      period: "2023 - PRESENT",
      type: "Full-Time",
      desc: "Leading front-end development for complex SaaS applications. Improved site performance by 40% through code optimization.",
      stats: { linesOfCode: "250K+", deployments: "120+" },
    },
    {
      id: "LOG_02",
      company: "Innovation Labs",
      role: "Full Stack Engineer",
      period: "2021 - 2023",
      type: "Full-Time",
      desc: "Architected scalable dashboards and implemented reusable component libraries for multiple internal teams.",
      stats: { componentsBuilt: "45", performanceScore: "98%" },
    },
  ];

  return (
    <div className="container mx-auto px-4">
      <div className="mb-24 relative flex items-center justify-between">
        <div>
          <div className="text-red-500 font-mono text-[10px] mb-4 tracking-[0.5em] uppercase flex items-center gap-3">
            <span className="w-12 h-[1px] bg-red-600"></span>
            // CAREER TIMELINE
          </div>
          <h2 className="text-6xl md:text-9xl font-black italic tracking-tighter text-white leading-none">
            WORK{" "}
            <span className="text-red-600 hover-glitch cursor-default">
              EXPERIENCE
            </span>
          </h2>
        </div>
      </div>

      <div className="space-y-12">
        {experiences.map((exp, index) => (
          <div key={index} className="group relative">
            <div className="absolute -top-6 left-0 text-[10px] font-mono text-red-600/40 uppercase tracking-[0.5em] group-hover:text-red-500 transition-colors">
              ITEM_ID: 0x0{index + 1}
            </div>

            <div className="relative bg-black border border-white/5 group-hover:border-red-600 transition-all duration-500 tilt-card">
              <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-white/20 group-hover:border-red-600 transition-colors"></div>
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-white/20 group-hover:border-red-600 transition-colors"></div>

              <div className="p-8 md:p-12 flex flex-col lg:flex-row gap-12">
                <div className="lg:w-1/4 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-white/10 pb-8 lg:pb-0 lg:pr-8">
                  <div className="text-4xl font-black italic text-white mb-2 group-hover:text-red-500 transition-colors">
                    {exp.period.split(" - ")[0]}
                  </div>
                  <div className="text-red-600 text-[10px] font-black italic uppercase tracking-widest mb-4">
                    to {exp.period.split(" - ")[1]}
                  </div>
                  <div className="p-2 border border-red-600/20 bg-red-600/5 text-center">
                    <span className="text-[9px] font-mono font-bold text-red-500 tracking-widest">
                      {exp.type}
                    </span>
                  </div>
                </div>

                <div className="lg:w-1/2 space-y-4">
                  <div className="text-white/30 font-mono text-[10px] uppercase tracking-widest mb-1">
                    Position_Group:
                  </div>
                  <h3 className="text-3xl md:text-5xl font-black italic text-white uppercase tracking-tighter leading-none mb-4 group-hover:translate-x-2 transition-transform">
                    {exp.role}
                  </h3>
                  <div className="flex items-center gap-4 text-red-500 font-bold italic text-xl uppercase">
                    <Building2 size={16} />
                    {exp.company}
                  </div>
                  <p className="text-white/50 text-lg leading-relaxed font-medium pt-4">
                    {exp.desc}
                  </p>
                </div>

                <div className="lg:w-1/4 bg-white/[0.02] border border-white/5 p-6 space-y-6">
                  <div className="text-center pb-2 border-b border-white/10">
                    <span className="text-[9px] font-mono text-white/20 uppercase tracking-widest">
                      Key Performance
                    </span>
                  </div>
                  <div className="grid grid-cols-1 gap-4">
                    {Object.entries(exp.stats).map(([key, value]) => (
                      <div
                        key={key}
                        className="flex justify-between items-center"
                      >
                        <span className="text-[10px] font-mono text-white/30 uppercase">
                          {key.replace(/([A-Z])/g, "_$1")}
                        </span>
                        <span className="text-[11px] font-black text-red-500 italic">
                          {value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -inset-2 bg-red-600/5 opacity-0 group-hover:opacity-100 blur-2xl transition-opacity -z-10"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
