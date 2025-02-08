describe("Automating Calender",()=>{
    it('Handling Calender', () => {

        const month = 'June'
        const monthNum = '6'
        const day = '20'
        const year = '2024'
        const expectedDate = [monthNum,day,year]
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#");
        cy.get('a[href="#/offers"]').invoke('removeAttr','target').click()
        cy.wait(1000)
        cy.get('.react-date-picker__inputGroup').click()
        cy.get('.react-calendar__navigation__label').click()
        cy.get('.react-calendar__navigation__label').click()
        cy.get('.react-calendar__decade-view__years__year').contains(year).click()
        cy.get('.react-calendar__year-view__months__month').contains(month).click()
        cy.get('.react-calendar__month-view__days__day').contains(day).click()
        cy.get('.react-date-picker__inputGroup__input').each(($el,index)=>{
            cy.wrap($el).invoke('val').should('eq',expectedDate[index])
        })
    });
})