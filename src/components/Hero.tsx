import { Button } from "./ui/button";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-32 pb-20 overflow-hidden bg-black">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
        {/* Overlay for better text visibility */}
        <div className="absolute inset-0 bg-black/60" />

        {/* Large subtle gradient blob to simulate the purple wave - kept for style but adjusted */}
        <div className="absolute top-0 right-0 w-[80vw] h-[80vh] bg-gradient-to-bl from-eterna-1/20 via-eterna-2/10 to-transparent rounded-bl-full blur-3xl opacity-30" />
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-medium tracking-tighter leading-[1.05] text-white mb-8 font-sans pb-2">
              Built to <span className="font-serif italic font-light">Disrupt</span>. <br />
              Engineered for <span className="font-serif italic font-light">Scale</span>.
            </h1>

            <p className="text-xl md:text-2xl text-white mb-10 max-w-xl leading-relaxed font-medium">
              Shattering the Old Playbook of Lending – For B2B, B2C, and Beyond.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="h-12 px-8 bg-white hover:bg-gray-200 text-black text-lg rounded-full font-semibold shadow-xl shadow-white/10 border-none">
                Design your Lending Stack <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
