Cypress.Commands.add('bodyRequest', (method, url, body) => {
  cy.request({ method, url, body })
})

Cypress.Commands.add('validateBodyRequest', (status, body, requestBody) => {
  expect(status).to.eq(200)

  expect(body.firstName).to.eq(requestBody.firstName)
  expect(body.lastName).to.eq(requestBody.lastName)
  expect(body.addres).to.eq(requestBody.addres)
  expect(body.gender).to.eq(requestBody.gender)
})