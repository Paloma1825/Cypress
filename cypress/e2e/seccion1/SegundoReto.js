/// <reference types = "Cypress" />
require('cypress-xpath')
require('cypress-plugin-tab')

describe ("Segundo reto",()=>{

    beforeEach(()=>{

            cy.visit("https://computer-database.gatling.io/computers")
            cy.title().should("eq","Computers database")
            Cypress.on('uncaught:exception', (err, runnable) => {
                // returning false here prevents Cypress from
                // failing the test
                return false
              }) //captura excepciones en caso de fallo
              cy.wait(2000)

    })

    it("Selector id y atributos",()=>{

        cy.get("#searchbox").should("be.visible").should("be.enabled").type("ACE")
        cy.wait(2000)
        cy.get("[type='submit']").should("be.visible").click()
        cy.wait(2000)

    })

    it("selector por xpath y combo",()=>{
        cy.xpath("//a[contains(@id,'add')]").should("be.visible").click()
        cy.wait(2000)
        cy.get("#name").should("be.visible").should("be.enabled").type("prueba").tab().type("1990-12-02").tab().type("1991-12-03")
        cy.get("#company").should("be.visible").select("Netronics").should("have.value","4")
        cy.wait(2000)

    })

})