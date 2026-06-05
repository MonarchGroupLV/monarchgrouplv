import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        tab: "900px",
      },
      colors: {
        gold: "#B8942A",
        "gold-light": "#D4AC4A",
        "gold-bright": "#E2C97E",
        "gold-dim": "#7A6018",
        obsidian: "#080808",
        obs2: "#0F0F0F",
        obs3: "#141414",
        obs4: "#1C1C1C",
        obs5: "#242424",
        cream: "#EDE5D0",
        "cream-dim": "#A89870",
      },
      fontFamily: {
        cinzel: ["var(--font-cinzel)", "serif"],
        cormorant: ["var(--font-cormorant)", "serif"],
        montserrat: ["var(--font-montserrat)", "sans-serif"],
      },
      maxWidth: {
        content: "1200px",
      },
    },
  },
  plugins: [],
};
export default config;
