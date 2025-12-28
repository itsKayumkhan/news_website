import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(circle at top, #1e293b, #020617)",
        "gradient-premium":
          "linear-gradient(135deg, hsl(var(--primary)), hsl(var(--accent)))",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        background: "hsl(222 47% 6%)",
        foreground: "hsl(210 40% 96%)",

        card: {
          DEFAULT: "hsl(222 47% 9%)",
          foreground: "hsl(210 40% 96%)",
        },

        popover: {
          DEFAULT: "hsl(222 47% 10%)",
          foreground: "hsl(210 40% 96%)",
        },

        primary: {
          DEFAULT: "hsl(217 91% 60%)", // premium blue
          foreground: "hsl(222 47% 11%)",
        },

        secondary: {
          DEFAULT: "hsl(262 83% 58%)", // violet
          foreground: "hsl(210 40% 98%)",
        },

        accent: {
          DEFAULT: "hsl(190 95% 50%)", // cyan glow
          foreground: "hsl(222 47% 11%)",
        },

        muted: {
          DEFAULT: "hsl(217 19% 27%)",
          foreground: "hsl(215 20% 65%)",
        },

        destructive: {
          DEFAULT: "hsl(0 84% 60%)",
          foreground: "hsl(210 40% 98%)",
        },

        border: "hsl(217 19% 27%)",
        input: "hsl(217 19% 27%)",
        ring: "hsl(217 91% 60%)",

        chart: {
          "1": "hsl(217 91% 60%)",
          "2": "hsl(262 83% 58%)",
          "3": "hsl(190 95% 50%)",
          "4": "hsl(142 71% 45%)",
          "5": "hsl(0 84% 60%)",
        },
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.25s ease-out",
        "accordion-up": "accordion-up 0.25s ease-out",
      },
      boxShadow: {
        premium:
          "0 10px 30px -10px hsl(var(--primary) / 0.35)",
        glow:
          "0 0 40px hsl(var(--accent) / 0.45)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
