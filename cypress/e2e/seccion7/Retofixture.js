/// <reference types = 'Cypress' />
describe('Reto Fixture',()=>{
    it('Reto',()=>{

        cy.fixture("datos2").then(testdata =>{

            testdata.forEach(data => {
                const d_nombre=data.nombre
                const d_email= data.email
                const d_dir1=data.dir1
                const d_dir2=data.dir2

                cy.visit('https://demoqa.com/text-box')
                cy.on('uncaught:exception', (err, runnable) => {
                    return false
                })
                cy.title().should('eq','ToolsQA')
                cy.wait(2000)

                cy.get("#userName").should("be.visible").type(d_nombre)
                cy.get("#userEmail").should("be.visible").type(d_email)
                cy.get("#currentAddress").should("be.visible").type(d_dir1)
                cy.get("#permanentAddress").should("be.visible").type(d_dir2)


            });


        })

        
        
        
    })

    it.only('Reto 2',()=>{

        cy.fixture("convert_excel_json").then(testdata =>{

            testdata.forEach(data => {
                const d_nombre=data.nombre
                const d_email= data.email
                const d_dir1=data.dir1
                const d_dir2=data.dir2

                cy.visit('https://demoqa.com/text-box')
                cy.on('uncaught:exception', (err, runnable) => {
                    return false
                })
                cy.title().should('eq','ToolsQA')
                cy.wait(2000)

                cy.get("#userName").should("be.visible").type(d_nombre)
                cy.get("#userEmail").should("be.visible").type(d_email)
                cy.get("#currentAddress").should("be.visible").type(d_dir1)
                cy.get("#permanentAddress").should("be.visible").type(d_dir2)


            });


        })

        
        
        
    })
})