///<reference types="cypress"/>


import { LoginPage } from "../../../pageObjects/LoginPage";
import { goToUrl } from "../../../support/utils";


describe("Login Test", function () {
const loginPage = new LoginPage();
let testData;
  //load data
  beforeEach(function () {
    cy.fixture('example').then((data)=>{
        testData= data;
    })
 
  });

  it('Verify User login', function(){
    cy.visit(goToUrl("login_url"));
    loginPage.doLogin(testData.login.username,testData.login.password,testData.login.userType)
    loginPage.verifyPage(testData.productPage.shopName,goToUrl('homepage_url'))
       

  })


});
