"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import CrownCrest from "@/components/ui/CrownCrest";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#process", label: "Process" },
  { href: "#ventures", label: "Ventures" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
          scrolled
            ? "bg-[rgba(8,8,8,0.97)] border-b border-[rgba(184,148,42,0.12)]"
            : "bg-gradient-to-b from-[rgba(8,8,8,0.75)] to-transparent"
        }`}
      >
        <div className="max-w-content mx-auto px-6 tab:px-10 h-20 flex items-center justify-between">
          {/* Brand */}
          <a href="#home" className="flex items-center gap-3 group">
            <CrownCrest size={26} />
            <div>
              <div className="font-cinzel text-cream text-[11px] tracking-[0.22em] group-hover:text-gold transition-colors duration-300">
                MONARCH GROUP LV
              </div>
              <div className="hidden sm:block text-[0.45rem] tracking-[0.35em] uppercase font-medium mt-0.5" style={{ color: '#B8942A' }}>
                PRIVATE ASSET PLACEMENT · NATIONWIDE
              </div>
            </div>
          </a>

          {/* Center nav links */}
          <ul className="hidden tab:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="font-montserrat text-[10px] uppercase tracking-[0.2em] text-cream-dim hover:text-gold transition-colors duration-300"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <a
            href="#contact"
            className="hidden tab:inline-flex font-montserrat text-[10px] uppercase tracking-[0.2em] text-gold border border-gold px-5 py-2.5 hover:bg-gold hover:text-obsidian transition-all duration-300"
          >
            Private Inquiry
          </a>

          {/* Hamburger */}
          <button
            className="tab:hidden flex flex-col gap-[5px] p-2 ml-2"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
          >
            <span className="block w-6 h-px bg-cream" />
            <span className="block w-6 h-px bg-cream" />
            <span className="block w-4 h-px bg-gold" />
          </button>
        </div>
      </nav>

      {/* Mobile overlay */}
      <div
        className={`fixed inset-0 z-[200] bg-obsidian flex flex-col items-center justify-center transition-opacity duration-300 ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <button
          className="absolute top-7 right-7 w-10 h-10 flex items-center justify-center text-cream-dim hover:text-gold transition-colors"
          onClick={() => setMenuOpen(false)}
          aria-label="Close menu"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M2 2L18 18M18 2L2 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </button>

        <div className="flex justify-center mb-8">
          <Image
            src="/images/monarch-logo.png"
            alt="Monarch Group LV"
            width={148}
            height={151}
            priority
          />
        </div>

        <ul className="flex flex-col items-center gap-8 mb-12">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="font-cinzel text-xl tracking-[0.28em] text-cream hover:text-gold transition-colors duration-300"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          onClick={() => setMenuOpen(false)}
          className="font-montserrat text-[11px] uppercase tracking-[0.25em] text-gold border border-gold px-10 py-3.5 hover:bg-gold hover:text-obsidian transition-all duration-300"
        >
          Private Inquiry
        </a>
      </div>
    </>
  );
}
