// Adds a custom command named 'login' to the 'cy' object
Cypress.Commands.add('login', (username, password) => {
  cy.get('input#login-username').type(username);
  cy.get('input#login-password').type(password);
  cy.get('form#loginform').submit();
});

Cypress.Commands.add('acceptCookies', () => {
  cy.get('#coiPage-1 > div.coi-banner__page-footer > div > button.coi-banner__accept').click()
})

