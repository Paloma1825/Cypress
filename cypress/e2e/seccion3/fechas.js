/// <reference types = "Cypress" />

describe("fechas",()=>{


    it("fechas",()=>{
        cy.visit("https://mdbootstrap.com/docs/b4/jquery/forms/date-picker/")
        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
          })//captura excepciones en caso de fallo
         cy.title().should("eq","Bootstrap 4 Date Picker - examples & tutorial")
         cy.wait(2000)

         cy.get("#example").should("be.visible").type("12/12/2022")


    })

    it.only("fechas 2",()=>{
        cy.visit("https://mdbootstrap.com/docs/b4/jquery/forms/date-picker/")
        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
          })//captura excepciones en caso de fallo
         cy.title().should("eq","Bootstrap 4 Date Picker - examples & tutorial")
         cy.wait(2000)

         cy.get("#date-picker-example > .fas").click()
         cy.wait(2000)

         let campo= cy.get("#date-picker-example_root > .picker__holder > .picker__frame > .picker__wrap > .picker__box > #example_table > tbody > :nth-child(4) > :nth-child(4) > .picker__day")
         let dato=""

         campo.click()
         cy.wait(2000)
        
    })
})
