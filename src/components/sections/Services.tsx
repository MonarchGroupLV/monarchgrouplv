import RevealWrapper from "@/components/ui/RevealWrapper";
import SectionEyebrow from "@/components/ui/SectionEyebrow";

const services = [
  {
    number: "01",
    title: "Estate Liquidation",
    body: "Full-service liquidation of high-value estates managed with absolute discretion. From initial valuation to final settlement, every detail handled privately.",
  },
  {
    number: "02",
    title: "Luxury Consignment",
    body: "Strategic consignment placement for fine jewelry, art, watches, and collectibles through our network of premium auction houses and private buyers.",
  },
  {
    number: "03",
    title: "Private Acquisitions",
    body: "Confidential acquisition services for select clients seeking to purchase or acquire specific categories of luxury assets outside of public channels.",
  },
  {
    number: "04",
    title: "Probate & Trust Services",
    body: "Expert guidance for executors, trustees, and probate attorneys navigating the private disposition of estate assets with fiduciary precision.",
  },
  {
    number: "05",
    title: "Auction Strategy",
    body: "Institutional-grade auction placement strategy leveraging relationships with Goldin, Julien's Auctions, and other premier houses to maximize realized value.",
  },
  {
    number: "06",
    title: "Valuation Advisory",
    body: "Independent valuation advisory for insurance, estate planning, and pre-sale strategy across all categories of collectible and investment-grade assets.",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-obs2 py-20 px-6 tab:py-28 tab:px-10">
      <div className="max-w-content mx-auto">
        <RevealWrapper>
          <div className="text-center mb-16">
            <SectionEyebrow>What We Do</SectionEyebrow>
            <h2 className="font-cinzel text-cream text-2xl tab:text-4xl tracking-[0.15em]">
              Our Services
            </h2>
          </div>
        </RevealWrapper>

        {/* Grid with 1px gold hairline gaps */}
        <div
          className="grid grid-cols-1 tab:grid-cols-3"
          style={{ gap: "1px", background: "rgba(184,148,42,0.15)" }}
        >
          {services.map((service, i) => (
            <RevealWrapper key={service.number} delay={i * 80}>
              <div className="group bg-obs2 p-10 relative overflow-hidden hover:bg-obs3 transition-colors duration-300 h-full flex flex-col">
                {/* Large faint number */}
                <div className="font-cormorant text-[4.5rem] leading-none text-gold opacity-[0.08] absolute top-3 right-5 select-none pointer-events-none">
                  {service.number}
                </div>

                {/* Gold underline: scaleX from left on hover */}
                <div className="absolute bottom-0 left-0 h-[2px] w-full bg-gold origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-[400ms] ease-out" />

                <h3 className="font-cinzel text-cream text-[12px] tracking-[0.2em] mb-4 relative z-10">
                  {service.title}
                </h3>
                <p className="font-montserrat text-cream-dim text-[11.5px] leading-[1.85] tracking-[0.04em] relative z-10">
                  {service.body}
                </p>
              </div>
            </RevealWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}
