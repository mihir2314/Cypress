/// <reference types = "Cypress"/>

//const { should } = require("chai")

describe("Test Suite",function(){
    it("1st test case",function(){
        cy.visit("https://hub.urbanledger.app/")
        cy.get('.css-tlfecz-indicatorContainer').click()
        cy.get('#react-select-2-option-0').click()
        cy.get('.mobile-number').click().type('9967100101')
        cy.get('button').click()
        cy.get('.login-auth-check > a').then(($a)=>{
            if ($a.text().includes('Resend OTP')) {
                cy.get(':nth-child(1) > .form-control').click().type(1)
                cy.get('[style="display: flex;"] > :nth-child(2) > .form-control').click().type(2)
                cy.get(':nth-child(3) > .form-control').click().type(3)
                cy.get(':nth-child(4) > .form-control').click().type(4)
                cy.get(':nth-child(5) > .form-control').click().type(5)
                cy.get(':nth-child(6) > .form-control').click().type(6)
                cy.get('.me-2').click()
                cy.get('.btn-transparent > [style="box-sizing: border-box; display: inline-block; overflow: hidden; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px; position: relative; max-width: 100%;"] > .rounded-circle').click()
                cy.get('.p-2 > .btn').click()
                cy.log('inside if block')
                cy.wait(2000)
                cy.get('.css-tlfecz-indicatorContainer').click()
                cy.get('#react-select-2-option-0').click()
                cy.get('.mobile-number').click().type('9967100101')
                cy.get('button').click()
            } else {
                cy.log('else block')
                
            }
        })
     })
})
