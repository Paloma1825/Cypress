/// <reference types = "Cypress" />
require('cypress-xpath')

describe("selectores", ()=>{


    beforeEach(()=>{
        cy.visit("https://demoqa.com/text-box")
        cy.wait(2000)
        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
          }) //captura excepciones en caso de fallo
          cy.title().should("eq","ToolsQA")
    })

    it("selector atributo",()=>{

        cy.get("[placeholder='Full Name']").should("be.visible").should("be.enabled").type("pedro gomez lommo")
        cy.wait(2000)
    })

    it("selector xpath",()=>{

        cy.xpath("//input[@id='userName']").should("be.visible").should("be.enabled").type("Paloma sanda alvarez")
        cy.wait(2000)
        cy.xpath("//input[contains(@placeholder,'name@example.com')]").should("be.visible").should("be.enabled").type("Paloma@correo.es")
        cy.wait(2000)
        cy.xpath("//textarea[contains(@id,'currentAddress')]").should("be.visible").should("be.enabled").type("direccion")
        cy.wait(2000)
    })

    it.only("selector contains",()=>{

        cy.visit("https://demoqa.com/radio-button")
        cy.wait(2000)
        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
          }) //captura excepciones en caso de fallo
        
          cy.get(".custom-control-label").contains("Impressive").click()
    })

})