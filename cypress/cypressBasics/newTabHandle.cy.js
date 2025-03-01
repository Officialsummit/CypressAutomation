///<reference types='Cypress'/>

describe('Handling Switching Tab', function(){
    this.beforeEach( function(){
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
    })

it('Can Switch Tab and verify new page', () => {
    //grab the buttons that open new tab locator and use invoke
    cy.get('#opentab').invoke('removeAttr','target').click();

    //verify we are on new domain tab
    //BUT directly below code(commented) will not work, we have to tell cypress that we changed the origin
    //cy.get('.support span').should('have.text','info@qaclickacademy.com')   

    //So we have to do like this
    cy.origin('https://www.qaclickacademy.com/',()=>{
        cy.get('.support span').should('contain','info@qaclickacademy.com')   
    })
   
    
});

});