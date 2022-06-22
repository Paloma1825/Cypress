/// <reference types = "Cypress" />

describe('hooks',()=>{


    before(()=>{
        cy.visit('https://demoqa.com/radio-button')
        cy.on('uncaught:exception', (err, runnable) => {
            return false
         })
        cy.title().should('eq','ToolsQA')
        cy.wait(2000)
    })


    it('hooks 1',()=>{
        
        cy.get('#yesRadio').click({force:true})
        cy.wait(2000)
    })

    it('hooks 2',()=>{
        
        cy.get('#noRadio').click({force:true})
        cy.wait(2000)
    })
})