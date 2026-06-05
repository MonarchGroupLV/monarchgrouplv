import Image from "next/image";
import RevealWrapper from "@/components/ui/RevealWrapper";
import SectionEyebrow from "@/components/ui/SectionEyebrow";

export default function About() {
  return (
    <section
      id="about"
      className="bg-obsidian py-20 px-6 tab:py-28 tab:px-10"
    >
      <div className="max-w-content mx-auto grid grid-cols-1 tab:grid-cols-2 gap-12 tab:gap-28 items-center">
        {/* Left: Image panel */}
        <RevealWrapper>
          <div className="relative h-[400px] tab:h-[500px] border border-[rgba(184,148,42,0.2)]">
            <Image
              src="/images/estate-hero.png"
              alt="Luxury Las Vegas estate"
              fill
              className="object-cover"
              style={{ opacity: 0.35, filter: "sepia(0.2) contrast(1.1)" }}
            />
            {/* Corner accents */}
            <div className="absolute top-4 left-4 w-10 h-10 border-t border-l border-gold opacity-60 pointer-events-none" />
            <div className="absolute bottom-4 right-4 w-10 h-10 border-b border-r border-gold opacity-60 pointer-events-none" />
            {/* Location badge */}
            <div className="absolute top-5 left-5 z-10">
              <span className="font-montserrat text-[8px] uppercase tracking-[0.24em] text-gold border border-[rgba(184,148,42,0.6)] px-3 py-1.5 bg-obsidian bg-opacity-80">
                Las Vegas, Nevada
              </span>
            </div>
          </div>
        </RevealWrapper>

        {/* Right: Copy */}
        <RevealWrapper delay={160}>
          <div>
            <SectionEyebrow>About the Firm</SectionEyebrow>
            <h2 className="font-cinzel text-cream text-2xl tab:text-4xl tracking-[0.12em] mb-8 leading-snug">
              A Different Kind of{" "}
              <em className="font-cormorant not-italic italic text-gold">
                Luxury Broker
              </em>
            </h2>

            <p className="font-montserrat text-cream-dim text-[12px] leading-[1.95] tracking-[0.04em] mb-5">
              Monarch Group LV operates at the intersection of discretion and strategy. We
              specialize in the private placement of high-value assets — rare collectibles, fine
              jewelry, luxury vehicles, estate art, and investment-grade assets — for clients who
              demand results without public exposure.
            </p>

            <p className="font-montserrat text-cream-dim text-[12px] leading-[1.95] tracking-[0.04em] mb-5">
              Our process is built around protecting both the asset and the client. No public
              advertising. No estate sale signage. Assets remain securely in your possession
              while strategic placement is executed behind the scenes through our network of
              auction houses, private collectors, and institutional buyers.
            </p>

            <p className="font-montserrat text-cream-dim text-[12px] leading-[1.95] tracking-[0.04em] mb-8">
              Founded by Quinton &ldquo;Kevin&rdquo; Westbrook, Monarch Group LV brings together expertise in
              estate management, private sales, and auction strategy. Every engagement is handled
              with the precision and discretion that significant assets deserve.
            </p>

            <blockquote className="border-l-2 border-gold pl-6 mb-10">
              <p className="font-cormorant italic text-cream text-lg tab:text-xl leading-relaxed">
                &ldquo;The traditional estate sale was never designed for estates like yours.
                Monarch Group was.&rdquo;
              </p>
            </blockquote>

            {/* Partner row */}
            <div className="flex items-center gap-6">
              <div>
                <div className="font-cormorant text-gold text-xl italic">Goldin</div>
                <div className="font-montserrat text-[8px] text-cream-dim uppercase tracking-[0.22em]">
                  0% Seller Fee
                </div>
              </div>
              <div className="w-px h-8 bg-[rgba(184,148,42,0.3)]" />
              <div>
                <div className="font-cormorant text-gold text-xl italic">
                  Julien&rsquo;s Auctions
                </div>
                <div className="font-montserrat text-[8px] text-cream-dim uppercase tracking-[0.22em]">
                  Strategic Partner
                </div>
              </div>
            </div>
          </div>
        </RevealWrapper>
      </div>
    </section>
  );
}
