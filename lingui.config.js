/** @type {import('@lingui/conf').LinguiConfig} */
module.exports = {
  locales: ["en", "es", "fr"],
  sourceLocale: "en",
  catalogs: [
    {
      path: "<rootDir>/src/locales/{locale}/messages",
      include: ["src", "app"],
    },
  ],
  format: "po",
};
