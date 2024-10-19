/// <reference types = 'Cypress'/>

beforeEach(() => {
  cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
});
describe("Checkboxes testing", () => {
  it("Static Checkboxes Test", function () {
    //select the first checkbox and verified it's checked
    cy.get("#checkBoxOption1")
      .check()
      .should("be.checked")
      .and("have.value", "option1");

    //other checkbox should not be checked
    cy.get("#checkBoxOption2").should("not.be.checked");
    cy.get("#checkBoxOption3").should("not.be.checked");

    //should have 3 checkboxes
    cy.get("#checkbox-example").find("input").should("have.length", 3);
  });

  it("Select All checkboxes", function () {
    //select all the checkboxes and verified it's checked
    cy.get("#checkbox-example input").check();

    cy.get("#checkBoxOption2").should("be.checked");
    cy.get("#checkBoxOption2").should("be.checked");
    cy.get("#checkBoxOption3").should("be.checked");
  });

  it("Uncheck All checkboxes", function () {
    //let check first
    cy.get("#checkbox-example input").check();

    //another way to check/uncheck all checkbox at once by giving values in array
    cy.get("#checkbox-example input").uncheck([
      "option1",
      "option2",
      "option3",
    ]);
    cy.get("#checkBoxOption2").should("not.be.checked");
    cy.get("#checkBoxOption2").should("not.be.checked");
    cy.get("#checkBoxOption3").should("not.be.checked");
  });
});
