const postcssCustompProperties = require("postcss-custom-properties");

module.exports = {
  plugins: [
    postcssCustompProperties({
      importFrom: "src/assets/scss/variable.scss"
    })
  ]
};
