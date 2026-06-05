export default function SectionEyebrow({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p
      className={`font-montserrat text-gold text-[10px] uppercase tracking-[0.28em] mb-4 ${className}`}
    >
      {children}
    </p>
  );
}
