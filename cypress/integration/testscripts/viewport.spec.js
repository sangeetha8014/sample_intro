/// <reference types = 'cypress' />
describe('Types of Locators', () => {
    it('720p Resolution', () => {
        cy.viewport(1280, 720)
        cy.visit('http://www.example.com/')
        cy.wait(200)

    })
    it('720p Resolution', () => {
        cy.viewport(1980, 1080)
        cy.visit('http://www.example.com/')
        cy.wait(200)

    })
    it.skip('ipad-2 Resolution', () => {
        cy.viewport('ipad-2')
        cy.visit('http://www.example.com/')
        cy.wait(200)

    })

    it.skip('ipad-2 Resolution', () => {
        cy.viewport('ipad-2')
        cy.visit('http://www.example.com/')
        cy.wait(200)

    })

    it('ipad-2 Resolution', () => {
        cy.viewport('ipad-2')
        cy.visit('http://www.example.com/')
        cy.wait(200)

    })

    it('iphone-4 landscape Resolution', () => {
        cy.viewport('iphone-4', 'landscape')
        cy.visit('http://www.example.com/')
        cy.wait(200)
    })

})