import {
  Binary,
  Box,
  Code,
  Cpu,
  Database,
  GitBranch,
  Globe,
  Layers,
  LucideIcon,
  Server,
  Workflow,
  Zap,
} from "lucide-react";
import React from "react";

interface SkillItem {
  name: string;
  Icon: LucideIcon;
}

interface SkillCategory {
  title: string;
  skills: SkillItem[];
}

const Skills: React.FC = () => {
  const categories: SkillCategory[] = [
    {
      title: "Core Stack",
      skills: [
        { name: "MongoDB", Icon: Database },
        { name: "Express", Icon: Server },
        { name: "React", Icon: Cpu },
        { name: "Node.js", Icon: Zap },
      ],
    },
    {
      title: "Engineering",
      skills: [
        { name: "TypeScript", Icon: Code },
        { name: "Next.js", Icon: Globe },
        { name: "Redux", Icon: Layers },
        { name: "Tailwind", Icon: Box },
        { name: "GraphQL", Icon: Workflow },
        { name: "Git", Icon: GitBranch },
      ],
    },
  ];

  return (
    <div className="container mx-auto px-4 max-w-5xl">
      {/* Minimalist Header */}
      <div className="mb-16">
        <div className="flex items-center gap-2 text-red-600 font-mono text-[10px] tracking-[0.4em] uppercase mb-2">
          <Binary size={12} />
          <span>Technical Stack</span>
        </div>
        <h2 className="text-4xl md:text-6xl font-black italic tracking-tighter text-white uppercase leading-none">
          SKILL
          {/* <span className="text-red-600">UNITS</span> */}
        </h2>
      </div>

      <div className="space-y-12">
        {categories.map((category) => (
          <div key={category.title}>
            {/* Simple Divider */}
            <div className="flex items-center gap-4 mb-6">
              <h3 className="text-[10px] font-bold text-white/30 uppercase tracking-[0.3em]">
                {category.title}
              </h3>
              <div className="h-[1px] flex-grow bg-white/5"></div>
            </div>

            {/* High-Density Small Box Grid */}
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-3">
              {category.skills.map((skill, index) => (
                <div
                  key={index}
                  className="group relative aspect-square bg-white/[0.02] border border-white/5 hover:border-red-600 transition-all duration-300 flex flex-col items-center justify-center p-2"
                >
                  {/* Hover Accent */}
                  <div className="absolute top-0 left-0 w-1 h-0 bg-red-600 group-hover:h-full transition-all duration-300"></div>

                  {/* Icon */}
                  <div className="text-white/20 group-hover:text-red-600 transition-colors duration-300 group-hover:scale-110">
                    <skill.Icon size={24} strokeWidth={1.5} />
                  </div>

                  {/* Label */}
                  <div className="mt-3 overflow-hidden">
                    <span className="block text-[8px] font-black text-white/40 uppercase tracking-tighter group-hover:text-white transition-colors">
                      {skill.name}
                    </span>
                  </div>

                  {/* Tiny Status Dot */}
                  <div className="absolute top-1.5 right-1.5 w-0.5 h-0.5 bg-white/10 group-hover:bg-red-600 rounded-full"></div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Footer Readout */}
      {/* <div className="mt-20 pt-8 border-t border-white/5 flex justify-between items-center opacity-40">
        <span className="text-[8px] font-mono uppercase tracking-widest text-white">
          System verified // all nodes active
        </span>
        <div className="flex gap-1">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="w-2 h-[2px] bg-red-600"></div>
          ))}
        </div>
      </div> */}
    </div>
  );
};

export default Skills;
