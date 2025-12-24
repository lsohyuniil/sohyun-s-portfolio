/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#2563EB",
        primaryHover: "#1E40AF",
        textMain: "#111827",
        textSub: "#374151",
      },
    },
  },
  plugins: [],
};
