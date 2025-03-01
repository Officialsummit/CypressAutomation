///<reference types='Cypress'/>

describe('Handling Alert popups', function(){
    this.beforeEach( function(){
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
    })

it('Window Alert popups message verify', () => {
    //grab the static dropdown locator
    cy.get('#name').type('AlertTest');
    cy.get('#alertbtn').click();

    //Note: Cypress auto accepts the window popups.

    //event
    cy.on('window:alert',function(alertStr){
        expect(alertStr).to.equal('Hello AlertTest, share this practice page and share your knowledge')
    })
    

});

});