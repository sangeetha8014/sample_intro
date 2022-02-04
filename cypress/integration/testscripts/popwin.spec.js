/// <reference types = 'cypress' />
describe('Types of Locators', () => {
    it('Locate Elements', () => {
        cy.visit('https://stqatools.com/demo/Windows.php')

        cy.contains('new Window')
            .invoke('removeAttr', 'target')
            .click()

        cy.url().should('include', 'Windows')
        cy.get('a.navbar-brand').should('contain', 'Demo Test')

    })

    it('New Window in a tab', () => {
        cy.visit('https://stqatools.com/demo/Windows.php')
        cy.contains('new Tab')
            .invoke('removeAttr', 'target')
            .click()
        cy.visit('https://stqatools.com/demo/Windows.php')

    })

    //     it('Two different domains',() => {
    //         cy.visit('https://stqatools.com/demo/Windows.php')
    //         cy.url().shoul('contain', 'Windows')
    //         cy.visit('http://demo.automationtesting.in/Register.html')
    //         cy.url().should('contain', 'Register')


    // })

    it('Accessing iFrame', () => {
        cy.visit('https://the-internet.herokuapp.com/iframe')
        cy.get('#mce_0_ifr').within(function ($myframe) {
            const frame = $myframe.contents().find('#tinymce')
            cy.wrap(frame).clear().type('Hello Welcome')

        })

    })
    it.only('Handling Alert', () => {
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.contains('Click for JS Alert').click()
        cy.on('windows:alert', (str) => {
            expect(str).to.be.equsls('I am a JS Alert')

        })

        cy.contains('Click for JS Confirm').click()
        cy.on('window.confirm', (str) => {
            expect(str).to.be.equsls('I am a JS Confirm')
            return false
        })
        cy.get('#result').should('contain', 'You clicked: Ok')

    })
})