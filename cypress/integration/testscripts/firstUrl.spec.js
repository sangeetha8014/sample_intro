/// <reference types = 'cypress' />
describe('should test login screen', () => {
    it('should launch login page', ()=> {
        cy.visit("http://automationpractice.com/index.php")  
    })
    it('should launch signin button', ()=> {
        cy.get('.login') .click
    })
    it('should type username and pwd', ()=> {
        cy.get('#email') .type('email@gmail.com')
        cy.get('#passwd').type('xxx')
        cy.get('#Submit').click()
        })
})