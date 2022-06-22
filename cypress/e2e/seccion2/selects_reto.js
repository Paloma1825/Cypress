/// <reference types = "Cypress" />
require('cypress-xpath')

describe("selects reto",()=>{


    it("select reto",()=>{

        cy.visit("https://www.virtuosoft.eu/code/bootstrap-duallistbox/")
        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
          })//captura excepciones en caso de fallo
         cy.title().should("eq","Bootstrap Dual Listbox")
         cy.wait(3000)

         cy.get("[name='duallistbox_demo1[]_helper1']").select(["Option 1","Option 4","Option 9"]).then(()=>{
             cy.wait(3000)
             cy.get("[name='duallistbox_demo1[]_helper1']").select("Option 8").then(()=>{
                 cy.get("#demoform > .bootstrap-duallistbox-container > .box1 > .btn-group > .moveall").click().then(()=>{
                     cy.wait(3000)
                     cy.get("#demoform > .bootstrap-duallistbox-container > .box2 > .btn-group > .removeall").click()
                 })
             })
         })
        
    })


})
