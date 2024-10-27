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
          "100%": { transform: "translateX(-70%)" }, // Moves left by 70% of the container width
        },
      },
      animation: {
        marquee: "marquee 13s linear infinite", // Animation for the marquee effect
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        playfair: ["Playfair Display", "serif"],
        dennis: ["Dennis Sans", "sans-serif"], // Add Dennis Sans
      },
      colors: {
        gray: {
          ...require("tailwindcss/colors").gray, // Include default gray colors
          custom: "#1C1D20", // Add custom gray color
        },
      },
    },
  },
  plugins: [],
};

export default config;
