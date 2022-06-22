import { Given, When, And, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("Abrir el navegador"),()=>{
    cy.visit("https://demoqa.com/text-box")
    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
      })//captura excepciones en caso de fallo
    
};

When("Rellenar nombre"),()=>{
    cy.get("#userName").should("be.visible").type("paloma")
    cy.wait(500)
}

When("Rellenar email"),()=>{
    cy.get("#userEmail").should("be.visible").type("paloma@email.com")
    cy.wait(500)
}

And("Rellena direccion1"),()=>{
    cy.get("#currentAddress").should("be.visible").type("dir1")
    cy.wait(500)
}

Then("Validar Pagina"),()=>{
    cy.title().should("eq","ToolsQA")
}