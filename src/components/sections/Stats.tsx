import RevealWrapper from "@/components/ui/RevealWrapper";

const stats = [
  { value: "$24M+", label: "Assets Placed" },
  { value: "100+", label: "Estates Served" },
  { value: "Zero", label: "Public Exposure" },
  { value: "100%", label: "Discretion Guaranteed" },
];

export default function Stats() {
  return (
    <section className="bg-obs3 border-y border-[rgba(184,148,42,0.12)] py-14 px-6" >
      <div className="max-w-content mx-auto">
        <div className="flex flex-wrap justify-center gap-10 tab:gap-20">
          {stats.map((stat, i) => (
            <RevealWrapper key={stat.label} delay={i * 120}>
              <div className="text-center min-w-[130px]">
                <div className="font-cormorant text-gold text-[2.4rem] leading-none mb-2">
                  {stat.value}
                </div>
                <div className="font-montserrat text-cream-dim text-[0.52rem] uppercase tracking-[0.28em]">
                  {stat.label}
                </div>
              </div>
            </RevealWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}
