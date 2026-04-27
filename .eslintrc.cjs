module.exports = {
  root: true,
  extends: ["next/core-web-vitals"],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  rules: {
    "react/no-unescaped-entities": "off",
    "react/prop-types": "off",
  },
};
