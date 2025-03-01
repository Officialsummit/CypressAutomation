export class HomePage{
    //locators
    get productMainCards(){
        return cy.get('.card')
    }

    get cardTitle(){
        return cy.get('.card-title')
    }    

    get checkOutCount(){
        return cy.get('.active a')
    }


    ///Actions
    addproductToCard(productName,btnName){
       this.productMainCards.each(($mainCard)=>{
            cy.wrap($mainCard).find('.card-title').then(($title)=>{
             if($title.text().trim() == productName){
                cy.wrap($mainCard).contains('button',btnName).click();
             }
            })
            })
    }

    verifyCart(count){
        this.checkOutCount.should('include.text',`Checkout ( ${count} )`)
    }

}