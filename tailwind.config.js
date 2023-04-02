/** @type {import("tailwindcss").Config} */
module.exports = {
  content: ["./src/**/*.{html,js,vue,ts}", "./src/*.{html,js,vue,ts}"],
  theme: {
    extend: {
      transitionProperty: {
        DEFAULT:
          "padding, box-shadow,background-color, border-color, color, fill, stroke, opacity, transform",
        spacing: "padding",
      },
      colors: {
        app: {
          text: "#374151",
          textlighter: "#9ca3af",
          main: "#6366f1",
          accent: "#ef4444",
          mute: "#e5e7eb",
          background: "#f3f4f6",
        },
      },
    },
  },
  plugins: [],
  variants: {
    padding: ["hover", "focus", "responsive"],
    cursor: ["hover", "focus", "responsive"],
  },
};
