///<reference types='Cypress'/>

describe('Handling new opened tab', function(){
    this.beforeEach( function(){
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
    })

it('Handling new opened tab', () => {

    cy.get('#opentab').then((el)=>{
        
        var newUrl = el.prop('href');
        expect(newUrl).to.equal('https://www.qaclickacademy.com/')
        cy.visit(newUrl) 
        cy.origin(newUrl,()=>{
            cy.get('div.sub-menu-bar a[href*="about"]').click()
        })
        
    })

    
  //cy.get('#opentab').invoke('attr','href').should('eq','https://www.qaclickacademy.com')

});




})