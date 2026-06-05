import Image from "next/image";
import CrownCrest from "@/components/ui/CrownCrest";
import GoldRule from "@/components/ui/GoldRule";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/estate-hero.png"
          alt="Luxury Las Vegas estate at dusk"
          fill
          priority
          className="object-cover"
          style={{ opacity: 0.55 }}
        />
        {/* Vertical gradient: strong top, lighter mid, strong bottom */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(8,8,8,0.92) 0%, rgba(8,8,8,0.3) 40%, rgba(8,8,8,0.3) 60%, rgba(8,8,8,0.88) 100%)",
          }}
        />
        {/* Radial vignette crushing edges */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 75% 75% at 50% 50%, transparent 25%, rgba(8,8,8,0.8) 100%)",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
        {/* Eyebrow with flanking lines */}
        <div
          className="flex items-center justify-center gap-4 mb-10 animate-fade-up"
          style={{ animationDelay: "0.2s" }}
        >
          <div className="h-px w-10 bg-gradient-to-r from-transparent to-gold opacity-70" />
          <span className="font-montserrat text-gold text-[9px] uppercase tracking-[0.32em]">
            Private Asset Placement · Las Vegas, Nevada
          </span>
          <div className="h-px w-10 bg-gradient-to-l from-transparent to-gold opacity-70" />
        </div>

        {/* Crown crest */}
        <div
          className="flex justify-center mb-6 animate-fade-up"
          style={{ animationDelay: "0.4s" }}
        >
          <CrownCrest size={90} priority />
        </div>

        {/* H1 */}
        <h1
          className="font-cinzel text-cream tracking-[0.2em] leading-none mb-2 animate-fade-up"
          style={{
            fontSize: "clamp(3rem, 8vw, 5.8rem)",
            animationDelay: "0.6s",
          }}
        >
          MONARCH
        </h1>

        {/* GROUP LV */}
        <div
          className="font-cinzel text-gold tracking-[0.35em] mb-8 animate-fade-up"
          style={{
            fontSize: "clamp(1.1rem, 2.8vw, 2.2rem)",
            animationDelay: "0.75s",
          }}
        >
          GROUP LV
        </div>

        {/* Gold rule */}
        <div
          className="flex justify-center mb-8 animate-fade-up"
          style={{ animationDelay: "0.85s" }}
        >
          <GoldRule width={180} />
        </div>

        {/* Tagline */}
        <p
          className="font-cormorant italic text-cream text-xl tab:text-2xl tracking-wide mb-4 animate-fade-up"
          style={{ animationDelay: "0.95s" }}
        >
          Discreetly Transitioning High-Value Assets for Select Clients
        </p>

        {/* Sub small caps */}
        <p
          className="font-montserrat text-gold text-[9px] uppercase tracking-[0.38em] mb-8 animate-fade-up"
          style={{ animationDelay: "1.05s" }}
        >
          Privacy · Prestige · Performance
        </p>

        {/* Body */}
        <p
          className="font-montserrat text-cream-dim text-[12px] leading-[1.95] tracking-[0.05em] max-w-[520px] mx-auto mb-10 animate-fade-up"
          style={{ animationDelay: "1.15s" }}
        >
          Monarch Group LV serves executors, trustees, probate attorneys, and high net worth
          individuals seeking a discreet, strategic approach to high-value asset transitions.
          Every engagement is handled with absolute discretion.
        </p>

        {/* CTAs */}
        <div
          className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up"
          style={{ animationDelay: "1.3s" }}
        >
          <a
            href="#contact"
            className="font-montserrat text-[10px] uppercase tracking-[0.22em] bg-gold text-obsidian px-8 py-4 hover:bg-gold-light transition-colors duration-300"
          >
            Request Private Consultation
          </a>
          <a
            href="#services"
            className="font-montserrat text-[10px] uppercase tracking-[0.22em] border border-[rgba(184,148,42,0.55)] text-cream-dim px-8 py-4 hover:border-gold hover:text-gold transition-all duration-300"
          >
            Our Services
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 animate-fade-up"
        style={{ animationDelay: "1.5s" }}
      >
        <span className="font-montserrat text-[8px] uppercase tracking-[0.4em] text-cream-dim">
          Scroll
        </span>
        <div className="w-px h-12 overflow-hidden bg-[rgba(184,148,42,0.2)]">
          <div
            className="w-full h-full bg-gold"
            style={{ animation: "scrollLine 2.2s ease infinite" }}
          />
        </div>
      </div>
    </section>
  );
}
