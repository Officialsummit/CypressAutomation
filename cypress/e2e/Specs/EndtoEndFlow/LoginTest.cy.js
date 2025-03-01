///<reference types="Cypress"/>


import { LoginPage } from "../../../pageObjects/LoginPage";


describe("End to End Ecommerce Test", function () {
const loginPage = new LoginPage();
let testData;
  //load data
  beforeEach(function () {
    cy.fixture('example').then((data)=>{
        testData= data;
    })
 
  });

  it('Veridy login', function(){
    const baseUrl = Cypress.config('baseUrl')
    cy.visit('/loginpagePractise/');
    loginPage.doLogin(testData.login.username,testData.login.password,testData.login.userType)
    loginPage.verifyPage(testData.productPage.shopName,`${baseUrl}/angularpractice/shop`)
       

  })


});
