import { Check } from "lucide-react";

export function PlatformCapabilities() {
  const sections = [
    {
      title: "One Platform. Infinite Possibilities.",
      items: [
        "Configure and manage diverse Lending products - from Microfinance to SME.",
        "Modular by design: LOS, LMS, Product Engine, Business Rules, and GL.",
        "Enable digital Lending journeys from onboarding to disbursement."
      ]
    },
    {
      title: "Open, Agile, and Built for Scale.",
      items: [
        "API-first architecture connects to credit bureaus and fraud engines.",
        "Mobile + Web omni-channel experiences - fully brandable.",
        "Multilingual customer support via SMS, WhatsApp, and Email."
      ]
    },
    {
      title: "Deployment Without the Drag.",
      items: [
        "On-prem or cloud - go live in just 8 weeks.",
        "Scales to over 250,000 requests/hour with enterprise-grade performance.",
        "Built-in collections module with AI/ML-powered recovery."
      ]
    }
  ];

  return (
    <section className="py-24 bg-white border-t border-slate-100">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {sections.map((section, index) => (
            <div key={index} className="space-y-6">
              <h3 className="text-xl font-medium tracking-tighter text-slate-900 border-l-4 border-violet-500 pl-4 font-sans">
                {section.title}
              </h3>
              <ul className="space-y-4">
                {section.items.map((item, i) => (
                  <li key={i} className="flex gap-3 items-start text-slate-600">
                    <div className="mt-1 flex items-center justify-center shrink-0">
                      <Check className="h-5 w-5 text-violet-600" />
                    </div>
                    <span className="leading-relaxed text-sm font-medium">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
