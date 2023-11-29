import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      screens: {
        "sm-max": { max: "639px" },
        "md-max": { max: "767px" },
        "lg-max": { max: "1023px" },
        "lgx-max": { max: "1050px" },
        "xl-max": { max: "1279px" },
        "sm2-max": { max: "716px" },
        "lg-between": { max: "1050px", min: "940px" },
        "xl-between": { max: "1279px", min: "1024px" },
      },
    },
  },
  plugins: [],
};
export default config;
