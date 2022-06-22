/// <reference types = "Cypress" />

describe("Asserts",()=>{


    it("contains",()=>{
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
    
            })

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

        cy.get("#name").should("have.text","Name:paloma")
        cy.get("#email").should("contain.text","@email.com")


    })

    it("have value",()=>{
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
         cy.get("#userEmail").should("have.value","paloma@email.com").then(()=>{

            cy.get("#submit").should("be.visible").click()
            cy.wait(2000)
         })

    })

    it("have class",()=>{

        cy.visit("https://demoqa.com/text-box")
        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
          })//captura excepciones en caso de fallo
         cy.title().should("eq","ToolsQA")
         cy.wait(3000)

         cy.get("#userName").should("be.visible").should("have.class","mr-sm-2").then(()=>{
            cy.get("#userEmail").should("be.visible").type("paloma@email.com")
            cy.wait(2000)
         })
    })

    it("have class y and",()=>{

        cy.visit("https://demoqa.com/text-box")
        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
          })//captura excepciones en caso de fallo
         cy.title().should("eq","ToolsQA")
         cy.wait(3000)

         cy.get("#userName").should("be.visible").and("have.class","mr-sm-2").then(()=>{
            cy.get("#userEmail").should("be.visible").type("paloma@email.com")
            cy.wait(2000)
         })
    })
    it("have class y negativas",()=>{

        cy.visit("https://demoqa.com/text-box")
        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
          })//captura excepciones en caso de fallo
         cy.title().should("eq","ToolsQA")
         cy.wait(3000)

         cy.get("#userName").should("be.visible").and("not.have.class","mr-sm-22").then(()=>{
            cy.get("#userEmail").should("be.visible").type("paloma@email.com")
            cy.wait(2000)
         })
    })

    it("have length y css",()=>{

        cy.visit("https://courses.letskodeit.com/practice")
        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
          })//captura excepciones en caso de fallo
         cy.title().should("eq","Practice Page")
         cy.wait(3000)

         cy.get("#product > tr > th").should("have.length",0)
         cy.get("#product").should("have.css","font-family")
         cy.wait(2000)
    })

    it("cerrar alert",()=>{
        cy.visit("https://www.google.com/")
        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
          })//captura excepciones en caso de fallo
         cy.title().should("eq","Google")
         cy.wait(3000)

         cy.get("#L2AGLb").should("not.be.visible").click()
         cy.wait(1000)

    })

    it("Contains",()=>{

        cy.visit("https://www.htmlquick.com/es/reference/tags/input-checkbox.html")
        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
          })//captura excepciones en caso de fallo
         cy.title().should("eq","Elemento input (type=checkbox)")
         cy.wait(3000)

         cy.contains("[type='submit']","Send data").should("be.visible").click({force:true})
         cy.wait(2000)


    })

    it.only("invoke",()=>{

        cy.visit("https://demoqa.com/text-box")
        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
          })//captura excepciones en caso de fallo
         cy.title().should("eq","ToolsQA")
         cy.wait(3000)

         cy.get("#userName").invoke("attr","placeholder").should("contain","Full Name").then(()=>{
            cy.get("#userName").should("be.visible").type("paloma")
            cy.wait(2000)
            cy.get("#userName").invoke("attr","style", "color:blue")
            cy.wait(1500)

         })

    })
})