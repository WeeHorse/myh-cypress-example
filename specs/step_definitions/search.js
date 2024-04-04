import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given('I am on the home page', () => {
  cy.visit('/')
  cy.url().should('include', 'myh.se') // url include (not location contains)
});

Given('I see a cookie prompt', () => {
  cy.get('#coiPage-1 > .coi-banner__page-footer > .coi-button-group > .coi-banner__accept').should('be.visible')
});

When('I click the Accept button', () => {
  cy.get('#coiPage-1 > div.coi-banner__page-footer > div > button.coi-banner__accept').click()
});

Then('I should not see a cookie prompt', () => {
  // TODO: implement step
});

/* No duplicate steps, this one already above
Given('I am on the home page', () => {});*/

When('I click in the search bar', () => {
  cy.get('#input-54').click()
});

When('I type {string} followed by the Enter key', (str) => {
  cy.get('#input-54').type(str + '{enter}')
});

Then('I should see {string} in the search results', (str) => {
  cy.get('.v-list-item__content').contains(str, { matchCase: false })
});
