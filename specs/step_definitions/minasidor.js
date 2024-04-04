import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";



Given('I am on the login page', () => {
  cy.visit('https://minasidor.myh.se/login/?ReturnUrl=https%3a%2f%2fminasidor.myh.se%2f')
  cy.acceptCookies()
});

When('I login with my {string} and {string}', (username, password) => {
  cy.login(username, password)
});

Then('I should be logged in', () => {
  // TODO: implement step
});