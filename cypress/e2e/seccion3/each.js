/// <reference types = "Cypress" />

describe("for each",()=>{

    it("for each",()=>{
        
        cy.visit("http://automationpractice.com/index.php")
        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
          })//captura excepciones en caso de fallo
         cy.title().should("eq","My Store")
         cy.wait(2000)

         cy.get(".product-name").each(($element,index,$list)=>{

            cy.log(index) // muestra la posicion en el array
            cy.log($element) // muestra el elemento
            cy.log($list) // muestra la lista
            cy.log($element.text()) // muestra el texto del elemento

            let prenda = $element.text()
            if(prenda.includes("Blouse")){
                
                cy.wrap($element).click({force:true})
            }

         })
    })

    it("for each 2",()=>{
        
        cy.visit("http://automationpractice.com/index.php")
        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
          })//captura excepciones en caso de fallo
         cy.title().should("eq","My Store")
         cy.wait(4000)

    
           for(let i=0; i<4; i++)
            {
                cy.get(".product-container").find(".product-image-container").eq(i).click()
                cy.wait(4000)
                cy.get("#quantity_wanted").clear().type(4)
                cy.wait(4000)
                cy.get("#group_1").select("M")
                cy.wait(4000)
                cy.get(".exclusive > span").click()
                cy.wait(4000)
                cy.get("[title='Close window']").click({force:true})
                cy.wait(4000)
                cy.get(".icon-home").click({force:true})
                cy.wait(4000)
            }
                
    })

    it.only("for each 3",()=>{
        
        cy.visit("http://automationpractice.com/index.php")
        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
          })//captura excepciones en caso de fallo
         cy.title().should("eq","My Store")
         cy.wait(4000)

         const datos = []

         cy.get("#center_column .product-container").each(($element,index,$list)=>{
             datos[index] = $element.text()
             cy.log(datos.length)
             
         }).then(()=>{

            for(let i=0; i<datos.length; i++)
            {
                cy.get(".product-container").find(".product-image-container").eq(i).click()
                cy.wait(2000)
                cy.get("#quantity_wanted").clear().type(4)
                cy.wait(2000)
                cy.get("#group_1").select("M")
                cy.wait(2000)
                cy.get(".exclusive > span").click({force:true})
                cy.wait(2000)
                cy.get("[title='Close window']").click({force:true})
                cy.wait(2000)
                cy.get(".icon-home").click({force:true})
                cy.wait(6000)
            }

         })

    
        
                
    })
})