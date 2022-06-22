/// <reference types = "Cypress" />

describe("snippets",()=>{

    it("Snippets 1",()=>{

        cy.visit("https://demoqa.com/text-box")
        cy.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
          })//captura excepciones en caso de fallo

          cy.title().should("eq","ToolsQA")
          cy.wait(2000)

          cy.get("#userName").should("be.visible").type("paloma")
    

  
    })

})
