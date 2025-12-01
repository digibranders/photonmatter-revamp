import { Quote } from "lucide-react";

export function Testimonials() {
  const testimonials = [
    {
      quote: "PhotonMatters transformed our Lending operations. We launched Micro, Consumer, and Commercial products in under six weeks thanks to their flexible platform.",
      author: "Chief Credit Officer",
      role: "Zambia based lending firm"
    },
    {
      quote: "PhotonMatters scaled effortlessly with our B2B, B2C, and e-commerce Lending. It's a world-class platform backed by a responsive, expert team.",
      author: "Business Manager",
      role: "Enterprise SCF Firm"
    },
    {
      quote: "PhotonMatters moves fast – and pushes you to move faster. Their platform adapted seamlessly to our complex products and aggressive growth.",
      author: "CEO",
      role: "Middle East Lending Firm"
    }
  ];

  return (
    <section className="py-32 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-medium tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-eterna-3 to-eterna-3/60 mb-4 font-sans">Trusted by <span className="font-serif italic font-light">Leaders</span></h2>
          <p className="text-eterna-3/50">See what our partners are saying.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <div key={index} className="bg-eterna-3/[0.03] p-10 rounded-[2rem] relative hover:shadow-lg transition-shadow duration-300">
              <div className="mb-8">
                <Quote className="h-12 w-12 text-eterna-1/40" />
              </div>
              <p className="text-eterna-3/80 text-lg font-medium leading-relaxed mb-8">
                "{t.quote}"
              </p>
              <div>
                <div className="text-eterna-3 font-semibold tracking-tight font-sans">{t.author}</div>
                <div className="text-sm text-eterna-2 font-semibold">{t.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
