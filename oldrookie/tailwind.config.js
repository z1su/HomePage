/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/list/page.js",
    "./app/layout.js",
    "./app/list/layout.js",
    "./compnents/header/nav.js",
  ],
  theme: {
    backgroundImage: {
      title: "url('/img/title.png')",
      footer: "url('/img/footer.png')",
    },

    extend: {},
    // screens: {
    //   m: { min: "390px", max: "425px" },
    //   t: { min: "426px", max: "900px" },
    //   d: { min: "900px", max: "1440px" },
    //   dl: { min: "1440px" },
    // },
  },

  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light"],
  },
};
