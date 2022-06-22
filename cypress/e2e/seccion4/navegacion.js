/// <reference types = 'Cypress' />
describe('Navegacion',()=>{
    it('back y forward',()=>{
        cy.visit('https://demoqa.com/')
        cy.on('uncaught:exception', (err, runnable) => {
            return false
         })
    cy.title().should('eq','ToolsQA')
    cy.wait(2000)
    cy.get(':nth-child(1) > :nth-child(1) > .card-body > h5').should('be.visible').click()
    cy.wait(2000)
    cy.get(":nth-child(1) > .element-list > .menu-list > #item-0").should("be.visible").click()
    cy.wait(2000)
    cy.go("back")
    cy.go("forward")
    })

    it.only('reload',()=>{
        cy.visit('https://demoqa.com/')
        cy.on('uncaught:exception', (err, runnable) => {
            return false
         })
    cy.title().should('eq','ToolsQA')
    cy.wait(2000)
    cy.get(':nth-child(1) > :nth-child(1) > .card-body > h5').should('be.visible').click()
    cy.wait(2000)
    cy.get(":nth-child(1) > .element-list > .menu-list > #item-0").should("be.visible").click()
    cy.wait(2000)
    cy.get('#userName').should('be.visible').type("paloma")
    cy.wait(2000)
    cy.reload()
    })
})