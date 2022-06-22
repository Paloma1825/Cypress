/// <reference types = "Cypress" />

describe("Reference windows",()=>{


    it("charset",()=>{
        cy.visit("https://www.20minutos.es/")
        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
          })//captura excepciones en caso de fallo
         cy.title().should("eq","20minutos.es | El medio social | Última hora, local, España y el mundo")
         cy.wait(3000)
         cy.document().should("have.property","charset").and("eq","UTF-8")
         cy.url().should("include","20")
         cy.url().should("eq","https://www.20minutos.es/")
    })

})