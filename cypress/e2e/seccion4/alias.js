/// <reference types = "Cypress" />

describe("alias",()=>{

    it("alias",()=>{

        cy.visit("https://demoqa.com/text-box")
        cy.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
          })//captura excepciones en caso de fallo
         cy.title().should("eq","ToolsQA")
         cy.wait(2000)

         cy.get("#userName").should("be.visible").as("nombre")
         cy.get("@nombre").type("paloma")

         cy.get("#userEmail").should("be.visible").as("email")
         cy.get("@email").type("paloma@email.es")
    })
})