const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});

module.exports = defineConfig({
  projectId: 'jt5p16',
  e2e: {
    baseUrl: 'http://lojaebac.ebaconline.art.br/' ,
  },
});