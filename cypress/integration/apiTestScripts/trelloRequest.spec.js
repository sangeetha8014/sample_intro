// <reference types='cypress' />

describe('API Testing - Trello Application', () => {

    // var baseUrl = 'http://localhost:3000/'
    // beforeEach(() => {
    //     cy.request({
    //         method: 'POST',
    //         url: '/api/reset'
    //     })
    // })

    it('Create a new Board', () => {
        cy.visit('/')

    })

    it('Create a new Board', () => {
        cy.visit('/')
        cy.request({
            method: 'POST',
            url: '/api/boards',
            body: {
                'name': 'Create Cypress Samples'
            }

        })

    })

    //77109126892
    // it('Update Board Name', () => {
    //     cy.visit('/')
    //     cy.request({
    //         method: 'PATCH',
    //         url: '/api/boards/77109126892',
    //         body: {
    //             'name': 'Update my board name'
    //         }

    //     })

    // })

    // 23758169629
     it.only('Delete Board Name', () => {
        cy.visit('/')
        cy.request({
            method: 'DELETE',
            url: '/api/boards/23758169629',
            body: {
                'name': 'Delete my board name'
            }

        })

    })

})




