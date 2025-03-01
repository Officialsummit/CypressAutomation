///<reference types = "Cypress"/>

import { HomePage } from "../../../pageObjects/HomePage";
import { LoginPage } from "../../../pageObjects/LoginPage";
import { goToUrl } from "../../../support/utils";

describe("HomePage Suite", function () {
  const loginPage = new LoginPage();
  const homePage = new HomePage();
  let testData;

  before(function () {
    cy.fixture("example").then(function (data) {
      testData = data;
    });
  });
  this.beforeEach(function () {
    cy.visit(goToUrl("login_url"));
    loginPage.doLogin(testData.login.username,testData.login.password,testData.login.userType)
  });

  it("verify HomePage navigation", function () {
      loginPage.verifyPage(
      testData.productPage.shopName,goToUrl("homepage_url")
    );
  });

  it("Can Select Product and Add to Cart", function () {
    homePage.addproductToCard(testData.productPage.productName,testData.productPage.addBtnName);
    homePage.verifyCart(testData.productPage.productCountShouldBe)
    
    })
it("can Checkout the added product from Cart",function(){
    homePage.addproductToCard(testData.productPage.productName,testData.productPage.addBtnName);
    
})
     
     
  });

