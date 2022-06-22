import ProyectoUno_PO from '../../support/PageObject/Proyecto1/Proyecto1_Po'

/// <reference types = 'Cypress' />

describe('Page Object Model',()=>{

    const master = new ProyectoUno_PO()

    master.visitHome()
    it('Test seccion1',()=>{
        master.Seccion1("fulanito@yopmail.com",2000)
    })

    it('Test seccion2 y seccion3',()=>{
        master.Seccion2("fulanitoopmailcom",2000)
        //master.Seccion3("#create_account_error","Invalid email address.",2000)
        cy.ValidarCampo("#create_account_error","Invalid email address.")
    })

})