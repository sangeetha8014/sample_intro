/// <reference types = 'cypress' />
describe('Types of Locators', () => {
    it('Locate Elements', () => {
        cy.visit('https://radogado.github.io/shadow-dom-demo/', {timeout:10000})
        // cy.get('#container')
        cy.get('#app').shadow().find('#container')
        //Method 1 - Using Variable
        cy.get('#app').shadow().find('#container').then((label) =>{
            const strValue = label.text()
            cy.log('DOM Label :.....'+ strValue)
        })

        //Method 2 - Using Aliasing
        cy.get('#app').shadow().find('#container')
        .invoke('text').as('textVal')

        cy.get('@textVal').then( str => {

            cy.log('Using Alias.....'+str)
        })
        // cy.log('Global Varaiable......'+strWelcome)

        })
    })

