import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Features() {
  // Dark Section
  return (
    <section id="features-section" className="py-32 bg-eterna-3 text-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="text-eterna-1 font-medium tracking-wide uppercase text-xs mb-3 block">Features</span>
          <h2 className="text-4xl md:text-5xl font-medium tracking-tighter mb-6 font-sans text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40">
            Unified Lending Platform. <br />
            <span className="text-eterna-1/60">Built for <span className="font-serif italic font-light">Scale</span>.</span>
          </h2>
          <p className="text-eterna-1/60 text-lg">
            Everything you need to launch, scale, and innovate in Lending.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <DarkCard 
            title="Loan Origination System" 
            description="Accelerate loan approvals with AI-powered origination. Fast, flexible, and built for scale."
            tag="LOS"
            image="https://images.unsplash.com/photo-1624095992068-0df95616484f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaW50ZWNoJTIwZGlnaXRhbCUyMHRhYmxldCUyMGRhcmslMjBwdXJwbGV8ZW58MXx8fHwxNzY0NTcyOTA2fDA&ixlib=rb-4.1.0&q=80&w=1080"
          />
          <DarkCard 
            title="Loan Management System" 
            description="Automate the entire loan lifecycle from disbursement to collections with precision."
            tag="LMS"
            image="https://images.unsplash.com/photo-1617880726918-4c862e74c826?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaW5hbmNpYWwlMjBkYXRhJTIwZGFzaGJvYXJkJTIwZGFyayUyMGFlc3RoZXRpY3xlbnwxfHx8fDE3NjQ1NzI5MDZ8MA&ixlib=rb-4.1.0&q=80&w=1080"
          />
          <DarkCard 
            title="Credit Scoring Engine" 
            description="Cognitive credit decisions using traditional and alternative data for fairer lending."
            tag="AI"
            image="https://images.unsplash.com/photo-1764336312138-14a5368a6cd3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwYWJzdHJhY3QlMjBwdXJwbGUlMjBuZXR3b3JrfGVufDF8fHx8MTc2NDU3MjkwNnww&ixlib=rb-4.1.0&q=80&w=1080"
          />
          <DarkCard 
            title="Supply Chain Finance" 
            description="Anchor-led, buyer-led, and deep-tier financing with intelligent workflows."
            tag="SCF"
            image="https://images.unsplash.com/photo-1640529494825-4add7eed660e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXBwbHklMjBjaGFpbiUyMGxvZ2lzdGljcyUyMGFic3RyYWN0JTIwZGlnaXRhbHxlbnwxfHx8fDE3NjQ1NzI5MDZ8MA&ixlib=rb-4.1.0&q=80&w=1080"
          />
          <DarkCard 
            title="Collections Suite" 
            description="AI-driven segmentation and prioritization to improve recovery and reduce friction."
            tag="Recovery"
            image="https://images.unsplash.com/photo-1762279389045-110301edeecc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwbmV0d29yayUyMGNvbm5lY3Rpb24lMjBhYnN0cmFjdCUyMHB1cnBsZXxlbnwxfHx8fDE3NjQ1NzI5MDZ8MA&ixlib=rb-4.1.0&q=80&w=1080"
          />
          <DarkCard 
            title="Campaign Management" 
            description="Design, target, and automate lending campaigns across every channel."
            tag="Growth"
            image="https://images.unsplash.com/photo-1618044733300-9472054094ee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaW5hbmNpYWwlMjBncm93dGglMjBjaGFydCUyMGFic3RyYWN0JTIwZGFya3xlbnwxfHx8fDE3NjQ1NzI5MDd8MA&ixlib=rb-4.1.0&q=80&w=1080"
          />
        </div>
      </div>
    </section>
  );
}

function DarkCard({ title, description, tag, image }: any) {
  return (
    <div className="group relative p-8 rounded-3xl bg-eterna-4/20 border border-white/10 hover:border-eterna-2/50 overflow-hidden backdrop-blur-sm h-full flex flex-col transition-all duration-500 hover:shadow-2xl hover:shadow-eterna-2/10 hover:-translate-y-1">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0 pointer-events-none">
          {/* Dark overlay that fades out on hover */}
          <div className="absolute inset-0 bg-eterna-3 z-10 transition-opacity duration-500 opacity-100 group-hover:opacity-60" />
          
          {/* Gradient for text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-eterna-3 via-transparent to-transparent z-10 opacity-80" />
          
          {/* Image itself */}
          <ImageWithFallback 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover opacity-30 group-hover:opacity-100 transition-all duration-700 transform scale-100 group-hover:scale-110 filter grayscale group-hover:grayscale-0"
          />
      </div>

      <div className="relative z-20 flex flex-col h-full">
        <div className="flex items-start justify-end mb-6">
           <span className="px-3 py-1 rounded-full text-xs font-medium bg-white/5 text-eterna-1 border border-white/5">
            {tag}
          </span>
        </div>
        
        <h3 className="text-xl font-bold text-white mb-3 pr-8">{title}</h3>
        <p className="text-white/60 text-sm leading-relaxed mb-6 flex-grow">
          {description}
        </p>
        
        <div className="flex items-center text-white/80 text-sm font-medium mt-auto group-hover:text-eterna-1 transition-colors">
          Explore Feature <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </div>
      </div>
    </div>
  );
}
