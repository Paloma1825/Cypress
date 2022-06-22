/// <reference types = "Cypress" />

describe("asserts",()=>{

    it("test assert",()=>{

    cy.visit("https://demoqa.com/automation-practice-form")
    cy.wait(2000)
    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
      }) //captura excepciones en caso de fallo

      cy.get("#firstName").should("be.visible").type("paloma")
      cy.wait(2000)
      cy.get("#lastName").should("be.visible").should("be.enabled").type("sanz")
      cy.wait(2000)
      cy.get("#genterWrapper > .col-md-9 > :nth-child(1) > .custom-control-label").should("be.visible").should("contain.text","Male").click()

    })


})