///<reference types='Cypress'/>
describe("First test", function() {
  
    it('first test case', function(){

        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
        cy.get(".search-keyword").type("ca");
        cy.wait(2000)
        //this will fail because there is one hidden element. Entire page is checked with this locator. There
        //therefore we use .classname:visible to by pass the hidden element.
        //     cy.get(".product:visible").should("have.length",4)
        
        //     //Parent child chaining. Product are only checked in .products class and not entire webpage
        //     cy.get(".products").find('.product').should("have.length",4)
        
        //    cy.get(".products").find('.product').eq(0).contains("ADD TO CART").click()


       //iterate over alist in DOM and select Cashews
       cy.get(".products").find('.product').each(($el,index,$list)=>{

        var vegText = $el.find('h4.product-name').text();
        if(vegText.includes("Cashews")){
            cy.wrap($el).find('button').click();
        }

       })
       //select the cart
       cy.get('img[alt="Cart"]').click();

       // click proceed to checkout button
       cy.get('.action-block').find('button').each(($el)=>{
        let btnText = $el.text();
        if(btnText == 'PROCEED TO CHECKOUT'){
            cy.get($el).click();
        }
       })
       // wait for new page to load
       cy.wait(2000)

       //click on place order button
       cy.get('.products').find('button').each(($el)=>{
        let placeOrderBtn = $el.text();
        if(placeOrderBtn == 'Place Order'){
            cy.get($el).click();
        }
       })

   
  

    })



})