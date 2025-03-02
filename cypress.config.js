const { defineConfig } = require("cypress");

module.exports = defineConfig({
  defaultCommandTimeout: 6000,
  reporter:'cypress-mochawesome-reporter',
  reporterOptions:{
    charts:true,
  },
  video:true,
  env:{    
    base_url:'https://rahulshettyacademy.com',
    login_url:"/loginpagePractise/",
    homepage_url:"/angularpractice/shop" 
  },
  e2e: {
      setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);

      

    },

  },
});
