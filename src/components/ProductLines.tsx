import { Button } from "./ui/button";
import { ArrowRight, Smartphone, ShoppingBag, Building2 } from "lucide-react";

export function ProductLines() {
  // Bento Grid Style - Light
  return (
    <section className="py-32 bg-eterna-3/[0.02]">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-3xl mb-16">
          <h2 className="text-4xl md:text-5xl font-medium tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-eterna-3 to-eterna-3/60 mb-6 font-sans">
            Turn insights into <span className="font-serif italic font-light">action</span>: <br />
            <span className="text-eterna-3/50">Discover your <span className="font-serif italic font-light">lending edge</span>.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Card 1: Micro Lending */}
          <div className="p-10 rounded-[2.5rem] bg-white border border-eterna-2/10 shadow-xl shadow-eterna-3/5 flex flex-col justify-between h-full min-h-[400px] relative overflow-hidden group">
            <div className="relative z-10">
               <div className="flex items-center justify-start mb-6">
                <Smartphone className="h-10 w-10 text-eterna-1" />
              </div>
              <h3 className="text-2xl font-semibold tracking-tight text-eterna-3 mb-3 font-sans">Micro-Lending</h3>
              <p className="text-eterna-3/60 leading-relaxed max-w-md">
                Agile solutions for underserved markets. Scale fast with precision.
              </p>
            </div>
            
            {/* Visual Abstract */}
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-tl from-eterna-1/20 to-eterna-1/5 rounded-tl-[4rem] -mb-10 -mr-10 opacity-50 group-hover:scale-110 transition-transform duration-700" />
            <div className="relative z-10 mt-8">
               <Button variant="link" className="p-0 text-eterna-2 font-semibold hover:no-underline group-hover:translate-x-2 transition-transform">
                 Scale with PhotonMatters <ArrowRight className="ml-2 h-4 w-4" />
               </Button>
            </div>
          </div>

          {/* Card 2: Consumer & Retail */}
          <div className="p-10 rounded-[2.5rem] bg-white border border-eterna-2/10 shadow-xl shadow-eterna-3/5 flex flex-col justify-between h-full min-h-[400px] relative overflow-hidden group">
             <div className="relative z-10">
               <div className="flex items-center justify-start mb-6">
                <ShoppingBag className="h-10 w-10 text-eterna-2" />
              </div>
              <h3 className="text-2xl font-semibold tracking-tight text-eterna-3 mb-3 font-sans">Consumer & Retail</h3>
              <p className="text-eterna-3/60 leading-relaxed max-w-md">
                Flexible, AI-powered personal lending. BNPL, Lines of Credit, and more.
              </p>
            </div>
            
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-tl from-eterna-2/20 to-eterna-2/5 rounded-tl-[4rem] -mb-10 -mr-10 opacity-50 group-hover:scale-110 transition-transform duration-700" />
             <div className="relative z-10 mt-8">
               <Button variant="link" className="p-0 text-eterna-2 font-semibold hover:no-underline group-hover:translate-x-2 transition-transform">
                 Scale with PhotonMatters <ArrowRight className="ml-2 h-4 w-4" />
               </Button>
            </div>
          </div>

          {/* Card 3: Commercial (Full Width) */}
          <div className="lg:col-span-2 p-10 rounded-[2.5rem] bg-white border border-eterna-2/10 shadow-xl shadow-eterna-3/5 flex flex-col md:flex-row items-center justify-between gap-10 relative overflow-hidden group">
             <div className="relative z-10 max-w-lg">
               <div className="flex items-center justify-start mb-6">
                <Building2 className="h-10 w-10 text-eterna-5" />
              </div>
              <h3 className="text-2xl font-semibold tracking-tight text-eterna-3 mb-3 font-sans">Commercial Lending</h3>
              <p className="text-eterna-3/60 leading-relaxed mb-6">
                Scalable solutions for startups to enterprises. Fast, compliant, and intelligent credit delivery through configurable workflows.
              </p>
               <Button className="rounded-full px-8 h-12 bg-eterna-5 hover:bg-eterna-5/90 text-eterna-3 font-semibold">
                 Scale with PhotonMatters <ArrowRight className="ml-2 h-5 w-5" />
               </Button>
            </div>
            
            {/* Visual Abstract */}
            <div className="w-full md:w-1/3 h-48 md:h-full bg-gradient-to-l from-eterna-5/10 to-transparent rounded-l-3xl flex items-center justify-center">
               {/* Abstract Chart Graphic */}
               <div className="w-32 h-32 bg-eterna-5/20 rounded-2xl rotate-12 group-hover:rotate-6 transition-transform duration-500 shadow-lg" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
