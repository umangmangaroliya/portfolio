import { ArrowRight } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";

const Hero: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const { left, top, width, height } =
          containerRef.current.getBoundingClientRect();
        const x = (e.clientX - left) / width - 0.5;
        const y = (e.clientY - top) / height - 0.5;
        setMousePos({ x, y });
      }
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative min-h-screen flex flex-col justify-center bg-black px-8 md:px-16 py-32 md:py-40"
    >
      {/* Background Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      ></div>

      {/* Dynamic Red Glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-red-600/5 blur-[120px] rounded-full pointer-events-none"
        style={{
          transform: `translate(${-50 + mousePos.x * 40}%, ${
            -50 + mousePos.y * 40
          }%)`,
        }}
      />

      <div className="z-10 flex flex-col gap-2 max-w-7xl">
        <h1 className="text-[clamp(4rem,15vw,16rem)] leading-[0.85] tracking-tighter italic font-black text-white flex flex-col select-none">
          <span className="border-b border-white/10 pb-4 hover-glitch transition-all duration-300 hover:text-red-500 cursor-default">
            WEB
          </span>
          <span className="text-white hover-glitch transition-all duration-300 hover:text-red-500 cursor-default">
            UMANG<span className="text-red-600">.</span>
          </span>
        </h1>

        <div className="mt-10 max-w-2xl">
          <p className="text-xl md:text-3xl font-black uppercase tracking-tight text-white/80 leading-none">
            FORGING{" "}
            <span className="text-strike text-white hover:bg-red-600 hover:text-black transition-all duration-300 px-2">
              HIGH-PERFORMANCE
            </span>
          </p>
          <p className="text-xl md:text-3xl font-black uppercase tracking-tight text-white/40 leading-tight mt-2">
            DIGITAL WEAPONS <br />
            FOR THE MODERN WEB.
          </p>
        </div>

        <div className="mt-12 flex flex-col sm:flex-row gap-6">
          <a
            href="#projects"
            className="group flex items-center justify-center gap-4 bg-white text-black px-10 py-5 font-black italic uppercase tracking-widest text-sm hover:bg-red-600 hover:text-white transition-all duration-500 hover:tracking-[0.2em] min-w-[200px]"
          >
            Enter Vault
            <ArrowRight
              size={18}
              className="group-hover:translate-x-2 transition-transform"
            />
          </a>
          <a
            href="#contact"
            className="px-10 py-5 border border-white/20 text-white font-black italic uppercase tracking-widest text-sm hover:bg-white hover:text-black hover:border-white transition-all duration-500 text-center min-w-[200px]"
          >
            Secure Comms
          </a>
        </div>
      </div>

      {/* Floating Indicators */}
      <div className="mt-20 md:mt-32 flex flex-col md:flex-row md:items-center justify-between gap-8 w-full max-w-7xl border-t border-white/5 pt-8">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-[10px] font-bold hover:bg-red-600 hover:border-red-600 hover:text-black transition-all cursor-crosshair text-white">
            N
          </div>
          <div className="h-[1px] w-12 bg-white/20"></div>
          <span className="text-[10px] font-mono text-white/40 tracking-[0.3em] uppercase">
            Ready for Deployment
          </span>
        </div>

        <div className="text-left md:text-right group cursor-help">
          <div className="text-[10px] font-mono text-red-500 tracking-[0.3em] uppercase mb-2 group-hover:animate-pulse">
            Status: Combat Ready
          </div>
          <div className="w-48 h-1 bg-red-600/20 rounded-full overflow-hidden">
            <div className="w-[85%] h-full bg-red-600 group-hover:w-full transition-all duration-1000"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
