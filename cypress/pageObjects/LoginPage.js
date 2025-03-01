export class LoginPage {
  //locators
  get fieldUsername() {
    return cy.get("#username");
  }
  get fieldPassword() {
    return cy.get("#password");
  }
  get dropDownUserType() {
    return cy.get('select[class="form-control"]');
  }
  get checkTerms(){
    return cy.get('input[type="checkbox"]')
  }
  get btnSignIn(){
    return cy.get("#signInBtn")
  }

  get h1bannerHomePage(){
    return cy.get('h1');
  }



  //Actions
  enterUsername(username) {
    this.fieldUsername.type(username);
  }
  enterPassword(password) {
    this.fieldPassword.type(password);
  }

  selctUserType(user){
    this.dropDownUserType.select(user);
  }
  checkTermsandCondition(){
    this.checkTerms.check();
  }
  clickLogin(){
    this.btnSignIn.click();
  }

  verifyPage(homepageName,url){
    this.h1bannerHomePage.should('have.text',homepageName)
    cy.url().should('eq',url)
  }

  doLogin(username,password,userType){
    this.enterUsername(username)
    this.enterPassword(password)
    this.selctUserType(userType)
    this.checkTermsandCondition()
    this.clickLogin();
  }



}




