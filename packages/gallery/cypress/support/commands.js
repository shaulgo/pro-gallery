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
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This is will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
import { addMatchImageSnapshotCommand } from 'cypress-image-snapshot/command';

addMatchImageSnapshotCommand();

Cypress.Screenshot.defaults({
  screenshotOnRunFailure: false
})

Cypress.Commands.add("removeElement", (selector) => {
  cy.get(selector).then((element) => {
    element.remove();
  })
})

Cypress.Commands.add("navigateWithParams", (styleParams) => {
  let urlParam = ''
  Object.keys(styleParams).map(sp => urlParam += `${sp}=${styleParams[sp]}&`);
  cy.visit(`http://localhost:3000/?${urlParam}isTestEnvironment=true`);
  cy.get('#toggleButton').invoke('css', 'display', 'none');
  cy.wait(250);
})