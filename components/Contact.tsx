/* eslint-disable react/jsx-no-comment-textnodes */
import { Mail, MapPin, Satellite } from "lucide-react";
import React, { useState } from "react";

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("MESSAGE RECEIVED. I WILL GET BACK TO YOU SOON.");
    setFormState({ name: "", email: "", message: "" });
  };

  return (
    <div className="container mx-auto px-4">
      <div className="flex flex-col lg:flex-row gap-20">
        <div className="lg:w-1/3">
          <div className="text-red-500 font-mono text-xs mb-4 tracking-[0.4em] uppercase">
            // CONTACT
          </div>
          <h2 className="text-5xl font-black italic mb-8 text-white">
            GET IN <br />
            <span className="text-red-600 underline decoration-4 underline-offset-8">
              TOUCH
            </span>
            .
          </h2>

          <div className="space-y-4 mt-12">
            <div className="p-6 border border-white/10 bg-white/5 relative">
              <div className="absolute top-2 right-4 text-[8px] font-mono text-white/20">
                EMAIL
              </div>
              <div className="text-red-500 text-[10px] uppercase font-black tracking-widest mb-2 flex items-center gap-2">
                <Mail size={12} /> Contact Email
              </div>
              <div className="text-white font-black italic text-lg">
                UMANG.DEV@GMAIL.COM
              </div>
            </div>

            <div className="p-6 border border-white/10 bg-white/5 relative">
              <div className="absolute top-2 right-4 text-[8px] font-mono text-white/20">
                LOCATION
              </div>
              <div className="text-red-500 text-[10px] uppercase font-black tracking-widest mb-2 flex items-center gap-2">
                <MapPin size={12} /> Work Location
              </div>
              <div className="text-white font-black italic text-lg">
                OPEN TO REMOTE WORK
              </div>
            </div>
          </div>
        </div>

        <div className="lg:w-2/3 bg-white/[0.02] border border-white/10 p-10 relative">
          <div className="absolute top-0 left-0 w-1 h-full bg-red-600"></div>

          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-white/40">
                  Your Name
                </label>
                <input
                  type="text"
                  value={formState.name}
                  onChange={(e) =>
                    setFormState({ ...formState, name: e.target.value })
                  }
                  className="w-full px-4 py-4 bg-black border border-white/10 text-white focus:border-red-600 focus:outline-none transition-all placeholder:text-white/10 font-bold italic"
                  placeholder="FULL NAME"
                  required
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-white/40">
                  Email Address
                </label>
                <input
                  type="email"
                  value={formState.email}
                  onChange={(e) =>
                    setFormState({ ...formState, email: e.target.value })
                  }
                  className="w-full px-4 py-4 bg-black border border-white/10 text-white focus:border-red-600 focus:outline-none transition-all placeholder:text-white/10 font-bold italic"
                  placeholder="EMAIL@EXAMPLE.COM"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-white/40">
                Your Message
              </label>
              <textarea
                rows={4}
                value={formState.message}
                onChange={(e) =>
                  setFormState({ ...formState, message: e.target.value })
                }
                className="w-full px-4 py-4 bg-black border border-white/10 text-white focus:border-red-600 focus:outline-none transition-all placeholder:text-white/10 font-bold italic"
                placeholder="HOW CAN I HELP YOU?"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-5 bg-red-600 hover:bg-red-500 text-black font-black italic uppercase tracking-[0.3em] transition-all flex items-center justify-center gap-4 group"
            >
              Send Message
              <Satellite
                size={20}
                className="group-hover:rotate-12 transition-transform"
              />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
