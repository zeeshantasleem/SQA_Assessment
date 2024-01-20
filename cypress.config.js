const { defineConfig } = require("cypress");
const webpack = require("@cypress/webpack-preprocessor");
const { addCucumberPreprocessorPlugin, } = require("@badeball/cypress-cucumber-preprocessor");

async function setupNodeEvents(on, config) {
  await addCucumberPreprocessorPlugin(on, config);

  on(
    "file:preprocessor",
    webpack({
      webpackOptions: {
        resolve: {
          extensions: [".ts", ".js"],
        },
        module: {
          rules: [
            {
              test: /\.feature$/,
              use: [
                {
                  loader: "@badeball/cypress-cucumber-preprocessor/webpack",
                  options: config,
                },
              ],
            },
            {
              test: /\.json$/,
              use: 'json-loader',
              type: 'javascript/auto',
            }
          ],
        },
      },
    })
  );
  return config
}

module.exports = defineConfig({
  e2e: {
    viewportHeight: 1000,
    viewportWidth: 1280,
    specPattern: "cypress/e2e/features/*/*.feature",
    setupNodeEvents,
    baseUrl: "http://staysucasa.com",
  },
});
