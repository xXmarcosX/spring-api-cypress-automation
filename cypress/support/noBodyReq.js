Cypress.Commands.add('noBodyReq', (method, url) => {
  cy.request({ method, url })
})