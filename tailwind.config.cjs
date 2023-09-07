const starlightPlugin = require("@astrojs/starlight-tailwind");

// Generated color palettes
const accent = {
  200: "#00ffff",
  600: "#2bf5f8",
  900: "#2a2e54",
  950: "#1e2239",
};
const gray = {
  100: "#f4f6fd",
  200: "#eaedfb",
  300: "#bdc1d2",
  400: "#838aa9",
  500: "#505673",
  700: "#313651",
  800: "#20253e",
  900: "#04051a",
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: { accent, gray },
    },
  },
  plugins: [starlightPlugin()],
};
