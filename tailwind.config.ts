import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background:  "var(--background)",
        foreground:  "var(--foreground)",
        border:      "var(--border)",
        muted: {
          DEFAULT:    "var(--muted)",
          foreground: "var(--muted-foreground)",
        },
        primary: {
          DEFAULT:    "var(--primary)",
          foreground: "var(--primary-foreground)",
        },
        card: {
          DEFAULT:    "var(--card)",
          foreground: "var(--card-foreground)",
        },
        brand: "var(--brand)",
        // Legacy aliases kept so existing components don't break
        "deep-red":        "#8B0000",
        "background-light":"var(--background)",
        "surface-light":   "var(--card)",
      },
      fontFamily: {
        sans:  ["var(--font-inter)",             "ui-sans-serif", "system-ui"],
        serif: ["var(--font-instrument-serif)",   "Georgia",       "serif"],
      },
      borderRadius: {
        DEFAULT: "4px",
      },
      container: {
        center:  true,
        padding: "1rem",
        screens: { "2xl": "1400px" },
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
  ],
} satisfies Config;
