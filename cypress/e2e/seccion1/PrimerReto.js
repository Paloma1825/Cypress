/// <reference types = "Cypress" />

require('cypress-plugin-tab')

describe("Primer reto", ()=>{

    beforeEach(()=>{

        cy.visit("https://demoqa.com/webtables")
        cy.wait(2000)
        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
          }) //captura excepciones en caso de fallo
          cy.title().should("eq","ToolsQA")

    })

    it("Primer reto -> Buscar",()=>{

        cy.get("#searchBox").should("be.enabled").should("be.visible").type("Alden")
        cy.wait(2000)
        cy.get("#basic-addon2").should("be.visible").click()
        cy.wait(2000)

    })

    it("Primer reto -> Añadir",()=>{

        cy.get("#addNewRecordButton").should("be.visible").click()
        cy.wait(2000)
        cy.get("#firstName").should("be.enabled").should("be.visible").type("Paloma").tab().type("Sanz").tab().type("paloma@correo.es").tab().type("35").tab().type("40000").tab().type("Informatica")
        cy.wait(2000)
        cy.get("#submit").should("be.visible").click()
        cy.wait(2000)

    })

    it ("Primer reto -> editar", ()=>{

        cy.get("#edit-record-3").should("be.visible").click()
        cy.wait(2000)
        cy.get("#age").should("be.visible").should("be.enabled").clear().type("30").tab().clear().type("3000")
        cy.wait(2000)
        cy.get("#submit").should("be.visible").click()
        cy.wait(2000)

    })

    it ("Primer reto -> Borrar",()=>{

        cy.get("#delete-record-1").should("be.visible").click()
        cy.wait(2000)


    })




})