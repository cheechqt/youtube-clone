const options = {
  arrowParents: "avoid",
  singleQuote: false,
  bracketSpacing: true,
  endOfLine: "lf",
  semi: true,
  tabWidth: 2,
  trailingComma: "none"
  // npm install -D prettier-plugin-tailwindcss
  // plugins: [require("prettier-plugin-tailwindcss")],
  // npm install --save-dev @trivago/prettier-plugin-sort-imports
  // importOrder: [
  //   "react",
  //   "react-router-dom",
  //   "react-redux",
  //   "@reduxjs/toolkit",
  //   "rect-icons",
  //   `^(?!react|@redux|components|${`.\/`}|polished)`,
  //   "^[./]",
  // ],
  // importOrderSeparation: false,
  // importOrderSortSpecifiers: false,
};

module.exports = options;
