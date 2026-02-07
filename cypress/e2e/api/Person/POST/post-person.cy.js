import { personUrl } from "../../../../../global/Person/url"

context('POST person', () => {
  it('Insert user data into database', () => {

    cy.fixture('person').then(data => {
      const requestBody = data

      cy.bodyRequest('POST', personUrl, requestBody).then(({ status, body }) => {
        cy.validateBodyRequest(status, body, requestBody)
      })
    })
  })
})