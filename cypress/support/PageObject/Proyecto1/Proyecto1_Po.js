class ProyectoUno_PO{

    visitHome(){

        beforeEach(()=>{

            cy.visit('http://automationpractice.com/index.php?controller=authentication&back=my-account')
        cy.on('uncaught:exception', (err, runnable) => {
            return false
         })
        cy.title().should('eq','Login - My Store')
        cy.wait(2000)

        })

    }

    Seccion1(email,tiempo){

        cy.get("#email_create").should("be.visible").type(email)
        cy.wait(tiempo)
        cy.screenshot("IntroEmailValido")
        cy.get("#SubmitCreate").should("be.visible").click()
        cy.screenshot("BotonLogin")
    }

    Seccion2(email,tiempo){

        cy.get("#email_create").should("be.visible").type(email)
        cy.wait(tiempo)
        cy.screenshot("emailInvalido")
        cy.get("#SubmitCreate").should("be.visible").click()
        cy.wait(tiempo)
        cy.screenshot("ErrorEmail")
        //this.Seccion3("#create_account_error","Invalid email address.",2000)

    }

    Seccion3(selector,mensaje){
        cy.get(selector).should("be.visible").then((valor)=>{
            let dato = valor.text()
            cy.log(dato)
            expect(dato).equal("Invalid email address.")
            if(dato == mensaje)
            {
                cy.log("el mensaje erroneo es: " +mensaje)
            }

        })
    }



}//final

export default ProyectoUno_PO;