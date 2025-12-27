/* eslint-disable react/jsx-no-comment-textnodes */
import { Cpu, Github, Linkedin, Twitter } from "lucide-react";
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="relative z-10 bg-black border-t border-red-600/30 pt-16 pb-8 overflow-hidden">
      {/* Background Grid Accent */}
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#ff003c 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }}
      ></div>

      <div className="container mx-auto px-4 relative">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-12 mb-16">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-red-600 flex items-center justify-center skew-x-[-15deg]">
                <span className="text-black font-black text-2xl italic skew-x-[15deg]">
                  U
                </span>
              </div>
              <div>
                <h3 className="text-2xl font-black italic tracking-tighter text-white uppercase leading-none">
                  UMANG<span className="text-red-600">.</span>DEV
                </h3>
                <p className="text-[9px] font-mono text-white/30 tracking-[0.4em] uppercase mt-1">
                  Web Developer
                </p>
              </div>
            </div>
            <p className="text-white/40 text-xs max-w-xs leading-relaxed italic">
              Specialized in modern web development. Building responsive and
              scalable applications since 2023.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-12 lg:gap-24">
            <div className="space-y-4">
              <div className="text-red-500 font-mono text-[10px] tracking-[0.3em] uppercase underline decoration-red-600/30 underline-offset-4">
                Quick Links
              </div>
              <ul className="space-y-2 text-[11px] font-bold text-white/40 uppercase italic">
                <li className="hover:text-red-500 transition-colors cursor-pointer tracking-widest">
                  <a href="#home">Home</a>
                </li>
                <li className="hover:text-red-500 transition-colors cursor-pointer tracking-widest">
                  <a href="#about">About</a>
                </li>
                {/* <li className="hover:text-red-500 transition-colors cursor-pointer tracking-widest">
                  <a href="#projects">Projects</a>
                </li> */}
              </ul>
            </div>
            <div className="space-y-4">
              <div className="text-red-500 font-mono text-[10px] tracking-[0.3em] uppercase underline decoration-red-600/30 underline-offset-4">
                Connect
              </div>
              <div className="flex gap-4">
                <a
                  href="https://github.com/umangmangaroliya"
                  target="_blank"
                  className="w-8 h-8 border border-white/10 flex items-center justify-center text-white/60 hover:bg-red-600 hover:text-black transition-all group"
                >
                  <Github
                    size={16}
                    className="group-hover:rotate-12 transition-transform"
                  />
                </a>
                <a
                  href="https://www.linkedin.com/in/umangmangaroliya"
                  target="_blank"
                  className="w-8 h-8 border border-white/10 flex items-center justify-center text-white/60 hover:bg-red-600 hover:text-black transition-all group"
                >
                  <Linkedin
                    size={16}
                    className="group-hover:-rotate-12 transition-transform"
                  />
                </a>
                <a
                  href="#"
                  target="_blank"
                  className="w-8 h-8 border border-white/10 flex items-center justify-center text-white/60 hover:bg-red-600 hover:text-black transition-all group"
                >
                  <Twitter size={16} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* System Readout Bar */}
        <div className="border border-white/10 bg-white/[0.02] p-4 flex flex-col md:flex-row justify-between items-center gap-4 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-[1px] bg-red-600/20 animate-[scan-vertical_4s_linear_infinite]"></div>

          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-[9px] font-mono text-white/40 uppercase tracking-widest">
                Status: Online
              </span>
            </div>
          </div>

          <div className="text-center text-[10px] font-black italic text-white/60 tracking-widest uppercase">
            © {new Date().getFullYear()} // UMANG DEV // MADE WITH LOVE & REACT
          </div>

          <div className="hidden md:flex items-center gap-2 text-[9px] font-mono text-red-500 font-bold uppercase tracking-tighter">
            <Cpu size={12} />
            <span>Version: 4.0.0</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
