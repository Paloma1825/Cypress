/// <reference types = "Cypress" />

describe("funcion Type", () =>{


    it("Type enter",()=>{

        cy.visit("https://www.google.com/")
        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
          }) //captura excepciones en caso de fallo
        cy.wait(2000)
        cy.get("#L2AGLb").click()
        cy.wait(2000)
        cy.title().should("eq","Google")

        cy.get("[name='q']").type("cypress io {enter}")
        cy.get("#rso > div:nth-child(1) > div > div > div > div > div > div > div.yuRUbf > a > h3").click()
        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
          }) //captura excepciones en caso de fallo

    })



})