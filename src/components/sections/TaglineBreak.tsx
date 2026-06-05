import GoldRule from "@/components/ui/GoldRule";
import RevealWrapper from "@/components/ui/RevealWrapper";

export default function TaglineBreak() {
  return (
    <section className="bg-obs3 py-24 px-6 relative overflow-hidden">
      {/* Subtle radial gold glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 65% 80% at 50% 50%, rgba(184,148,42,0.055) 0%, transparent 70%)",
        }}
      />

      <RevealWrapper>
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <div className="flex justify-center mb-10">
            <GoldRule width={72} />
          </div>

          <blockquote>
            <p
              className="font-cormorant italic text-cream leading-tight"
              style={{ fontSize: "clamp(2rem, 5vw, 3.2rem)" }}
            >
              Not for everyone.{" "}
              <span className="text-gold">Built for a few.</span>
            </p>
          </blockquote>

          <div className="flex justify-center mt-10 mb-7">
            <GoldRule width={72} />
          </div>

          <p className="font-montserrat text-cream-dim text-[9px] uppercase tracking-[0.38em]">
            Driven by Distinction · Monarch Group LV
          </p>
        </div>
      </RevealWrapper>
    </section>
  );
}
