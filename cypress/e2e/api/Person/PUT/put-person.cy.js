import { personUrl } from "../../../../../global/Person/url"

context('PUT person', () => {
  it('Update user data in database', () => {
    const url = `${personUrl}/1`

    cy.fixture('updatePerson').then(data => {
      const requestBody = data

      cy.bodyRequest('PUT', url, requestBody).then(({ status, body }) => {
        cy.validateBodyRequest(status, body, requestBody)
      })
    })
  })
})