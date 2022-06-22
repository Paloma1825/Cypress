/// <reference types = "Cypress" />

describe("Validar titulo", () =>{


    it ("Test Validar titulo: ", () => {

        cy.visit("https://demoqa.com/text-box")
        cy.wait(3000)
        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
          }) //captura excepciones en caso de fallo
          cy.title().should("eq", "ToolsQA")
          cy.log("Test OK")


    })





})