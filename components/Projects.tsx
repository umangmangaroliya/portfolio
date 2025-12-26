/* eslint-disable react/jsx-no-comment-textnodes */
import { Bolt, Github, ShieldCheck } from "lucide-react";
import React from "react";

const Projects: React.FC = () => {
  const projects = [
    {
      id: "PRJ-771",
      title: "NexGen E-Commerce",
      desc: "High-performance web marketplace with real-time inventory and Stripe integration.",
      tech: ["MongoDB", "Express", "React", "Node"],
      img: "https://picsum.photos/800/500?random=11",
      status: "DEPLOYED",
      coords: "40.7128° N, 74.0060° W",
    },
    {
      id: "PRJ-402",
      title: "Crypto Pulse",
      desc: "Real-time cryptocurrency tracking dashboard with predictive analysis visualizers.",
      tech: ["React", "D3.js", "WebSockets", "Tailwind"],
      img: "https://picsum.photos/800/500?random=22",
      status: "ACTIVE",
      coords: "34.0522° N, 118.2437° W",
    },
    {
      id: "PRJ-109",
      title: "SecureFlow SaaS",
      desc: "Project management tool for agile teams focusing on security and seamless UI.",
      tech: ["TypeScript", "Node", "PostgreSQL", "Redux"],
      img: "https://picsum.photos/800/500?random=33",
      status: "SECURE",
      coords: "51.5074° N, 0.1278° W",
    },
  ];

  return (
    <div className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
        <div className="relative">
          <div className="text-red-500 font-mono text-[10px] mb-4 tracking-[0.5em] uppercase animate-pulse">
            // STATUS: ACCESSING_VAULT_...
          </div>
          <h2 className="text-6xl md:text-8xl font-black italic tracking-tighter text-white">
            DEPLOYED <span className="text-red-600">ASSETS</span>
          </h2>
          <div className="absolute -left-4 top-0 w-1 h-full bg-red-600/20"></div>
        </div>
        <div className="hidden lg:block text-right">
          <div className="text-white/20 font-mono text-[9px] uppercase tracking-widest leading-relaxed">
            SYSTEM_ID: UMANG_STABLE_V4
            <br />
            ENCRYPTION: AES-256-GCM
            <br />
            TOTAL_LOAD: 87.4%
          </div>
        </div>
      </div>

      <div className="space-y-32">
        {projects.map((project, index) => (
          <div
            key={index}
            className="group relative flex flex-col lg:flex-row gap-0 lg:gap-12 items-stretch"
          >
            {/* Project Index Number Background */}
            <div className="absolute -left-12 top-0 text-[12rem] font-black italic text-white/[0.03] select-none leading-none pointer-events-none z-0">
              0{index + 1}
            </div>

            {/* Image Module */}
            <div className="relative w-full lg:w-3/5 z-10 scanner-container border border-white/10 group-hover:border-red-600 transition-colors duration-500 bg-black">
              {/* Module Header UI */}
              <div className="absolute top-0 left-0 w-full p-3 flex justify-between items-center bg-black/80 backdrop-blur-md border-b border-white/10 z-20">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-red-600 animate-ping"></div>
                  <span className="text-[10px] font-mono font-bold text-white tracking-widest">
                    {project.id} // {project.status}
                  </span>
                </div>
                <div className="text-[9px] font-mono text-white/30">
                  {project.coords}
                </div>
              </div>

              {/* Scanning Overlay */}
              <div className="scanner-line"></div>

              {/* Corner Brackets */}
              <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-red-600 z-30 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-red-600 z-30 opacity-0 group-hover:opacity-100 transition-opacity"></div>

              <div className="overflow-hidden aspect-video">
                <img
                  src={project.img}
                  className="w-full h-full object-cover filter grayscale contrast-125 brightness-75 group-hover:grayscale-0 group-hover:scale-105 group-hover:brightness-100 transition-all duration-1000"
                  alt={project.title}
                />
              </div>

              {/* Hover Metadata Overlay */}
              <div className="absolute inset-0 bg-red-600/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none flex items-center justify-center">
                <div className="text-red-500 font-mono text-[8px] tracking-[1em] animate-pulse">
                  ANALYZING_SYSTEM_INTEGRITY...
                </div>
              </div>
            </div>

            {/* Content Module */}
            <div className="w-full lg:w-2/5 flex flex-col justify-center py-8 lg:py-0 z-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="h-[1px] w-12 bg-red-600"></div>
                <span className="text-red-500 font-mono text-[10px] tracking-widest uppercase">
                  Specification_Link
                </span>
              </div>

              <h3 className="text-4xl md:text-5xl font-black italic text-white mb-6 uppercase tracking-tighter group-hover:text-red-500 transition-colors duration-300 hover-glitch">
                {project.title}
              </h3>

              <div className="flex flex-wrap gap-2 mb-8">
                {project.tech.map((t, i) => (
                  <span
                    key={i}
                    className="text-[10px] px-3 py-1 bg-white/5 border border-white/10 text-white/60 font-mono uppercase group-hover:border-red-600/30 group-hover:text-red-400 transition-all"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <p className="text-white/40 text-lg leading-relaxed font-medium mb-10 border-l-2 border-white/10 pl-6 group-hover:border-red-600 transition-all duration-500">
                {project.desc}
              </p>

              <div className="flex items-center gap-8">
                <button className="relative px-8 py-4 bg-red-600 text-black font-black italic uppercase tracking-widest text-xs hover:bg-white transition-all duration-300 group/btn overflow-hidden">
                  <span className="relative z-10 flex items-center gap-2">
                    Execute <Bolt size={12} />
                  </span>
                  <div className="absolute inset-0 bg-white translate-y-full group-hover/btn:translate-y-0 transition-transform"></div>
                </button>

                <a
                  href="#"
                  className="text-[10px] font-mono text-white/20 hover:text-red-500 tracking-widest uppercase transition-colors flex items-center gap-2"
                >
                  <Github size={12} /> Source_Code
                </a>
              </div>

              {/* Fake System Logs */}
              <div className="mt-12 hidden md:block">
                <div className="font-mono text-[8px] text-white/10 space-y-1">
                  <div>[LOG] INITIALIZING_ENVIRONMENT_V4.0</div>
                  <div>[LOG] LOAD_BALANCER: ACTIVE</div>
                  <div>[LOG] SECURITY_PROTOCOL: ARMORED</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Vault Footer Section */}
      <div className="mt-40 pt-20 border-t border-white/10 text-center relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-8 bg-black">
          <ShieldCheck className="text-red-600" size={32} />
        </div>
        <button className="group relative text-3xl md:text-5xl font-black italic tracking-tighter text-white hover:text-red-600 transition-colors uppercase">
          Expand_Full_Inventory
          <div className="h-1 w-0 group-hover:w-full bg-red-600 transition-all mx-auto mt-2"></div>
        </button>
      </div>
    </div>
  );
};

export default Projects;
