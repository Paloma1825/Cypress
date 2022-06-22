
/// <reference types = "Cypress" />

describe("Type up down",()=>{


    it("page up", ()=>{


        cy.visit("https://demoqa.com/text-box")
        cy.wait(2000)
        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
          }) //captura excepciones en caso de fallo
        
          cy.get("#userName").type('{pageup}')
          cy.wait(2000)


    })

    it("page down", ()=>{


        cy.visit("https://demoqa.com/text-box")
        cy.wait(2000)
        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
          }) //captura excepciones en caso de fallo
        
          cy.get("#userName").type('{pagedown}')
          cy.wait(2000)


    })

    /*it.only("page down", ()=>{


        cy.visit("https://demoqa.com/text-box")
        cy.wait(2000)
        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
          }) //captura excepciones en caso de fallo
        
          cy.get("#userName").type('{pagedown}')
          cy.wait(2000)


    })*/// only -> sirve para que cypress solo corra el test o los tests que tienen only



})