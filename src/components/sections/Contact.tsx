"use client";
import { useState } from "react";
import CrownCrest from "@/components/ui/CrownCrest";
import GoldRule from "@/components/ui/GoldRule";
import RevealWrapper from "@/components/ui/RevealWrapper";
import SectionEyebrow from "@/components/ui/SectionEyebrow";

const interests = [
  "Estate Liquidation",
  "Luxury Consignment",
  "Private Acquisitions",
  "Probate / Trust Services",
  "BitFinder Recovery Services",
  "Valuation Advisory",
  "General Inquiry",
];

type FormState = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  interest: string;
  message: string;
};

type SubmitStatus = "idle" | "loading" | "success" | "error";

const inputClass =
  "w-full bg-obs3 border border-[rgba(184,148,42,0.2)] text-cream font-montserrat text-[12px] px-4 py-3 focus:border-gold focus:outline-none transition-colors duration-200 disabled:opacity-40";

export default function Contact() {
  const [form, setForm] = useState<FormState>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    interest: "",
    message: "",
  });
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus("success");
      } else {
        const data = await res.json().catch(() => ({}));
        setErrorMessage(data.error || "Something went wrong. Please try again.");
        setStatus("error");
      }
    } catch {
      setErrorMessage("Network error. Please try again.");
      setStatus("error");
    }
  };

  const disabled = status === "loading" || status === "success";

  return (
    <section
      id="contact"
      className="bg-obsidian py-20 px-6 tab:py-28 tab:px-10 relative overflow-hidden"
    >
      {/* Radial gold glow top center */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full pointer-events-none"
        style={{
          height: "320px",
          background:
            "radial-gradient(ellipse 55% 100% at 50% 0%, rgba(184,148,42,0.07) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-[800px] mx-auto relative z-10">
        <RevealWrapper>
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <CrownCrest size={140} />
            </div>
            <SectionEyebrow>Reach Out</SectionEyebrow>
            <h2 className="font-cinzel text-cream text-2xl tab:text-4xl tracking-[0.22em] mb-5">
              PRIVATE INQUIRY
            </h2>
            <div className="flex justify-center mb-6">
              <GoldRule width={120} />
            </div>
            <p className="font-cormorant italic text-cream text-xl mb-4">
              Every significant transaction starts privately
            </p>
            <p className="font-montserrat text-cream-dim text-[11.5px] leading-[1.9] tracking-[0.04em] max-w-[520px] mx-auto">
              Share a few details and a member of the Monarch Group team will be in touch
              discreetly and promptly. No obligation. No public record. Every inquiry treated
              with absolute confidence.
            </p>
          </div>
        </RevealWrapper>

        <RevealWrapper delay={150}>
          <form onSubmit={handleSubmit} className="space-y-6" noValidate>
            {/* Name row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block font-montserrat text-[9px] uppercase tracking-[0.22em] text-cream-dim mb-2">
                  First Name <span className="text-gold">*</span>
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={form.firstName}
                  onChange={handleChange}
                  required
                  disabled={disabled}
                  className={inputClass}
                />
              </div>
              <div>
                <label className="block font-montserrat text-[9px] uppercase tracking-[0.22em] text-cream-dim mb-2">
                  Last Name <span className="text-gold">*</span>
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={form.lastName}
                  onChange={handleChange}
                  required
                  disabled={disabled}
                  className={inputClass}
                />
              </div>
            </div>

            {/* Email + Phone */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block font-montserrat text-[9px] uppercase tracking-[0.22em] text-cream-dim mb-2">
                  Email Address <span className="text-gold">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  disabled={disabled}
                  className={inputClass}
                />
              </div>
              <div>
                <label className="block font-montserrat text-[9px] uppercase tracking-[0.22em] text-cream-dim mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  disabled={disabled}
                  className={inputClass}
                />
              </div>
            </div>

            {/* Area of interest */}
            <div>
              <label className="block font-montserrat text-[9px] uppercase tracking-[0.22em] text-cream-dim mb-2">
                Area of Interest
              </label>
              <select
                name="interest"
                value={form.interest}
                onChange={handleChange}
                disabled={disabled}
                className={`${inputClass} appearance-none cursor-pointer`}
              >
                <option value="">Select an area of interest</option>
                {interests.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </div>

            {/* Message */}
            <div>
              <label className="block font-montserrat text-[9px] uppercase tracking-[0.22em] text-cream-dim mb-2">
                Message
              </label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={5}
                disabled={disabled}
                className={`${inputClass} resize-none`}
              />
            </div>

            {/* Error */}
            {status === "error" && (
              <p className="font-montserrat text-red-400 text-[11px] tracking-[0.05em]">
                {errorMessage}
              </p>
            )}

            {/* Submit */}
            <button
              type="submit"
              disabled={disabled}
              className="w-full bg-gold text-obsidian font-montserrat text-[10px] uppercase tracking-[0.28em] py-4 hover:bg-gold-light transition-colors duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {status === "loading"
                ? "Submitting..."
                : status === "success"
                ? "Inquiry Received — We Will Be in Touch"
                : "Submit Private Inquiry"}
            </button>
          </form>
        </RevealWrapper>

        {/* Contact info row */}
        <RevealWrapper delay={200}>
          <div className="mt-16 pt-8 border-t border-[rgba(184,148,42,0.15)] grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            <div>
              <div className="font-montserrat text-[8px] uppercase tracking-[0.28em] text-gold mb-2">
                Office
              </div>
              <div className="font-montserrat text-cream-dim text-[11px] leading-relaxed">
                6130 W Flamingo Rd, Suite 409
                <br />
                Las Vegas, NV 89103
              </div>
            </div>
            <div>
              <div className="font-montserrat text-[8px] uppercase tracking-[0.28em] text-gold mb-2">
                Direct
              </div>
              <div className="font-montserrat text-cream-dim text-[11px]">702.816.6835</div>
            </div>
            <div>
              <div className="font-montserrat text-[8px] uppercase tracking-[0.28em] text-gold mb-2">
                Email
              </div>
              <div className="font-montserrat text-cream-dim text-[11px]">
                concierge@monarchgrouplv.com
              </div>
            </div>
          </div>
        </RevealWrapper>

        <RevealWrapper delay={250}>
          <p className="font-montserrat text-[8px] uppercase tracking-[0.28em] text-gold text-center mt-8">
            References available upon request.
          </p>
        </RevealWrapper>
      </div>
    </section>
  );
}
