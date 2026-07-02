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
            <h2 className="font-cinzel text-cream text-2xl tab:text-4xl tracking-[0.12em] mb-6 leading-snug">
              A Different Kind of{" "}
              <em className="font-cormorant not-italic italic text-gold">
                Luxury Broker
              </em>
            </h2>

            <blockquote className="border-l-2 border-gold pl-5 mb-8 mt-2">
              <p className="font-cormorant italic leading-relaxed" style={{ fontSize: "1.2rem", color: "#EDE5D0" }}>
                There&rsquo;s a reason you&rsquo;ve never heard of us.
              </p>
              <p className="font-cormorant italic leading-relaxed" style={{ fontSize: "1.2rem", color: "#EDE5D0" }}>
                The clients who need us most prefer it that way.
              </p>
            </blockquote>

            <p className="font-montserrat text-cream-dim text-[12px] leading-[1.95] tracking-[0.04em] mb-5">
              Monarch Group LV was built on a single premise: extraordinary assets deserve
              extraordinary representation. We specialize in the confidential placement of fine
              jewelry, timepieces, artwork, antiques, rare collectibles, and curated high-value
              interiors — through a vetted network of qualified buyers who value discretion as
              much as you do.
            </p>

            <p className="font-montserrat text-cream-dim text-[12px] leading-[1.95] tracking-[0.04em] mb-5">
              Every engagement is handled with absolute discretion. No estate sale signs. No
              strangers walking through your property. No public exposure tied to your name or
              address. Assets remain securely in your possession while strategic placement is
              executed behind the scenes.
            </p>

            <p className="font-montserrat text-cream-dim text-[12px] leading-[1.95] tracking-[0.04em]">
              Founded by Quinton &ldquo;Kevin&rdquo; Westbrook, based in Las Vegas for nearly two decades with
              deep institutional relationships across major auction houses, private estates, and the
              collector marketplace. Available wherever exceptional estates require exceptional representation.
            </p>
          </div>
        </RevealWrapper>
      </div>
    </section>
  );
}
