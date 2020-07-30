/// <reference types="cypress" />

context('Auth', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/thread/5f17b8277d19a85a8ba008dd')
    })

    it('user inputs text and posts it to the forum', () => {
        cy.get('#content-input_ifr').type('hello world!')
    })
})
