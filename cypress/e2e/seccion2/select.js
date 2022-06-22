/// <reference types = "Cypress" />
require('cypress-xpath')

describe("Select",()=>{


    it("select",()=>{

        cy.visit("https://www.htmlquick.com/es/reference/tags/select.html")
        
        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
          })//captura excepciones en caso de fallo
         cy.title().should("eq","Elemento select")
          
          cy.wait(3000)
          cy.get("[name='enviar mensaje']").should("be.visible").select("Ahora")

    })
    it("multiselect",()=>{

        cy.visit("https://courses.letskodeit.com/practice")
        
        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
          })//captura excepciones en caso de fallo
         cy.title().should("eq","Practice Page")
          
          cy.wait(3000)
          cy.get("#multiple-select-example").should("be.visible").select(['Apple','Orange']).then(()=>{
              cy.get("#confirmbtn").click()
          })
          
    })
    it("select 3",()=>{

        cy.visit("https://www.htmlquick.com/es/reference/tags/select.html")
        
        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
          })//captura excepciones en caso de fallo
         cy.title().should("eq","Elemento select")
          
          cy.wait(3000)
          cy.get("[name='deporte']").should("be.visible").select("Críquet")

    })
    
    it.only("select 4",()=>{

        cy.visit("https://courses.letskodeit.com/practice")
        
        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
          })//captura excepciones en caso de fallo
         cy.title().should("eq","Practice Page")
          
          cy.wait(3000)
          cy.get("#carselect").should("be.visible").select("BMW").should("have.value","bmw")
          
    })


})