import RevealWrapper from "@/components/ui/RevealWrapper";
import SectionEyebrow from "@/components/ui/SectionEyebrow";

const ventures = [
  {
    abbr: "VLB",
    name: "Vegas Luxury Broker",
    description:
      "High-value asset brokerage serving the Las Vegas metropolitan area with specialized expertise in collectibles, jewelry, and estate liquidation.",
    status: "Active",
    statusClass: "text-emerald-400",
  },
  {
    abbr: "LIQ",
    name: "LogiQ Labs",
    description:
      "Technology and analytics division supporting data-driven valuation, market intelligence, and operational infrastructure across Monarch Group ventures.",
    status: "Active",
    statusClass: "text-emerald-400",
  },
  {
    abbr: "BFR",
    name: "BitFinder",
    description:
      "Specialized digital asset recovery services for estates containing cryptocurrency, hardware wallets, and digital holdings requiring forensic expertise.",
    status: "Recovery Services",
    statusClass: "text-gold",
  },
  {
    abbr: "S2S",
    name: "Snap2Sold",
    description:
      "Streamlined mobile-first platform enabling rapid photography, cataloging, and consignment submission for estate assets at scale.",
    status: "In Development",
    statusClass: "text-cream-dim",
  },
];

export default function Ventures() {
  return (
    <section id="ventures" className="bg-obs3 py-20 px-6 tab:py-28 tab:px-10">
      <div className="max-w-content mx-auto grid grid-cols-1 tab:grid-cols-2 gap-16 items-start">
        {/* Left: Text */}
        <RevealWrapper>
          <div>
            <SectionEyebrow>Our Ventures</SectionEyebrow>
            <h2 className="font-cinzel text-cream text-2xl tab:text-4xl tracking-[0.12em] mb-8 leading-snug">
              Monarch Group
              <br />
              <span className="text-gold">Is the Umbrella</span>
            </h2>
            <p className="font-montserrat text-cream-dim text-[12px] leading-[1.95] tracking-[0.04em] mb-5">
              Monarch Group LV is the parent entity for a suite of specialized ventures
              operating across asset placement, technology, and digital recovery services.
            </p>
            <p className="font-montserrat text-cream-dim text-[12px] leading-[1.95] tracking-[0.04em]">
              Each venture maintains the same standard of discretion and precision that defines
              the Monarch brand — delivering distinct value across complementary disciplines.
            </p>
          </div>
        </RevealWrapper>

        {/* Right: Cards */}
        <div className="flex flex-col gap-3">
          {ventures.map((venture, i) => (
            <RevealWrapper key={venture.abbr} delay={i * 100}>
              <div className="group border border-[rgba(184,148,42,0.12)] bg-obs4 p-6 hover:border-[rgba(184,148,42,0.5)] hover:bg-obs5 transition-all duration-300 relative overflow-hidden">
                {/* Gold left border animates on hover */}
                <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-gold origin-center scale-y-0 group-hover:scale-y-100 transition-transform duration-300" />

                <div className="flex items-start gap-4">
                  {/* Abbreviation box */}
                  <div className="shrink-0 w-12 h-12 border border-[rgba(184,148,42,0.3)] flex items-center justify-center">
                    <span className="font-cinzel text-gold text-[9px] tracking-[0.18em]">
                      {venture.abbr}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-3 mb-1.5">
                      <h3 className="font-cinzel text-cream text-[12px] tracking-[0.15em]">
                        {venture.name}
                      </h3>
                      <span
                        className={`font-montserrat text-[8px] uppercase tracking-[0.22em] shrink-0 ${venture.statusClass}`}
                      >
                        {venture.status}
                      </span>
                    </div>
                    <p className="font-montserrat text-cream-dim text-[11px] leading-[1.75] tracking-[0.04em]">
                      {venture.description}
                    </p>
                  </div>
                </div>
              </div>
            </RevealWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}
