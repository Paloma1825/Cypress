/// <reference types = "Cypress" />
require("cypress-xpath");

describe("invoke",()=>{

    it("invoke test",()=>{

        cy.visit("https://demoqa.com/text-box")
        cy.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
          })//captura excepciones en caso de fallo

          cy.title().should("eq","ToolsQA")
          cy.wait(2000)

          cy.get(".main-header").should("be.visible").invoke("text").as("nomb")
          cy.get("@nomb").should("eq","Text Box")

          cy.wait(2000)

          cy.get("#userName-label").invoke("text").as("label")
          cy.get("@label").should("contain","Full Name").then(()=>{
            cy.get("#userName").should("be.visible").as("nombre")
            cy.get("@nombre").type("paloma")
          })
          
    })

    it("invoke estilos",()=>{
        cy.visit("https://demoqa.com/text-box")
        cy.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
          })//captura excepciones en caso de fallo

          cy.title().should("eq","ToolsQA")
          cy.wait(2000)

          cy.get("#userName-label").invoke("attr","style","color:blue; font-size:60px")

        
    })

    it("invoke ocultar y mostrar",()=>{
        cy.visit("https://demoqa.com/text-box")
        cy.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
          })//captura excepciones en caso de fallo

          cy.title().should("eq","ToolsQA")
          cy.wait(2000)

          cy.get("#userName-label").invoke("hide")
          cy.get("#userName").invoke("hide")
          cy.wait(1500)
          cy.get("#userName-label").invoke("show","3s")
          cy.get("#userName").invoke("show") 
    })

    it("reto invoke",()=>{
        cy.visit("https://demoqa.com/text-box")
        cy.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
          })//captura excepciones en caso de fallo

          cy.title().should("eq","ToolsQA")
          cy.wait(2000)

          cy.get("#userEmail-label").invoke("hide")
          cy.get("#userEmail").invoke("hide")

          cy.wait(1500)

          cy.get("#userName").should("be.visible").type("paloma").then(()=>{
            cy.wait(1500)
            cy.get("#userEmail-label").invoke("show","2s")
            cy.get("#userEmail").invoke("show","2s")
            cy.get("#userEmail").should("be.visible").type("email@email.com")

          })
    })

    it("invoke src",()=>{
        cy.visit("https://demoqa.com/text-box")
        cy.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
          })//captura excepciones en caso de fallo

          cy.title().should("eq","ToolsQA")
          cy.wait(2000)

          cy.xpath("//img[@src='/images/Toolsqa.jpg']").invoke("attr","src").should("include","Toolsqa.jpg")

          
    })

    it.only("invoke target",()=>{
        cy.visit("https://www.booking.com/index.es.html")
        cy.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
          })//captura excepciones en caso de fallo

          cy.title().should("eq","Booking.com | Sitio oficial | Los mejores hoteles, vuelos, coches de alquiler y alojamientos")
          cy.wait(2000)

          cy.get("#onetrust-accept-btn-handler").should("be.visible").click()
          cy.wait(2000)

          cy.contains("Más info").invoke("removeAttr","target").click()
          
    })
})