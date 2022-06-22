/// <reference types = 'Cypress' />
describe('customs',()=>{
    let tiempo=2000
    before(()=>{
        cy.visit('https://demoqa.com/text-box')
        cy.on('uncaught:exception', (err, runnable) => {
            return false
         })
        cy.title().should('eq','ToolsQA')
        cy.wait(tiempo)

    })
    it('customs 1',()=>{
        
        cy.Rellenar_campos("#userName","Paloma",tiempo)
        cy.Rellenar_campos("#userEmail","paloma@email.com",tiempo)
    
    })

    it('customs 2',()=>{
        
        cy.Campos2("Paloma","paloma@email.com", tiempo)
    
    })

    it('customs 3',()=>{
        
        cy.Funcion3("Paloma","paloma@email.com", tiempo)
    
    })
})