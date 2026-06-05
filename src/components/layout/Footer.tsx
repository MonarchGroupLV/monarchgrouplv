import Image from "next/image";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-obs3 border-t border-[rgba(184,148,42,0.2)]">
      <div className="max-w-content mx-auto px-6 tab:px-10 py-12">
        <div className="grid grid-cols-1 gap-8 text-center tab:grid-cols-3 tab:text-left">
          {/* Logo + address */}
          <div className="flex flex-col items-center tab:items-start">
            <Image
              src="/images/monarch-logo.png"
              alt="Monarch Group LV"
              width={110}
              height={112}
              className="mb-4 opacity-90"
            />
            <div className="font-montserrat text-[9px] text-cream-dim tracking-[0.1em] leading-relaxed">
              6130 W Flamingo Rd, Suite 409<br />
              Las Vegas, NV 89103
            </div>
          </div>

          {/* Nav links */}
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 tab:justify-center tab:items-start tab:pt-1">
            {["About", "Services", "Process", "Ventures", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="font-montserrat text-[10px] text-cream-dim uppercase tracking-[0.2em] hover:text-gold transition-colors duration-300"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className="tab:text-right">
            <p className="font-montserrat text-[9px] text-cream-dim tracking-[0.12em]">
              © {year} Monarch Group LV LLC
            </p>
            <p className="font-montserrat text-[9px] text-cream-dim tracking-[0.12em] mt-1">
              All Rights Reserved
            </p>
            <p className="font-montserrat text-[9px] text-cream-dim tracking-[0.1em] mt-3 opacity-50">
              Privacy · Prestige · Performance
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
