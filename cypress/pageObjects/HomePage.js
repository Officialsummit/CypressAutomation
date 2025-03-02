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
    get checkOutPageText(){
        return cy.get('th');
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

    clickCheckout(){
        this.checkOutCount.click();
    }

    verifyProductCheckoutPage(pageTitle){
        this.checkOutPageText.each(($el,index)=>{
            if(index == 2){
              //cy.log(`${$el[index]}`.tex)
              cy.wrap($el[0]).should('have.text',pageTitle)
             
            }
    })
    }

    verifyProductPrices(firstProduct, secondProduct){
        let sum=0;
        cy.get("tr").each(($el,index)=>{          
          if($el.text().includes(firstProduct)||$el.text().includes(secondProduct)){
            cy.wrap($el).find("td").each(($td,index)=>{
              if(index == 3){                
                const priceText = `${$td.text().split(" ")[1]}`   
                cy.log(priceText)
                sum += Number(priceText);    
             
              }
            })      
           
          }
          
        }).then(()=>{
          cy.log(sum)
        })   
      
        cy.get("h3").eq(1).then(($el)=>{
          const totalPrice = $el.text().split(" ")[1]
          expect(totalPrice).to.eq(sum.toString())
        })
    }


    verifyAnyProductsPrices(productList){
        let sum=0;
        cy.get("tr").each(($el,index)=>{          
          if(productList.some(product =>$el.text().includes(product))){
            cy.wrap($el).find("td").each(($td,index)=>{
              if(index == 3){                
                const priceText = `${$td.text().split(" ")[1]}`   
                cy.log(priceText)
                sum += Number(priceText);    
             
              }
            })      
           
          }
          
        }).then(()=>{
          cy.log(sum)
        })   
      
        cy.get("h3").eq(1).then(($el)=>{
          const totalPrice = $el.text().split(" ")[1]
          expect(totalPrice).to.eq(sum.toString())
        })
    }

   
}

  

    

