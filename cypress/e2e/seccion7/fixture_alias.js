/// <reference types = 'Cypress' />
describe('Fixture',()=>{

    before(function(){

        cy.fixture('datos').as("datos_json")

        })
    

    it('Cargar datos de json',()=>{
        cy.visit('https://demoqa.com/text-box')
        cy.on('uncaught:exception', (err, runnable) => {
            return false
         })
        cy.title().should('eq','ToolsQA')
        cy.wait(2000)

        cy.get("@datos_json").then((data)=>{

            cy.get("#userName").should("be.visible").type(data.nombre)
            cy.get("#userEmail").should("be.visible").type(data.email)
            cy.get("#currentAddress").should("be.visible").type(data.dir1)
            cy.get("#permanentAddress").should("be.visible").type(data.dir2)

        })

        


    })
})