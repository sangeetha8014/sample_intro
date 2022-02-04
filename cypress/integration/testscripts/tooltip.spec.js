/// <reference types = 'cypress' />
describe('Types of Locators', () => {
    it('Locate Elements', () => {
        cy.visit('http://localhost:4200/')
        // cy.visit(https://www.akveo.com/ngx-admin/')
        cy.contains('Modal & Overlays').click() 
        cy.contains('Tooltip').click() 
        cy.get('[data-name="menu-2"]').click()
        cy.contains('nb-card', 'Colored Tooltips')
            .contains('Default').click()
        cy.get('nb-tooltip').should('contain', 'This is a tooltip')

        // Try the below
        // cy.contains('nb-card', 'Basic form')
        //         .find('nb-checkbox')
        //         .click()
        //         .find('.custom-checkbox')
        //         .invoke('attr', 'class')
        //         .should('contain', 'checked')

        })


    })