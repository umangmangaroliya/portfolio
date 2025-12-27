/* eslint-disable react/jsx-no-comment-textnodes */
import { Bolt, Github, ShieldCheck } from "lucide-react";
import React from "react";

const Projects: React.FC = () => {
  const projects = [
    {
      id: "PROJECT-01",
      title: "NexGen E-Commerce",
      desc: "A modern online marketplace featuring real-time inventory management and secure Stripe payments.",
      tech: ["MongoDB", "Express", "React", "Node"],
      img: "https://picsum.photos/800/500?random=11",
      status: "LIVE",
      location: "E-Commerce",
    },
    {
      id: "PROJECT-02",
      title: "Crypto Pulse",
      desc: "A real-time cryptocurrency dashboard with data visualization and market tracking.",
      tech: ["React", "D3.js", "WebSockets", "Tailwind"],
      img: "https://picsum.photos/800/500?random=22",
      status: "ACTIVE",
      location: "FinTech",
    },
    {
      id: "PROJECT-03",
      title: "SecureFlow SaaS",
      desc: "A team management application focused on security, organization, and efficient workflow.",
      tech: ["TypeScript", "Node", "PostgreSQL", "Redux"],
      img: "https://picsum.photos/800/500?random=33",
      status: "STABLE",
      location: "SaaS Tool",
    },
  ];

  return (
    <div className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
        <div className="relative">
          <div className="text-red-500 font-mono text-[10px] mb-4 tracking-[0.5em] uppercase animate-pulse">
            // LOADING LATEST PROJECTS...
          </div>
          <h2 className="text-6xl md:text-8xl font-black italic tracking-tighter text-white">
            SELECTED <span className="text-red-600">WORK</span>
          </h2>
          <div className="absolute -left-4 top-0 w-1 h-full bg-red-600/20"></div>
        </div>
        <div className="hidden lg:block text-right">
          <div className="text-white/20 font-mono text-[9px] uppercase tracking-widest leading-relaxed">
            PORTFOLIO_ID: UMANG_DEV_V4
            <br />
            STATUS: FULLY_OPERATIONAL
            <br />
            LOAD_INDEX: OPTIMAL
          </div>
        </div>
      </div>

      <div className="space-y-32">
        {projects.map((project, index) => (
          <div
            key={index}
            className="group relative flex flex-col lg:flex-row gap-0 lg:gap-12 items-stretch"
          >
            {/* Project Index */}
            <div className="absolute -left-12 top-0 text-[12rem] font-black italic text-white/[0.03] select-none leading-none pointer-events-none z-0">
              0{index + 1}
            </div>

            {/* Image Module */}
            <div className="relative w-full lg:w-3/5 z-10 scanner-container border border-white/10 group-hover:border-red-600 transition-colors duration-500 bg-black">
              {/* Header UI */}
              <div className="absolute top-0 left-0 w-full p-3 flex justify-between items-center bg-black/80 backdrop-blur-md border-b border-white/10 z-20">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-red-600 animate-ping"></div>
                  <span className="text-[10px] font-mono font-bold text-white tracking-widest">
                    {project.id} // {project.status}
                  </span>
                </div>
                <div className="text-[9px] font-mono text-white/30">
                  {project.location}
                </div>
              </div>

              {/* Decorative Scanning Overlay */}
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
            </div>

            {/* Content Module */}
            <div className="w-full lg:w-2/5 flex flex-col justify-center py-8 lg:py-0 z-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="h-[1px] w-12 bg-red-600"></div>
                <span className="text-red-500 font-mono text-[10px] tracking-widest uppercase">
                  Project Details
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
                    Live Demo <Bolt size={12} />
                  </span>
                  <div className="absolute inset-0 bg-white translate-y-full group-hover/btn:translate-y-0 transition-transform"></div>
                </button>

                <a
                  href="#"
                  className="text-[10px] font-mono text-white/20 hover:text-red-500 tracking-widest uppercase transition-colors flex items-center gap-2"
                >
                  <Github size={12} /> GitHub Link
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Vault Footer */}
      <div className="mt-40 pt-20 border-t border-white/10 text-center relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-8 bg-black">
          <ShieldCheck className="text-red-600" size={32} />
        </div>
        <button className="group relative text-3xl md:text-5xl font-black italic tracking-tighter text-white hover:text-red-600 transition-colors uppercase">
          View All Projects
          <div className="h-1 w-0 group-hover:w-full bg-red-600 transition-all mx-auto mt-2"></div>
        </button>
      </div>
    </div>
  );
};

export default Projects;
