/// <reference types = "Cypress" />
import 'cypress-file-upload';


describe("upload files",()=>{

    it("upload",()=>{

        cy.visit("https://demoqa.com/automation-practice-form")
        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
          })//captura excepciones en caso de fallo
         cy.title().should("eq","ToolsQA")
         cy.wait(3000)

         const ruta = "img1.jpg"

         cy.get("#uploadPicture").attachFile(ruta)
         cy.wait(2000)

    })
})