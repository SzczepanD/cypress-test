// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
Cypress.Commands.add("enteringData", () => {
  cy.visit("/");
  cy.contains(" Sign up ").click();
  cy.get('[placeholder="Username"]').type("Jan");
  cy.get('[placeholder="Email"]').type("test@test.pl");
  cy.get('[placeholder="Password"]').type("1234");
  cy.get(".btn-lg").click();
});

Cypress.Commands.add("newAccount", () => {
  const randomUser = Math.floor(Math.random() * (100 - 1) + 1);
  const randomEmail = Math.floor(Math.random() * (1000 - 1) + 1);
  cy.visit("/");
  cy.contains(" Sign up ").click();
  cy.get('[placeholder="Username"]').type(`Szymon${randomUser}`);
  cy.get('[placeholder="Email"]').type(`example${randomEmail}@email.com`);
  cy.get('[placeholder="Password"]').type("123456");
  cy.get(".btn-lg").click();
});

Cypress.Commands.add("wrongLogin", () => {
  cy.visit("/");
  cy.contains(" Sign in ").click();
  cy.get('[placeholder="Email"]').type("example@email.com");
  cy.get('[placeholder="Password"]').type("1234");
  cy.get('[type="submit"]').click();
});

Cypress.Commands.add("login", () => {
  cy.visit("/");
  cy.contains(" Sign in ").click();
  cy.get('[placeholder="Email"]').type("example1@email.com");
  cy.get('[placeholder="Password"]').type("123456");
  cy.get('[type="submit"]').click();
});

Cypress.Commands.add("createNewArticle", () => {
  const randomTitle = Math.floor(Math.random() * (100 - 1) + 1);
  cy.contains(" New Article ").click();
  cy.get('[placeholder="Article Title"]').type(`Testowy${randomTitle}`);
  cy.get('[formcontrolname="description"]').type("Test");
  cy.get('[formcontrolname="body"]').type(
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  );
  cy.get('[placeholder="Enter tags"]').type("#Test");
  cy.contains(" Publish Article ").click();
});
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
