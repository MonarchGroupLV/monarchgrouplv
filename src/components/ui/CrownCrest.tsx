"use client";
import Image from "next/image";
import { useState } from "react";

// monarch-crest.png native dimensions: 673 × 577
const CREST_H_RATIO = 577 / 673;

export default function CrownCrest({
  size = 90,
  className = "",
  priority = false,
}: {
  size?: number;
  className?: string;
  priority?: boolean;
}) {
  const [failed, setFailed] = useState(false);
  const h = Math.round(size * CREST_H_RATIO);

  if (failed) {
    return <CrownCrestSVG size={size} className={className} />;
  }

  return (
    <Image
      src="/images/monarch-crest.png"
      alt="Monarch Group LV crest"
      width={size}
      height={h}
      className={className}
      onError={() => setFailed(true)}
      priority={priority}
    />
  );
}

function CrownCrestSVG({ size, className }: { size: number; className: string }) {
  const h = Math.round((size / 90) * 110);
  return (
    <svg
      width={size}
      height={h}
      viewBox="0 0 90 110"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M9 57 L9 44 L21 51 L33 28 L45 8 L57 28 L69 51 L81 44 L81 57 Z"
        fill="#B8942A"
      />
      <rect x="9" y="57" width="72" height="9" fill="#B8942A" />
      <line x1="9" y1="58" x2="81" y2="58" stroke="#E2C97E" strokeWidth="0.5" opacity="0.35" />
      <circle cx="9" cy="44" r="3" fill="#E2C97E" />
      <circle cx="33" cy="28" r="3" fill="#E2C97E" />
      <circle cx="45" cy="8" r="4" fill="#E2C97E" />
      <circle cx="57" cy="28" r="3" fill="#E2C97E" />
      <circle cx="81" cy="44" r="3" fill="#E2C97E" />
      <path
        d="M13 66 L13 88 Q13 104 45 110 Q77 104 77 88 L77 66 Z"
        stroke="#B8942A"
        strokeWidth="1.5"
        fill="rgba(184,148,42,0.04)"
      />
      <line x1="13" y1="84" x2="77" y2="84" stroke="#B8942A" strokeWidth="0.75" opacity="0.45" />
      <line x1="45" y1="66" x2="45" y2="84" stroke="#B8942A" strokeWidth="0.75" opacity="0.45" />
      <path
        d="M25 103 L25 87 L45 98 L65 87 L65 103"
        stroke="#B8942A"
        strokeWidth="1.5"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
