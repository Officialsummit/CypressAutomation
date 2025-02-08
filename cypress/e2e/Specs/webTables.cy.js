describe('Handling Web Tables', function(){
    this.beforeEach( function(){
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
    })

it('Can select nth element from web tables', () => {
    
    cy.get('table[id="product"] tr td').each(($el,index,$list)=>{
        //cy.log($el.text())
        if($el.text() == 'WebServices / REST API Testing with SoapUI'){
            cy.get($el).next().should('contain','35');
            cy.log(index);
        }
    })
    
   
    
})

});