import {Given, When, And, then} from "@badeball/cypress-cucumber-preprocessor";

Given("Abrir el navegador"),()=>{
    cy.visit("https://demoqa.com/text-box")
    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
      })//captura excepciones en caso de fallo
    
}

When("Rellenar el nombre {word}"),(Name)=>{
    cy.get("#userName").should("be.visible").type(Name)
    cy.wait(500)
}

When("Rellenar el mail {word}"),(Email)=>{
    cy.get("#userEmail").should("be.visible").type(Email)
    cy.wait(500)
}
And ("Rellena la direccion {word"),(dir)=>{
    cy.get("#currentAddress").should("be.visible").type(dir)
    cy.wait(500)
}

Then ("Validar la pagina"),()=>{
    cy.title().should("eq","ToolsQA")
}