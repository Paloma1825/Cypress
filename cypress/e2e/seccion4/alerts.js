/// <reference types = "Cypress" />

describe("alerts",()=>{

    it("alerts test",()=>{

        cy.visit("https://google.com")
        cy.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
          })//captura excepciones en caso de fallo
         cy.title().should("eq","Google")
         cy.wait(2000)

         cy.on("window:alert",(mensAlerta)=>{
            expect(mensAlerta).to.be.equal("Antes de ir a la Búsqueda de Google")
         })
    })
})