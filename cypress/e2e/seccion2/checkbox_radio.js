/// <reference types = "Cypress" />
require('cypress-xpath')

describe("Checkbox y radio",()=>{


    it ("ejemplo con click",()=>{
        cy.visit("https://demoqa.com/checkbox")
        cy.wait(2000)
        
        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
          }) //captura excepciones en caso de fallo
          cy.title().should("eq","ToolsQA")
          
          cy.xpath("//body/div[@id='app']/div[1]/div[1]/div[2]/div[2]/div[2]/div[1]/div[1]/button[1]/*[1]").should("be.visible").click()
          cy.wait(1500)
          cy.get("#tree-node > :nth-child(2) > :nth-child(1) > :nth-child(2) > :nth-child(1) > :nth-child(1) > label > .rct-checkbox > .rct-icon").click()
          cy.wait(1500)
          cy.xpath("//span[@class='rct-title'][contains(.,'React')]").should("be.visible").click()
          cy.wait(2000)

    })

    it("ejemplo check",()=>{

        cy.visit("https://www.htmlquick.com/es/reference/tags/input-checkbox.html")
        cy.wait(2000)
        
        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
          }) //captura excepciones en caso de fallo
          cy.title().should("eq","Elemento input (type=checkbox)")
          cy.wait(3000)

          cy.get("[type='checkbox']").check({force: true})
          cy.get(":nth-child(9) > .code-view-lines > form > :nth-child(1) > :nth-child(2) > input").uncheck().should("not.be.checked")

    })
    it("radio",()=>{

        cy.visit("https://www.htmlquick.com/es/reference/tags/input-radio.html")
        cy.wait(2000)
        
        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
          }) //captura excepciones en caso de fallo
          cy.title().should("eq","Elemento input (type=radio)")
          cy.wait(3000)

          cy.get("[type ='radio']").check({force: true}).should("be.checked")
          cy.get(":nth-child(1) > [value='tiempocompleto']").check().should("be.checked")
    })

    it("ejemplo",()=>{

        cy.visit("https://courses.letskodeit.com/practice")
        
        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
          })//captura excepciones en caso de fallo
         cy.title().should("eq","Practice Page")
          
          cy.wait(3000)
          
        cy.get("#hondaradio").should("be.visible").check()
    })
    


})