import { deleteCookiesForSite } from "./utils";

Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
})

beforeEach(() => {
    deleteCookiesForSite(`https://am-builder.com`);

    cy.visit(`https://am-builder.com`);
    cy.get('button.js--cookie-info-btn').click()  
})

