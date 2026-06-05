import RevealWrapper from "@/components/ui/RevealWrapper";
import SectionEyebrow from "@/components/ui/SectionEyebrow";

const steps = [
  {
    roman: "I",
    title: "Private Consultation",
    body: "A confidential conversation to understand the scope of your estate, your objectives, and the level of discretion required.",
  },
  {
    roman: "II",
    title: "Expert Valuation",
    body: "Independent, institutional-grade valuation by category specialists to establish fair market and realized value benchmarks.",
  },
  {
    roman: "III",
    title: "Strategic Placement",
    body: "Targeted placement through the right channel — private sale, auction house, or collector network — to maximize outcome.",
  },
  {
    roman: "IV",
    title: "Seamless Settlement",
    body: "Clean, documented settlement with full accounting delivered to your attorney or trustee. No loose ends.",
  },
];

export default function Process() {
  return (
    <section id="process" className="bg-obs2 py-20 px-6 tab:py-28 tab:px-10">
      <div className="max-w-content mx-auto">
        <RevealWrapper>
          <SectionEyebrow>How It Works</SectionEyebrow>
          <h2 className="font-cinzel text-cream text-2xl tab:text-4xl tracking-[0.15em] mb-16">
            The Process
          </h2>
        </RevealWrapper>

        <div className="relative">
          {/* Connecting gold hairline — desktop only */}
          <div className="hidden tab:block absolute top-8 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[rgba(184,148,42,0.28)] to-transparent" />

          <div className="grid grid-cols-1 tab:grid-cols-2 lg:grid-cols-4 gap-12 tab:gap-8">
            {steps.map((step, i) => (
              <RevealWrapper key={step.roman} delay={i * 150}>
                <div>
                  {/* Roman numeral circle */}
                  <div className="flex justify-start tab:justify-center mb-6">
                    <div className="w-16 h-16 rounded-full border border-gold flex items-center justify-center bg-obs2 relative z-10 shrink-0">
                      <span className="font-cinzel text-gold text-sm tracking-[0.18em]">
                        {step.roman}
                      </span>
                    </div>
                  </div>
                  <h3 className="font-cinzel text-cream text-[11px] tracking-[0.2em] mb-3 tab:text-center">
                    {step.title}
                  </h3>
                  <p className="font-montserrat text-cream-dim text-[11.5px] leading-[1.85] tracking-[0.04em] tab:text-center">
                    {step.body}
                  </p>
                </div>
              </RevealWrapper>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
