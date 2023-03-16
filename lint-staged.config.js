module.exports = {
  "*.{js,jsx,ts,tsx}": ["yarn lint", "eslint --fix ."],
  "**/*.ts?(x)": () => "yarn run check-types",
  "*.json": ["prettier --write"]
};
