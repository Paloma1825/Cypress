/// <reference types = "Cypress" />
import 'cypress-drag-drop'
require('cypress-drag-drop')


describe("eventos raton",()=>{

    it("drag and drop",()=>{

        cy.visit("https://the-internet.herokuapp.com/drag_and_drop")
        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
          })//captura excepciones en caso de fallo
         cy.title().should("eq","The Internet")
         cy.wait(2000)

         cy.get("#column-a").drag("#column-b",{
           
          source: { x: 150, y: 150 }, // applies to the element being dragged
          target: { position: 'right' }, // applies to the drop target
          force:true})

          Cypress.on('uncaught:exception', (err) => {
            // returning false here prevents Cypress from
            // failing the test
            if (err.message && err.message.includes('Cannot set propert')) {
              return false;
            }
            return true;
          });
    })

    it("drag and drop 2",()=>{

        cy.visit("https://www.w3schools.com/html/html5_draganddrop.asp")
        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
          })//captura excepciones en caso de fallo
         cy.title().should("eq","HTML Drag and Drop API")
         cy.wait(2000)

         cy.get("#accept-choices").click()
         cy.wait(3000)

         cy.get("#div1").drag("#div2",{force:true})

         Cypress.on('uncaught:exception', (err) => {
            // returning false here prevents Cypress from
            // failing the test
            if (err.message && err.message.includes('Cannot set propert')) {
              return false;
            }
            return true;
          })
         


    })

    it("drag and drop 3",()=>{

      cy.visit("https://demoqa.com/droppable")
      Cypress.on('uncaught:exception', (err, runnable) => {
          // returning false here prevents Cypress from
          // failing the test
          return false
        })//captura excepciones en caso de fallo
       cy.title().should("eq","ToolsQA")
       cy.wait(2000)

       
       cy.get("#draggable").drag("#droppable",{
        position: "relative",
        left: "290px",
        top: "24px",
        
        force:true})

  })

    it("Mouse over",()=>{
        cy.visit("https://www.amazon.es/")
        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
          })//captura excepciones en caso de fallo
         cy.title().should("eq","Amazon.es: compra online de electrónica, libros, deporte, hogar, moda y mucho más.")
         cy.wait(2000)

         cy.get("#sp-cc-accept").click()
         
         cy.get("#nav-link-accountList-nav-line-1").trigger("mouseover")
         cy.wait(3000)
         cy.get(".nav-text").contains("Mi cuenta").click({force:true})
         cy.wait(2000)

    })

    it("Abrir otra pestaña",()=>{
        cy.visit("https://www.booking.com/index.es.html?aid=303651")
        
        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
          })//captura excepciones en caso de fallo
         cy.title().should("eq","Booking.com | Sitio oficial | Los mejores hoteles, vuelos, coches de alquiler y alojamientos")
         cy.wait(2000)
         cy.get("#onetrust-accept-btn-handler").click()
         cy.wait(4000)

         cy.contains("Más info").invoke("removeAttr","target").click({force:true})
         cy.wait(2000)

    })

    it.only("slider",()=>{

      cy.visit("https://demoqa.com/slider")
      Cypress.on('uncaught:exception', (err, runnable) => {
          // returning false here prevents Cypress from
          // failing the test
          return false
        })//captura excepciones en caso de fallo
       cy.title().should("eq","ToolsQA")
       cy.wait(2000)

       
      cy.get(".range-slider").invoke("attr","style","--value:38")
     
       cy.wait(3000)

  })


})