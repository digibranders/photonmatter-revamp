import { Twitter, Linkedin, Facebook, Youtube } from "lucide-react";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import logo from "figma:asset/a9b0b4597a60ecdb1a3540859afebd0c027bdbf5.png";

export function Footer() {
  return (
    <footer id="footer-section" className="bg-eterna-3 text-slate-400 py-20 relative overflow-hidden">
      
      {/* Large Watermark Text Background */}
      <div className="absolute bottom-0 left-0 w-full select-none pointer-events-none overflow-hidden">
        <h1 className="text-[15vw] font-bold text-white/[0.02] leading-none tracking-tighter text-center whitespace-nowrap font-sans">
          PHOTONMATTERS
        </h1>
      </div>

      {/* Pre-Footer CTA Card */}
      <div className="container mx-auto px-4 md:px-8 relative z-10 mb-24">
         <div className="bg-gradient-to-r from-eterna-2 to-eterna-4 rounded-[3rem] p-10 md:p-16 text-center shadow-2xl shadow-eterna-2/20">
            <h2 className="text-3xl md:text-5xl font-medium tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40 mb-6 font-sans">Unlike Any <span className="font-serif italic font-light">Lending Platform</span></h2>
            <p className="text-eterna-1 mb-10 max-w-2xl mx-auto text-lg">
               We rebuilt financial markets from the ground up using blockchain technologies. 
               All in the pursuit of the perfect lending experience.
            </p>
            <Button className="bg-white text-eterna-3 hover:bg-eterna-5 rounded-full px-8 h-12 font-bold">
              Get Started <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
         </div>
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-10 mb-20">
          {/* Brand Column */}
          <div className="col-span-2 lg:col-span-2 space-y-6">
            <div className="flex items-center gap-2 text-white">
              <img src={logo} alt="PhotonMatters" className="h-14 w-auto" />
            </div>
            <h3 className="text-2xl font-medium tracking-tighter text-white leading-tight max-w-xs font-sans">
              Discover your <br/> <span className="font-serif italic font-light">lending edge</span>.
            </h3>
            <div className="flex gap-4 pt-4">
              <SocialIcon icon={Facebook} />
              <SocialIcon icon={Linkedin} />
              <SocialIcon icon={Twitter} />
              <SocialIcon icon={Youtube} />
            </div>
          </div>

          {/* Links */}
          <div className="space-y-4">
            <h4 className="text-white font-semibold tracking-tight mb-4 font-sans">Platform</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">LOS</a></li>
              <li><a href="#" className="hover:text-white transition-colors">LMS</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Credit Scoring</a></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-white font-semibold tracking-tight mb-4 font-sans">Products</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Micro Lending</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Consumer</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Commercial</a></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-white font-semibold tracking-tight mb-4 font-sans">Company</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
            </ul>
          </div>

           <div className="space-y-4">
            <h4 className="text-white font-semibold tracking-tight mb-4 font-sans">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li>1701 Tower BB1, JLT, Dubai</li>
              <li>+971 526977485</li>
              <li>business@photonmatters.com</li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-600">
          <p>© 2025 Photon Matters. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-slate-400">Privacy Policy</a>
            <a href="#" className="hover:text-slate-400">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function SocialIcon({ icon: Icon }: any) {
  return (
    <a href="#" className="flex items-center justify-center hover:text-eterna-2 text-white transition-colors">
      <Icon className="h-6 w-6" />
    </a>
  );
}
