const { defineConfig } = require("cypress");

module.exports = defineConfig({
  defaultCommandTimeout: 6000,
  
  env:{    
    base_url:'https://rahulshettyacademy.com',
    login_url:"/loginpagePractise/",
    homepage_url:"/angularpractice/shop" 
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },

  },
});
