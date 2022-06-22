/// <reference types = "Cypress" />

require('cypress-plugin-tab')

describe("Tab", () =>{

it("Test tab", ()=>{

    cy.visit("https://demoqa.com/automation-practice-form")
    cy.wait(2000)
    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
      }) //captura excepciones en caso de fallo
      cy.get("#firstName").type("Paloma").tab().type("Sanz").tab().type("paloma@correo.es")
      cy.wait(3000)


})



})