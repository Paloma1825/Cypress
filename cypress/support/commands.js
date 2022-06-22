// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('Rellenar_campos', (selector, texto,tiempo) => {

    cy.get(selector).should("be.visible").type(texto)
    cy.wait(tiempo)
    
})

Cypress.Commands.add('Campos2', (nombre,email,tiempo) => { 
    
    cy.get("#userName").should("be.visible").type(nombre)
    cy.wait(tiempo)
    cy.get("#userEmail").should("be.visible").type(email)
    cy.wait(tiempo)

})

Cypress.Commands.add('Funcion3', (nombre,email,tiempo) =>
{

    cy.Campos2(nombre,email,tiempo)

})

Cypress.Commands.add('CrearEmail', (email,tiempo) =>
{

    cy.get("#email_create").should("be.visible").type(email)
    cy.wait(tiempo)
    cy.get("#SubmitCreate").should("be.visible").click()

})

Cypress.Commands.add('ValidarCampo', (selector,mensaje) =>
{

    cy.get(selector).should("be.visible").then((valor)=>{
        let dato = valor.text()
        cy.log(dato)
        expect(dato).equal("Invalid email address.")
        if(dato == mensaje)
        {
            cy.log("el mensaje erroneo es: " +mensaje)
        }
    })
  

})

