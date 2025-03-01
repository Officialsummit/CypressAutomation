describe('Radio button and Element Visibility Demo',()=>{
    beforeEach(function(){
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
    })
    it('Element visible or Not test', () => {
        //initially visible
        cy.get('#displayed-text').should('be.visible')

        //should not visible when hide is clicked
        cy.get('#hide-textbox').click();
        cy.get('#displayed-text').should('not.be.visible')

        //should be visible when show is clicked
        cy.get('#show-textbox').click();
        cy.get('#displayed-text').should('be.visible')
    });


    it('Select radio Button', () => {
        //initially visible
        cy.get('[value="radio1"]').click()
        .should('be.checked')

        
    });
})