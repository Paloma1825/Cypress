/// <reference types = "Cypress" />

describe("tablas",()=>{

    it("tablas 1 children",()=>{

        cy.visit("https://amazon.es")
        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
          })//captura excepciones en caso de fallo
         cy.title().should("eq","Amazon.es: compra online de electrónica, libros, deporte, hogar, moda y mucho más.")
         cy.wait(2000)

         cy.get(".a-button-inner").children("#sp-cc-accept").should("be.visible").click()

    })

    it("tabla 2 eq",()=>{

        cy.visit("https://courses.letskodeit.com/practice")
        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
          })//captura excepciones en caso de fallo
         cy.title().should("eq","Practice Page")
         cy.wait(2000)

         cy.get("[type='submit']").eq(0).should("have.value","Alert").click()

    })

    it("tabla 3 filter",()=>{

        cy.visit("https://courses.letskodeit.com/practice")
        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
          })//captura excepciones en caso de fallo
         cy.title().should("eq","Practice Page")
         cy.wait(2000)

         cy.get("[type='submit']").filter("#alertbtn").should("have.value","Alert").click()

    })

    it("tabla 4 find",()=>{

        cy.visit("https://courses.letskodeit.com/practice")
        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
          })//captura excepciones en caso de fallo
         cy.title().should("eq","Practice Page")
         cy.wait(2000)

         cy.get("#alert-example-div").find("#alertbtn").should("have.value","Alert").click()
         cy.get("#alert-example-div").find("[value='Confirm']").should("have.value","Confirm").click()


    })

    it("tabla 5 first y last",()=>{

        cy.visit("https://courses.letskodeit.com/practice")
        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
          })//captura excepciones en caso de fallo
         cy.title().should("eq","Practice Page")
         cy.wait(2000)

         cy.get("#enabled-example-div").find("[type='submit']").first().should("have.value","Disable").click()
         cy.get("#enabled-example-div").find("[type='submit']").last().should("have.value","Enable").click()
        
    })

    it("tabla 6 nextall",()=>{

        cy.visit("https://google.es")
        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
          })//captura excepciones en caso de fallo
         cy.title().should("eq","Google")
         cy.wait(2000)

         cy.get("[role='none']").should("contain","Personalizar")
        cy.get("[role='none']").should("contain","Personalizar").next().should("have.length",6)
        cy.get("[role='none']").should("contain","Personalizar").nextAll().should("have.length",7)
        
    })

    it("tabla 7 padre",()=>{

        cy.visit("https://google.es")
        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
          })//captura excepciones en caso de fallo
         cy.title().should("eq","Google")
         cy.wait(2000)

         cy.get("[role='none']").parent().should("have.class","tHlp8d")
        
    })

    it("tabla 8 check todos a la vez",()=>{

        cy.visit("https://courses.letskodeit.com/practice")
        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
          })//captura excepciones en caso de fallo
         cy.title().should("eq","Practice Page")
         cy.wait(2000)

         cy.get("[type='checkbox']").check({force:true})
    })

    it("tabla 9 recorrer tabla",()=>{

        cy.visit("https://courses.letskodeit.com/practice")
        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
          })//captura excepciones en caso de fallo
         cy.title().should("eq","Practice Page")
         cy.wait(2000)

         const datos=[]
         let suma=0

         cy.get("#product td").each(($element,index,$list)=>{
             datos[index]=$element.text()
             cy.log(datos[index])
         }).then(()=>{
            for(let i=0; i<datos.length;i++){
                if(Number(datos[i])){
                    suma=suma+Number(datos[i])
                }
            }
            cy.log(suma)
            expect(suma).to.equal(90)
         })
    })

    it.only("tabla 10 acceder a un elemento",()=>{

        cy.visit("https://courses.letskodeit.com/practice")
        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
          })//captura excepciones en caso de fallo
         cy.title().should("eq","Practice Page")
         cy.wait(2000)

         let nombre=""
         let edad=0
         let campo =cy.get(":nth-child(4) > .price")

         cy.get("#product td").each(($element,index,$list)=>{
           nombre=$element.text()
            if( nombre.includes("JavaScript Programming Language")){
                campo.eq(index).next().then((age)=>{
                    let edad= age.text()
                    cy.log(edad)
                    expect(edad).to.equal('25')

                })            
            }
        })
    })
})