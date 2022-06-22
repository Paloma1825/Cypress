/// <reference types = "Cypress" />

describe("Asserts",()=>{


    /*it("contains",()=>{
        cy.visit("http://automationpractice.com/index.php")
        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
          })//captura excepciones en caso de fallo
         cy.title().should("eq","My Store")
         cy.wait(3000)

         cy.get("#block_top_menu").contains("Women").click()
    })

    it("find eq",()=>{
        cy.visit("http://automationpractice.com/index.php")
        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
          })//captura excepciones en caso de fallo
         cy.title().should("eq","My Store")
         cy.wait(3000)

         cy.get(".product-container").find(".product-image-container").eq(4).click()

        })

        it("test",()=>{
            cy.visit("http://automationpractice.com/index.php")
            Cypress.on('uncaught:exception', (err, runnable) => {
                // returning false here prevents Cypress from
                // failing the test
                return false
              })//captura excepciones en caso de fallo
             cy.title().should("eq","My Store")
             cy.wait(3000)
    
             cy.get(".product-container").find(".product-image-container").eq(4).click()
             cy.get("#product_condition .editable").then((e)=>{

                let estado = e.text()
                if(estado == "New")
                {
                    cy.log("el vestio es nuevo")
                }
             })
             
             cy.get("#our_price_display").then((e)=>{
                 cy.log(e.text())
                 let precio = e.text()
                 precio= precio.slice(1,3)
                 cy.log(precio)
                 if (precio>20){
                     cy.log("el vestido no se puede comprar")
                     cy.get(".icon-home").click()
                     cy.wait(3000)
                 }
                 else{
                     cy.log("el vestido se puede comprar")
                     cy.get("#add_to_cart").click()
                     cy.wait(3000)
                 }

             })
    
            })*/

    it("contains text y have text",()=>{

        cy.visit("https://demoqa.com/text-box")
        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
          })//captura excepciones en caso de fallo
         cy.title().should("eq","ToolsQA")
         cy.wait(3000)

         cy.get("#userName").should("be.visible").type("paloma")
         cy.get("#userEmail").should("be.visible").type("paloma@email.com")
         cy.get("#submit").should("be.visible").click()
         cy.wait(2000)


    })
})