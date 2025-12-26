/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";

const About: React.FC = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="flex flex-col lg:flex-row items-center gap-16">
        <div className="relative group w-full lg:w-1/2 max-w-md">
          <div className="absolute -inset-2 bg-red-600/20 blur opacity-50 group-hover:opacity-100 transition duration-500"></div>
          <div className="relative aspect-square border-2 border-white/10 bg-black p-4 flex items-center justify-center">
            <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-red-600"></div>
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-red-600"></div>
            <img
              src="/images/umang.jpg"
              alt="Umang"
              className="w-full h-full object-contain"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 p-6 bg-red-600 text-black font-black italic skew-x-[-12deg]">
            <div className="text-3xl skew-x-[12deg]">03</div>
            <div className="text-[10px] uppercase tracking-tighter skew-x-[12deg]">
              Years Experience
            </div>
          </div>
        </div>

        <div className="w-full lg:w-1/2">
          <div className="text-red-500 font-mono text-xs mb-4 tracking-[0.4em] uppercase">
            // ABOUT ME
          </div>
          <h2 className="text-5xl md:text-6xl font-black italic mb-8 tracking-tighter text-white">
            BUILDING MODERN{" "}
            <span className="text-red-600 underline decoration-4 underline-offset-8">
              EXPERIENCES
            </span>
            .
          </h2>

          <p className="text-white/60 text-lg leading-relaxed mb-6 font-medium">
            I am a Full Stack Developer specializing in the MERN stack. For over
            3 years, I have been focused on creating fast, scalable, and
            responsive web applications that solve real-world problems.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-white/10 pt-8 mt-8">
            <div className="border-l-2 border-red-600 pl-4">
              <h4 className="text-white font-black italic text-sm mb-2 uppercase">
                My Vision
              </h4>
              <p className="text-white/40 text-sm">
                I believe in writing clean, maintainable code that prioritizes
                user experience and performance.
              </p>
            </div>
            <div className="border-l-2 border-red-600 pl-4">
              <h4 className="text-white font-black italic text-sm mb-2 uppercase">
                My Mission
              </h4>
              <p className="text-white/40 text-sm">
                To bridge the gap between complex backend systems and intuitive
                frontend interfaces.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
