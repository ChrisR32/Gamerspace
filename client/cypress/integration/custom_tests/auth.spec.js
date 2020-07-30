/// <reference types="cypress" />

context('Auth', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/')
    })

    it('when forum is clicked redirect to forum', () => {
        cy.contains('Forum').click()
        cy.url().should('eq', 'http://localhost:3000/category/')
      })

    it('when contact is clicked directed to the contact page', () => {
        cy.contains('Contact').click()
        cy.url().should('eq', 'http://localhost:3000/contact')
    })

    it('when home is clicked directed to the home page', () => {
        cy.contains('Home').click()
        cy.url().should('eq', 'http://localhost:3000/')
    })

    it('when account is clicked a drop down menu appears', () => {
        cy.contains('Account').click()
        
    })

})