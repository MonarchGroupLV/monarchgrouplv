import type { Metadata } from "next";
import { Cinzel, Cormorant_Garamond, Montserrat } from "next/font/google";
import "./globals.css";

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-cinzel",
  weight: ["400", "500", "600"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["300", "400"],
  style: ["normal", "italic"],
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Monarch Group LV — Private Asset Placement | Las Vegas",
  description:
    "Monarch Group LV discreetly transitions high-value assets for select clients. Luxury estate liquidation, private consignment, and auction strategy in Las Vegas, Nevada.",
  keywords: [
    "luxury estate liquidation Las Vegas",
    "private asset placement",
    "estate consignment Las Vegas",
    "probate estate services Nevada",
    "luxury consignment Las Vegas",
  ],
  openGraph: {
    title: "Monarch Group LV — Private Asset Placement",
    description: "Discreetly transitioning high-value assets for select clients.",
    url: "https://monarchgrouplv.com",
    siteName: "Monarch Group LV",
    locale: "en_US",
    type: "website",
  },
  icons: {
    apple: "/images/monarch-crest-sm.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${cinzel.variable} ${cormorant.variable} ${montserrat.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
