/// <reference types = 'Cypress' />



describe('Reto hook',()=>{

    before(()=>{
        cy.visit('https://www.amazon.es/')
        cy.on('uncaught:exception', (err, runnable) => {
            return false
         })
        cy.title().should('eq','Amazon.es: compra online de electrónica, libros, deporte, hogar, moda y mucho más.')
        cy.wait(2000)

        cy.get("#sp-cc-accept").should("be.visible").click()
        cy.wait(2000)

        cy.get("#nav-link-accountList").should("be.visible").click()

        cy.wait(2000)

        cy.get("#ap_email").should("be.visible").type("paloma.sanz.alvarez@gmail.com")
        cy.wait(1000)
        cy.get ("#continue").should("be.visible").click()
        cy.wait(2000)

        cy.get("#ap_password").should("be.visible").type("Qwerty123")
        cy.wait(1000)
        cy.get("#signInSubmit").should("be.visible").click()
        cy.wait(2000)

    })

    after(()=>{

        cy.get("#nav-hamburger-menu").click()
        
        cy.wait(2000)
        cy.get(":nth-child(38) > .hmenu-item").click()
        cy.wait(2000)
    })
    it('hook 1',()=>{
        
       cy.get("#twotabsearchtextbox").should("be.visible").type("ropa")
       cy.get("#nav-search-submit-button").should("be.visible").click()
       cy.wait(2000)
    
    })

    it('hook 2',()=>{
        
        cy.get("[data-csa-c-content-id='nav_cs_sports']").click()
        cy.wait(2000)
        Cypress.on('uncaught:exception', (err, runnable) => {
            console.log(err);
            return false;
          })
        
     
     })
    
})