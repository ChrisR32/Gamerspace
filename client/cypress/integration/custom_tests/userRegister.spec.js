/// <reference types="cypress" />

context('Auth', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/auth/register')
    })

    it('filling out user registration', () => {
        cy.get(':nth-child(1) > .form-control').type('dude1')
        cy.get(':nth-child(2) > .form-control').type('fakeURL')
        cy.get(':nth-child(3) > .form-control').type('fake@emaol.com')
        cy.get(':nth-child(4) > .form-control').type('1234')
        cy.get(':nth-child(5) > .form-control').type('1234')
    })

})