import { Download, Menu, X } from "lucide-react";
import React, { useState } from "react";

interface NavbarProps {
  activeSection: string;
}

const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "HOME", href: "#home", id: "home" },
    { name: "ABOUT", href: "#about", id: "about" },
    { name: "SKILLS", href: "#skills", id: "skills" },
    // { name: "PROJECTS", href: "#projects", id: "projects" },
    { name: "CONTACT", href: "#contact", id: "contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/90 backdrop-blur-md border-b border-white/10">
      {/* Top Status Bar */}
      <div className="hidden md:flex justify-between items-center px-8 py-2 border-b border-white/5 bg-white/5">
        <div className="flex items-center gap-4">
          <span className="text-[10px] font-bold text-red-500 tracking-[0.2em]">
            UMANG PORTFOLIO // ACTIVE
          </span>
          <div className="w-24 h-[1px] bg-red-500/30"></div>
        </div>
        <div className="flex items-center gap-6 text-[10px] font-mono text-white/40 uppercase tracking-widest">
          <span>STABLE BUILD V4.0</span>
          <a href="#" className="hover:text-red-500 transition-colors">
            <Download size={12} strokeWidth={3} />
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex-shrink-0 flex items-center gap-2">
            <div className="w-8 h-8 bg-red-500 skew-x-[-15deg] flex items-center justify-center">
              <span className="text-black font-black text-xl italic skew-x-[15deg]">
                U
              </span>
            </div>
            <span className="text-xl font-black italic tracking-tighter text-white">
              UMANG<span className="text-red-500">.</span>DEV
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="flex items-baseline space-x-12">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  className={`text-[11px] font-black tracking-[0.3em] transition-all duration-300 relative group ${
                    activeSection === link.id
                      ? "text-red-500"
                      : "text-white/60 hover:text-white"
                  }`}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-white"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute w-full transition-all duration-300 bg-black border-b border-red-500/20 ${
          isMenuOpen
            ? "max-h-96 opacity-100 py-6"
            : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <div className="px-4 flex flex-col gap-4 text-center">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className={`text-sm font-black tracking-[0.2em] py-2 ${
                activeSection === link.id ? "text-red-500" : "text-white/60"
              }`}
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
