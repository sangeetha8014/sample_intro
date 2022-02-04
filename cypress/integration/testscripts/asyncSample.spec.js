/// <reference types = 'cypress' />
describe('Asynchronous Nature sample',  {
    "retries": {
        
        "openMode":2,
        "runMode":2
    }
        }, () =>
        {
    it('Launch URL', ()=> {
        cy.visit("https://books.toscrape.com/index.html")  
            cy.contains('Travel').click() 
            cy.url().should('include', 'travel')
            console.log("Before Test Execution")
            cy.get("h1").should('be.visible')
            cy.get('.image_container').its('length').should('eq', 10)

            // To make this log as asynchronous
            cy.get("h1").should('be.visible')
            .then( ()=>{
                console.log("After Test Execution")
            })
            
            })

            // it('selecting from dropdown', () =>{
            //     cy.visit('http://demo.automationtesting.in/Register.html', {timeout:10000})
            //     cy.get('#Skills').select('Android')
            //     cy.get('#Skills').should('have.value', 'Android')

            //     cy.get('span[role="combobox"]').click()
            //     cy.get('.select2-search-field').type('Ind')
            //     cy.get('.select2-search-field').type('{enter}')
            //     cy.get('span[role="combobox"]').should('have.text', 'India')

            // })
            
          
    })
  