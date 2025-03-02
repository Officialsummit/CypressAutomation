///<reference types = "cypress"/>

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
beforeEach(function () {
    cy.visit(goToUrl("login_url"));
    loginPage.doLogin(testData.login.username,testData.login.password,testData.login.userType)
  });

  it("verify HomePage navigation", function () {
      loginPage.verifyPage(
      testData.productPage.shopName,goToUrl("homepage_url")
    );
  });

  it("Can Select Product and Add to Cart", function () {
    homePage.addproductToCard(testData.productPage.productName.first,testData.productPage.addBtnName);
    homePage.verifyCart("1")
    
    })
it("can Checkout the added product from Cart",function(){
    homePage.addproductToCard(testData.productPage.productName.first,testData.productPage.addBtnName);
    homePage.addproductToCard(testData.productPage.productName.second,testData.productPage.addBtnName);
    homePage.verifyCart("2")
    homePage.clickCheckout();
    homePage.verifyProductCheckoutPage(testData.checkoutPage.tableHeading)     
     
    })
it("Verify the Total Price equal to sum of selected Poducts prices",function(){
  homePage.addproductToCard(testData.productPage.productName.first,testData.productPage.addBtnName);
  homePage.addproductToCard(testData.productPage.productName.second,testData.productPage.addBtnName);
  homePage.verifyCart("2")
  homePage.clickCheckout();
  homePage.verifyProductCheckoutPage(testData.checkoutPage.tableHeading)
  homePage.verifyProductPrices(testData.productPage.productName.first,testData.productPage.productName.second);
  
})

it("Verify the Total Price equal to any number of products",function(){
  homePage.addproductToCard(testData.productPage.productName.first,testData.productPage.addBtnName);
  homePage.addproductToCard(testData.productPage.productName.second,testData.productPage.addBtnName);
  homePage.addproductToCard(testData.productPage.productName.third,testData.productPage.addBtnName);
  homePage.verifyCart("3")
  homePage.clickCheckout();
  homePage.verifyProductCheckoutPage(testData.checkoutPage.tableHeading)
  homePage.verifyAnyProductsPrices([testData.productPage.productName.first,testData.productPage.productName.second,testData.productPage.productName.third]);


})


    

     
     
  });

