/* eslint-disable react/jsx-no-comment-textnodes */
import {
  Code,
  Cpu,
  Database,
  Github,
  Link2,
  Palette,
  Server,
  Zap,
} from "lucide-react";
import React from "react";

const Skills: React.FC = () => {
  const skills = [
    { name: "MongoDB", level: 25, Icon: Database },
    { name: "Express.js", level: 40, Icon: Server },
    { name: "React.js", level: 85, Icon: Cpu },
    { name: "Node.js", level: 40, Icon: Zap },
    { name: "TypeScript", level: 80, Icon: Code },
    { name: "Tailwind CSS", level: 95, Icon: Palette },
    { name: "REST APIs", level: 95, Icon: Link2 },
    { name: "Git & GitHub", level: 80, Icon: Github },
  ];

  return (
    <div className="container mx-auto px-4">
      <div className="mb-16">
        <div className="text-red-500 font-mono text-xs mb-4 tracking-[0.4em] uppercase">
          // SKILLS
        </div>
        <h2 className="text-5xl font-black italic tracking-tighter text-white">
          TECH STACK
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="tilt-card p-6 bg-white/[0.03] border border-white/10 hover:border-red-600 hover:bg-red-600/5 transition-all group relative overflow-hidden cursor-pointer"
          >
            {/* Hover Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-tr from-red-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>

            <div className="flex items-center justify-between mb-8 relative z-10">
              <div className="text-red-600 group-hover:scale-125 group-hover:rotate-12 transition-transform duration-300">
                <skill.Icon size={32} />
              </div>
              <div className="text-xs font-mono text-white/20 group-hover:text-red-500">
                SKILL_0{index + 1}
              </div>
            </div>

            <h3 className="text-sm font-black italic text-white mb-4 uppercase tracking-widest relative z-10 group-hover:translate-x-2 transition-transform">
              {skill.name}
            </h3>

            <div className="flex items-end gap-2 relative z-10">
              <div className="flex-grow h-2 bg-white/5 overflow-hidden">
                <div
                  className="h-full bg-red-600 transition-all duration-1000 group-hover:bg-white group-hover:shadow-[0_0_15px_rgba(255,255,255,0.8)]"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
              <span className="text-[10px] font-mono text-red-600 group-hover:text-white font-bold">
                {skill.level}%
              </span>
            </div>

            {/* Decorative Dots */}
            <div className="absolute bottom-2 right-2 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="w-1 h-1 bg-red-600 animate-pulse"></div>
              <div className="w-1 h-1 bg-red-600 animate-pulse [animation-delay:0.2s]"></div>
              <div className="w-1 h-1 bg-red-600 animate-pulse [animation-delay:0.4s]"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
