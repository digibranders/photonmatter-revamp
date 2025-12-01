import { Menu, FileText, Layout, PieChart, Wallet, Megaphone, Smartphone, User, Building2, Link, Landmark, Wifi, Factory, Zap, Download } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "./ui/navigation-menu";
import { cn } from "./ui/utils";
import logo from "figma:asset/a9b0b4597a60ecdb1a3540859afebd0c027bdbf5.png";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setScrolled(scrollY > 20);

      // Check for dark sections
      const darkSections = ["features-section", "global-presence-section", "footer-section"];
      let inDarkSection = false;
      const checkPoint = scrollY + 80; // Header height approx

      for (const id of darkSections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          const top = rect.top + window.scrollY;
          const bottom = rect.bottom + window.scrollY;

          if (checkPoint >= top && checkPoint <= bottom) {
            inDarkSection = true;
            break;
          }
        }
      }
      setIsDark(inDarkSection);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Dynamic Styles
  const headerClass = isDark
    ? "bg-eterna-3 text-white py-2 border-b border-white/10"
    : scrolled
      ? "bg-white text-eterna-3 py-2 border-b border-eterna-2/10"
      : "bg-transparent text-white py-4"; // Changed text-eterna-3 to text-white

  const navTriggerClass = isDark
    ? "bg-transparent text-white hover:text-white/80 font-medium focus:text-white focus:bg-white/10"
    : scrolled
      ? "bg-transparent text-eterna-3 hover:text-eterna-3/80 font-medium"
      : "bg-transparent text-white hover:text-white/80 font-medium"; // Added condition for not scrolled

  const buttonClass = isDark
    ? "bg-white hover:bg-eterna-5 text-eterna-3"
    : scrolled
      ? "bg-eterna-3 hover:bg-eterna-5 hover:text-eterna-3 text-white"
      : "bg-white hover:bg-gray-200 !text-black border-none"; // Changed for hero section

  const mobileButtonClass = isDark
    ? "text-white hover:bg-white/10"
    : scrolled
      ? "text-eterna-3 hover:bg-eterna-3/10"
      : "text-white hover:bg-white/10"; // Changed for hero section

  // Custom style matching the "Attio" reference (Pill shape on hover/active)
  // Added bg-transparent to override default bg-background from shadcn component
  const navItemClass = cn(
    "group inline-flex h-9 w-max items-center justify-center rounded-full px-4 py-2 text-sm font-medium transition-colors bg-transparent hover:bg-slate-100 hover:text-slate-900 focus:bg-slate-100 focus:text-slate-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-slate-100/50 data-[state=open]:bg-slate-100/50",
    isDark
      ? "text-white hover:bg-white/10 hover:text-white focus:bg-white/10 focus:text-white data-[active]:bg-white/10 data-[state=open]:bg-white/10"
      : scrolled
        ? "text-slate-600 hover:bg-slate-100 hover:text-slate-900 data-[active]:bg-slate-100 data-[state=open]:bg-slate-100"
        : "text-white hover:bg-white/20 hover:text-white data-[active]:bg-white/20 data-[state=open]:bg-white/20" // Added for hero section
  );

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${headerClass}`}
    >
      <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2 group">
          <img src={logo} alt="PhotonMatters" className="h-14 w-auto" />
        </a>

        {/* Desktop Nav - Centered & Styled like Attio */}
        <div className="hidden lg:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <NavigationMenu>
            <NavigationMenuList className="gap-2">
              <NavigationMenuItem>
                <NavigationMenuLink className={navItemClass} href="/">
                  Home
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className={navItemClass}>Platform</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    <ListItem href="#" title="Loan Origination (LOS)" icon={FileText}>AI-powered origination built for scale.</ListItem>
                    <ListItem href="#" title="Loan Management (LMS)" icon={Layout}>Smart lifecycle management.</ListItem>
                    <ListItem href="#" title="Credit Scoring" icon={PieChart}>Cognitive credit decisions.</ListItem>
                    <ListItem href="#" title="Collections" icon={Wallet}>Intelligent recovery.</ListItem>
                    <ListItem href="#" title="Campaigns" icon={Megaphone}>Adaptive lending campaigns.</ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className={navItemClass}>Products</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4">
                    <ListItem href="#" title="Micro Lending" icon={Smartphone}>For underserved markets.</ListItem>
                    <ListItem href="#" title="Consumer & Retail" icon={User}>Personal & embedded lending.</ListItem>
                    <ListItem href="#" title="Commercial Lending" icon={Building2}>For businesses of all sizes.</ListItem>
                    <ListItem href="#" title="Supply Chain Finance" icon={Link}>Anchor & buyer-led financing.</ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className={navItemClass}>Industries</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4">
                    <ListItem href="#" title="Banks & Alt Lenders" icon={Landmark} />
                    <ListItem href="#" title="Mobile Network Operators" icon={Wifi} />
                    <ListItem href="#" title="Manufacturers & Distributors" icon={Factory} />
                    <ListItem href="#" title="Power & Utility Providers" icon={Zap} />
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink className={navItemClass} href="/about">
                  About Us
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink className={navItemClass} href="/contact">
                  Contact
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <Button
            className={`rounded-full px-6 h-10 font-semibold transition-all shadow-lg ${buttonClass} ${isDark ? "" : "shadow-eterna-3/10"}`}
            style={(!scrolled && !isDark) ? { color: "black", backgroundColor: "white" } : {}}
          >
            <Download className={`mr-2 h-4 w-4 ${(!scrolled && !isDark) ? "text-black" : "currentColor"}`} /> Download Brochure
          </Button>
        </div>

        {/* Mobile Nav */}
        <div className="lg:hidden">
          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className={mobileButtonClass}>
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-white border-slate-100 text-slate-900 overflow-y-auto">
              <div className="flex flex-col gap-6 mt-8">
                <a href="#" className="flex items-center gap-2 mb-6">
                  <img src={logo} alt="PhotonMatters" className="h-12 w-auto" />
                </a>
                <a href="#" className="text-lg font-medium">Home</a>
                <div className="space-y-3">
                  <h4 className="text-sm font-semibold text-slate-500 uppercase">Platform</h4>
                  <a href="#" className="block text-slate-600 pl-4">LOS</a>
                  <a href="#" className="block text-slate-600 pl-4">LMS</a>
                  <a href="#" className="block text-slate-600 pl-4">Credit Scoring</a>
                  <a href="#" className="block text-slate-600 pl-4">Collections</a>
                  <a href="#" className="block text-slate-600 pl-4">Campaigns</a>
                </div>
                <div className="space-y-3">
                  <h4 className="text-sm font-semibold text-slate-500 uppercase">Products</h4>
                  <a href="#" className="block text-slate-600 pl-4">Micro Lending</a>
                  <a href="#" className="block text-slate-600 pl-4">Consumer & Retail</a>
                  <a href="#" className="block text-slate-600 pl-4">Commercial</a>
                  <a href="#" className="block text-slate-600 pl-4">Supply Chain Finance</a>
                </div>
                <a href="#" className="text-lg font-medium">About Us</a>
                <a href="#" className="text-lg font-medium">Contact Us</a>
                <Button className="w-full bg-slate-900 text-white rounded-full">
                  Download Brochure
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

const ListItem = ({ className, title, children, href, icon: Icon, ...props }: any) => {
  return (
    <li>
      <a
        href={href}
        className={cn(
          "block select-none rounded-xl p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-50 focus:bg-slate-50",
          className
        )}
        {...props}
      >
        <div className="flex items-start gap-3">
          {Icon && <Icon className="h-5 w-5 text-eterna-3 mt-0.5" />}
          <div>
            <div className="text-sm font-semibold leading-none text-slate-900">{title}</div>
            {children && (
              <p className="line-clamp-2 text-sm leading-snug text-slate-500 font-medium mt-1">
                {children}
              </p>
            )}
          </div>
        </div>
      </a>
    </li>
  );
};
