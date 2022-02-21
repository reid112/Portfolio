/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution")

module.exports = {
  root: true,
  extends: ["plugin:vue/vue3-strongly-recommended", "eslint:recommended"],
  rules: {
    "semi": [1, "never"],
    "vue/max-attributes-per-line": ["error", {
      "singleline": {
        "max": 5
      },      
      "multiline": {
        "max": 5
      }
    }]
  },
  env: {
    "vue/setup-compiler-macros": true,
  },
}
