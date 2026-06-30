import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: "#1F3A56",
          ivory: "#FAF9F6",
          beige: "#EBC79A",
          gray: "#F2F2F2",
          ink: "#222222",
        },
      },
      boxShadow: {
        soft: "0 18px 45px rgba(31, 58, 86, 0.08)",
      },
    },
  },
  plugins: [],
};

export default config;
