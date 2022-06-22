describe("Bienvenido al curso de Cypress seccion1", () => {

    it('Mi primer test -> Hola Mundo', () => {
        cy.log("Hola Mundo")
        cy.wait(5000)
    })

    it("Segundo test -> campo name", () =>{

        cy.visit("https://demoqa.com/text-box")
       cy.get("#userName").type("Paloma")
        cy.wait(4000)

        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
          }) //captura excepciones en caso de fallo

    })




}) //cierre de la función dscribe