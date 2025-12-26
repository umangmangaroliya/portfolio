import { Building2 } from "lucide-react";
import React from "react";

const Experience: React.FC = () => {
  const experiences = [
    {
      id: "DATA_LOG_01",
      company: "TechFlow Systems",
      role: "Senior Web Developer",
      period: "2023 - PRESENT",
      clearance: "RED_CLEARANCE",
      desc: "Overseeing critical mission parameters for high-scale SaaS products. Optimized data pipelines for 40% increased efficiency.",
      stats: { linesOfCode: "250K+", deployments: "120+" },
    },
    {
      id: "DATA_LOG_02",
      company: "Innovation Labs",
      role: "Full Stack Engineer",
      period: "2021 - 2023",
      clearance: "SECURE_CLEARANCE",
      desc: "Architected enterprise dashboards using React and Node. Constructed a library of reusable digital assets for multi-team deployment.",
      stats: { componentsBuilt: "45", performanceScore: "98%" },
    },
    {
      id: "DATA_LOG_03",
      company: "Startup Hub",
      role: "Junior Web Developer",
      period: "2020 - 2021",
      clearance: "RECON_CLEARANCE",
      desc: "Executed frontend maneuvers and REST API integrations. Rapidly assimilated modern web methodologies under high-pressure scenarios.",
      stats: { sprintSpeed: "HIGH", bugsSmashed: "500+" },
    },
  ];

  return (
    <div className="container mx-auto px-4">
      <div className="mb-24 relative flex items-center justify-between">
        <div>
          <div className="text-red-500 font-mono text-[10px] mb-4 tracking-[0.5em] uppercase flex items-center gap-3">
            <span className="w-12 h-[1px] bg-red-600"></span>
            // CHRONOLOGICAL_BATTLE_RECORDS
          </div>
          <h2 className="text-6xl md:text-9xl font-black italic tracking-tighter text-white leading-none">
            DEPLOYMENT{" "}
            <span className="text-red-600 hover-glitch cursor-default">
              HISTORY
            </span>
          </h2>
        </div>

        {/* Radar Visual */}
        <div className="hidden xl:flex w-32 h-32 border border-red-600/20 rounded-full relative items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-[conic-gradient(from_0deg,#ff003c_0%,transparent_20%)] animate-[spin_4s_linear_infinite] opacity-20"></div>
          <div className="w-full h-[1px] bg-red-600/20 absolute top-1/2"></div>
          <div className="max-w-[1px] h-full bg-red-600/20 absolute left-1/2"></div>
          <div className="w-1.5 h-1.5 bg-red-600 animate-ping absolute top-1/4 left-1/3"></div>
          <div className="w-1 h-1 bg-white absolute bottom-1/4 right-1/4 animate-pulse"></div>
        </div>
      </div>

      <div className="space-y-12">
        {experiences.map((exp, index) => (
          <div key={index} className="group relative">
            {/* Index Label */}
            <div className="absolute -top-6 left-0 text-[10px] font-mono text-red-600/40 uppercase tracking-[0.5em] group-hover:text-red-500 transition-colors">
              LOG_IDENTIFIER: 0x0{index + 1}
            </div>

            <div className="relative bg-black border border-white/5 group-hover:border-red-600 transition-all duration-500 tilt-card">
              {/* Tactical Corners */}
              <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-white/20 group-hover:border-red-600 transition-colors"></div>
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-white/20 group-hover:border-red-600 transition-colors"></div>

              <div className="p-8 md:p-12 flex flex-col lg:flex-row gap-12">
                {/* Period & Clearance */}
                <div className="lg:w-1/4 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-white/10 pb-8 lg:pb-0 lg:pr-8">
                  <div className="text-4xl font-black italic text-white mb-2 group-hover:text-red-500 transition-colors">
                    {exp.period.split(" - ")[0]}
                  </div>
                  <div className="text-red-600 text-[10px] font-black italic uppercase tracking-widest mb-4">
                    to {exp.period.split(" - ")[1]}
                  </div>
                  <div className="p-2 border border-red-600/20 bg-red-600/5 text-center">
                    <span className="text-[9px] font-mono font-bold text-red-500 tracking-widest">
                      {exp.clearance}
                    </span>
                  </div>
                </div>

                {/* Main Content */}
                <div className="lg:w-1/2 space-y-4">
                  <div className="text-white/30 font-mono text-[10px] uppercase tracking-widest mb-1">
                    Assigned_Task_Group:
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

                {/* Tactical Stats readout */}
                <div className="lg:w-1/4 bg-white/[0.02] border border-white/5 p-6 space-y-6">
                  <div className="text-center pb-2 border-b border-white/10">
                    <span className="text-[9px] font-mono text-white/20 uppercase tracking-widest">
                      Metadata_Extraction
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
                  <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                    <div className="h-full bg-red-600 w-full group-hover:translate-x-full transition-transform duration-[2000ms] opacity-20"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Glow element */}
            <div className="absolute -inset-2 bg-red-600/5 opacity-0 group-hover:opacity-100 blur-2xl transition-opacity -z-10"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
