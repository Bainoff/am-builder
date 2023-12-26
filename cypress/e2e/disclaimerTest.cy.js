/// <reference types="cypress"/>

import DisclaimerPage from "../pages/DisclaimerPage";



describe("Disclaimer page test", () => {
    it("Page language check", () => {
        cy.clearAllCookies()
        cy.visit('https://am-builder.com');
        cy.get('button.js--cookie-info-btn').click()
        cy.get('html.bx-core').should('have.attr', 'lang', 'en')

        
    })
})