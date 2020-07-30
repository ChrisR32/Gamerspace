/// <reference types="cypress" />

context('Auth', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/category/')
    })

    it('when Xbox is clicked redirect to the Xbox subcatagories', () => {
      cy.contains('Xbox').click()
      cy.url().should('eq', 'http://localhost:3000/category/5f1617fc9595f0fdb151b7ea')
    })

    it('when Xbox is clicked redirect to the Xbox subcatagories', () => {
        cy.contains('Xbox').click()
        cy.url().should('eq', 'http://localhost:3000/category/5f1617fc9595f0fdb151b7ea')
        cy.contains('console').click()
        cy.url().should('eq', 'http://localhost:3000/forum/5f1618439595f0fdb151b7eb')
        cy.contains('original').click()
        cy.url().should('eq', 'http://localhost:3000/thread/5f17b8277d19a85a8ba008dd')
    })
})
