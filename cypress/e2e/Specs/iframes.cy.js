import 'cypress-iframe'

describe('frames testing',()=>{

it('Iframe Handling', () => {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");

    //load the fra first
    cy.frameLoaded('#courses-iframe')

    //after frame is loaded make sure you are inside frame using cy.frame()
    cy.iframe().find('a[href*="mentorship"]').eq(0).click()
    cy.wait(1000)
    cy.iframe().find('.pricing-title').should('have.length','2')
    
});

})