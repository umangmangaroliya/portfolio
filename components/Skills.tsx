import {
  IconBrandDocker,
  IconBrandGit,
  IconBrandGithub,
  IconBrandJavascript,
  IconBrandMongodb,
  IconBrandNextjs,
  IconBrandNodejs,
  IconBrandReact,
  IconBrandTailwind,
  IconBrandTypescript,
} from "@tabler/icons-react";
import {
  Activity,
  Binary,
  FileTextIcon,
  LucideIcon,
  Server,
  Share2,
  ShieldCheck,
} from "lucide-react";
import React from "react";

interface SkillItem {
  name: string;
  Icon: LucideIcon;
}

const Skills: React.FC = () => {
  const row1: SkillItem[] = [
    { name: "MongoDB", Icon: IconBrandMongodb },
    { name: "Express", Icon: Server },
    { name: "React", Icon: IconBrandReact },
    { name: "Node.js", Icon: IconBrandNodejs },
    { name: "TypeScript", Icon: IconBrandTypescript },
    { name: "Next.js", Icon: IconBrandNextjs },
    // { name: "Redux", Icon: IconBrandRedux },
    { name: "Javascript", Icon: IconBrandJavascript },
    { name: "Zustand", Icon: Share2 },
  ];

  const row2: SkillItem[] = [
    { name: "Tailwind", Icon: IconBrandTailwind },
    { name: "Git", Icon: IconBrandGit },
    { name: "Docker", Icon: IconBrandDocker },
    { name: "GitHub", Icon: IconBrandGithub },

    { name: "Tanstack Query", Icon: Activity },
    { name: "React Hook Form", Icon: FileTextIcon },
    { name: "Yup", Icon: ShieldCheck },
  ];

  const SkillBox: React.FC<{ skill: SkillItem }> = ({ skill }) => (
    <div className="group relative w-24 h-24 shrink-0 bg-white/2 border border-white/5 hover:border-red-600 transition-all duration-300 flex flex-col items-center justify-center p-2 mx-2">
      {/* Hover Accent */}
      <div className="absolute top-0 left-0 w-px h-0 bg-red-600 group-hover:h-full transition-all duration-300"></div>

      {/* Icon */}
      <div className="text-white/20 group-hover:text-red-600 transition-colors duration-300 group-hover:scale-110">
        <skill.Icon size={24} strokeWidth={1.5} />
      </div>

      {/* Label */}
      <div className="mt-2">
        <span className="block text-center whitespace-normal text-[9px] font-black text-white/30 uppercase tracking-tighter group-hover:text-white transition-colors">
          {skill.name}
        </span>
      </div>

      {/* Tiny Status Dot */}
      <div className="absolute top-1 right-1 w-0.5 h-0.5 bg-white/10 group-hover:bg-red-600 rounded-full"></div>
    </div>
  );

  return (
    <div className="mx-auto px-4 overflow-hidden">
      {/* Minimalist Header */}
      <div className="mb-12">
        <div className="flex items-center gap-2 text-red-600 font-mono text-[10px] tracking-[0.4em] uppercase mb-2">
          <Binary size={12} className="animate-pulse" />
          <span>Operational Stack</span>
        </div>
        <h2 className="text-4xl md:text-6xl font-black italic tracking-tighter text-white uppercase leading-none">
          TECH <span className="text-red-600">UNITS</span>
        </h2>
      </div>

      <div className="space-y-4">
        {/* Row 1: Moving Left */}
        <div className="marquee-container relative flex overflow-hidden">
          <div className="flex w-max animate-marquee whitespace-nowrap py-4 group-hover:paused">
            {/* Tripling items to ensure seamless loop on all screen sizes */}
            {[...row1, ...row1, ...row1].map((skill, index) => (
              <SkillBox key={`row1-${index}`} skill={skill} />
            ))}
          </div>
          {/* Fades for smooth edges */}
          <div className="absolute inset-y-0 left-0 w-10 md:w-40 bg-linear-to-r from-black to-transparent z-10 pointer-events-none"></div>
          <div className="absolute inset-y-0 right-0 w-10 md:w-40 bg-linear-to-l from-black to-transparent z-10 pointer-events-none"></div>
        </div>

        {/* Row 2: Moving Right */}
        <div className="marquee-container relative flex overflow-hidden">
          <div className="flex w-max animate-marquee-reverse whitespace-nowrap py-4 group-hover:paused">
            {[...row2, ...row2, ...row2].map((skill, index) => (
              <SkillBox key={`row2-${index}`} skill={skill} />
            ))}
          </div>
          {/* Fades for smooth edges */}
          <div className="absolute inset-y-0 left-0 w-10 md:w-40 bg-linear-to-r from-black to-transparent z-10 pointer-events-none"></div>
          <div className="absolute inset-y-0 right-0 w-10 md:w-40 bg-linear-to-l from-black to-transparent z-10 pointer-events-none"></div>
        </div>
      </div>

      {/* Footer Readout */}
      <div className="mt-16 pt-8 border-t border-white/5 flex justify-between items-center opacity-40">
        <span className="text-[8px] font-mono uppercase tracking-widest text-white">
          System verified // auto-scrolling active
        </span>
        <div className="flex gap-1">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="w-2 h-0.5 bg-red-600"></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
