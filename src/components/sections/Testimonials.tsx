import RevealWrapper from "@/components/ui/RevealWrapper";
import SectionEyebrow from "@/components/ui/SectionEyebrow";
import { testimonials } from "@/data/testimonials";

function StarRow() {
  return (
    <div className="flex gap-1 mb-6">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden="true">
          <path
            d="M6.5 1L7.98 4.47L11.75 4.77L9.02 7.14L9.87 10.84L6.5 8.84L3.13 10.84L3.98 7.14L1.25 4.77L5.02 4.47L6.5 1Z"
            fill="#B8942A"
          />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-obsidian py-20 px-6 tab:py-28 tab:px-10">
      <div className="max-w-content mx-auto">
        <RevealWrapper>
          <div className="text-center mb-16">
            <SectionEyebrow>What Clients Say</SectionEyebrow>
            <h2 className="font-cinzel text-cream text-2xl tab:text-4xl tracking-[0.15em]">
              Trusted by Those Who Expect More
            </h2>
          </div>
        </RevealWrapper>

        <div className="grid grid-cols-1 tab:grid-cols-3 gap-6">
          {testimonials.map((testimonial, i) => (
            <RevealWrapper key={testimonial.id} delay={i * 120}>
              <div className="border-t-2 border-gold pt-8 px-7 pb-8 bg-obs3 h-full flex flex-col">
                <StarRow />

                <blockquote className="font-cormorant italic text-cream text-lg leading-relaxed mb-6 flex-1">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>

                <div>
                  <div className="font-cinzel text-cream text-[10px] tracking-[0.2em] mb-1">
                    {testimonial.name}
                  </div>
                  <div className="font-montserrat text-cream-dim text-[9px] uppercase tracking-[0.22em]">
                    {testimonial.role}
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
