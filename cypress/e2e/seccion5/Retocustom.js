/// <reference types = 'Cypress' />
require('cypress-xpath')

describe('Reto custom',()=>{


    beforeEach(()=>{

        cy.visit('http://automationpractice.com/index.php?controller=authentication&back=my-account')
        cy.on('uncaught:exception', (err, runnable) => {
            return false
         })
        cy.title().should('eq','Login - My Store')
        cy.wait(2000)

    })
    it('Custom 1 email valido',()=>{
        let tiempo = 1500
        cy.CrearEmail("paloma@email.com",tiempo)
    })

    it('Custom 2 email invalido',()=>{
        let tiempo = 1500
        cy.CrearEmail("palomaemailcom",tiempo)
        cy.ValidarCampo("#create_account_error","Invalid email address.")
    })


})