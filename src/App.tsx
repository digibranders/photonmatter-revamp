import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Mission } from "./components/Mission";
import { Solution } from "./components/Solution";
import { Features } from "./components/Features";
import { ProductLines } from "./components/ProductLines";
import { Testimonials } from "./components/Testimonials";
import { PlatformCapabilities } from "./components/PlatformCapabilities";
import { GlobalPresence } from "./components/GlobalPresence";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-eterna-3 flex flex-col selection:bg-eterna-1 selection:text-eterna-3">
      <Header />
      <main className="flex-1">
        <Hero />
        <Mission />
        <Solution />
        {/* Dark Section */}
        <Features /> 
        {/* Light Bento Grid */}
        <ProductLines />
        <PlatformCapabilities />
        <Testimonials />
        <GlobalPresence />
      </main>
      <Footer />
    </div>
  );
}

export default App;
