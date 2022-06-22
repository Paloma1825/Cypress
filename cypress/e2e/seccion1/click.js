/// <reference types = "Cypress" />

describe("click",()=>{

    it("test click",()=>{


        cy.visit("https://www.amazon.es/ap/signin?openid.pape.max_auth_age=0&openid.return_to=https%3A%2F%2Fwww.amazon.es%2F%3Fref_%3Dnav_custrec_signin&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.assoc_handle=esflex&openid.mode=checkid_setup&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0&")
        cy.wait(2000)
        Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
      }) //captura excepciones en caso de fallo
      cy.get("#ap_email").should("be.enabled").type("paloma.sanz.alvarez@gmail.com")
      cy.wait(2000)
      cy.get("#continue").should("be.visible").click()
      cy.wait(2000)
      cy.get("#ap_password").should("be.enabled").type("Qwerty123")
      cy.wait(2000)
      cy.get("#signInSubmit").should("be.visible").click()
      cy.wait(2000)
      cy.get("#nav-xshop > a:nth-child(3)").click()
      cy.wait(2000)
      cy.get("#twotabsearchtextbox").type("ropa")
      cy.wait(1500)
      cy.get("#nav-search-submit-button").click()
      cy.wait(2000)

    })

    it("test force true",()=>{


        cy.visit("https://www.amazon.es/ap/signin?openid.pape.max_auth_age=0&openid.return_to=https%3A%2F%2Fwww.amazon.es%2F%3Fref_%3Dnav_custrec_signin&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.assoc_handle=esflex&openid.mode=checkid_setup&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0&")
        cy.wait(2000)
        Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
      }) //captura excepciones en caso de fallo
      cy.get("#ap_email").should("be.enabled").type("paloma.sanz.alvarez@gmail.com")
      cy.wait(2000)
      cy.get("#continue").should("be.visible").click()
      cy.wait(2000)
      cy.get("#ap_password").should("be.enabled").type("Qwerty123")
      cy.wait(2000)
      cy.get("#signInSubmit").should("be.visible").click()
      cy.wait(2000)
      cy.get("#nav-xshop > a:nth-child(3)").click()
      cy.wait(2000)
      cy.get("#twotabsearchtextbox").type("ropa")
      cy.wait(1500)
      cy.get("#nav-search-submit-button").click({force: true})
      cy.wait(2000)

    })

    it.only("test por coordenadas",()=>{


        cy.visit("https://www.amazon.es/ap/signin?openid.pape.max_auth_age=0&openid.return_to=https%3A%2F%2Fwww.amazon.es%2F%3Fref_%3Dnav_custrec_signin&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.assoc_handle=esflex&openid.mode=checkid_setup&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0&")
        cy.wait(2000)
        Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
      }) //captura excepciones en caso de fallo
      cy.get("#ap_email").should("be.enabled").type("paloma.sanz.alvarez@gmail.com")
      cy.wait(2000)
      cy.get("#continue").should("be.visible").click()
      cy.wait(2000)
      cy.get("#ap_password").should("be.enabled").type("Qwerty123")
      cy.wait(2000)
      cy.get("#signInSubmit").should("be.visible").click()
      cy.wait(2000)
      cy.get("#glow-ingress-line2").click(5,5)
    })





})