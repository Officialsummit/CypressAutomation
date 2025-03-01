///<reference types='Cypress'/>

describe('Mouse hover handling', function(){
    this.beforeEach( function(){
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
    })

it('Handling mouse hover to see hidden items and click', () => {
    //grab the static dropdown locator
   cy.get('.mouse-hover-content').invoke('show')
   cy.get('a[href="#top"]').click();
   cy.url().should('include','#top')

});




})