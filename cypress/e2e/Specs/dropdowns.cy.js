///<reference types='Cypress'/>

describe('Handling Dropdowns', function(){
    this.beforeEach( function(){
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
    })

it('Handling static Dropdowns', () => {
    //grab the static dropdown locator
    cy.get('#dropdown-class-example').select('Option2')
    cy.should('have.value','option2')

});

it('Handling Dynamic Dropdowns- Select Country Nepal', () => {
    //Type 'Ne' in the dropdown input box
    cy.get('#autocomplete').type('Ne')
    //grab the common locator of dropdownlist and select when text is 'Nepal'
    cy.get('#ui-id-1 .ui-menu-item').each(($el)=>{
        if($el.text()=='Nepal'){
            cy.get($el).click()
        }
    })

    //verify if Nepal is selected in the value of dropdown input
    cy.get('#autocomplete').should('have.value','Nepal');
});

it('Select the second last element of the dropdown-no matter the input', () => {
    //Type 'Ne' in the dropdown input box
    cy.get('#autocomplete').type('Ne')
    //grab the common locator of dropdownlist and select when text is 'Nepal'
    cy.get('#ui-id-1 .ui-menu-item').then(($list)=>{
        let secondLastValue = $list.length - 2 ;
        cy.get($list[secondLastValue]).click()
    })

    //Second last value is Ukrain in this case
    cy.get('#autocomplete').should('have.value','Ukraine')
    
});

})