
      const { defineConfig } = require('cypress');
      module.exports = defineConfig({
          reporter: 'cypress-mochawesome-reporter',
          e2e: {
              baseUrl: 'https://opensource-demo.orangehrmlive.com/',
              defaultCommandTimeout: 13000,
              viewportHeight: 900,
              viewportWidth: 1530,
              setupNodeEvents(on, config) {
                  require('cypress-mochawesome-reporter/plugin')(on);
              }
          }
      });
    