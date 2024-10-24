import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-47.5%)" }, // Move left by 50% (half the container's width)
        },
      },
      animation: {
        marquee: "marquee 15s linear infinite", // Default for larger screens
      },
    },
  },
  plugins: [],
};

export default config;
