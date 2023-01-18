const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "main-yellow": "#f2b10c",
        /* "main-yellow": "#1D418D" */
        "main-white": "#F5F5F5",
        "second-yellow": "#f2b10c",

        "main-black": "#6A778C",
        "main-blue": "#003DA5",
      },
    },
  },
  plugins: [],
});
