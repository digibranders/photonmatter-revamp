import { MapPin, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

export function GlobalPresence() {
  const locations = [
    "Ahmedabad (India)",
    "Dubai (UAE)",
    "Johannesburg (South Africa)",
    "New York (USA)"
  ];

  return (
    <section id="global-presence-section" className="py-32 bg-eterna-3 relative overflow-hidden">
      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-eterna-3 via-eterna-4/50 to-eterna-3 opacity-90" />

      <div className="container mx-auto px-4 md:px-8 relative z-10 text-center">
        <h2 className="text-3xl md:text-5xl font-medium tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40 mb-12 font-sans pb-1">
          Global <span className="font-serif italic font-light">Reach</span>. Local <span className="font-serif italic font-light">Impact</span>.
        </h2>
        
        <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-16">
          {locations.map((loc, index) => (
            <div key={index} className="flex items-center gap-3 px-8 py-4 rounded-full bg-white/5 border border-white/10 text-slate-200 hover:bg-white/10 transition-colors">
              <MapPin className="h-6 w-6 text-eterna-2" />
              <span className="font-medium text-lg">{loc}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
