const { personUrl } = require("../../../../../global/Person/url")

context('Person', () => {
  let id = 0

  it('Insert user data into database', () => {

    cy.fixture('person').then(data => {
      const requestBody = data

      cy.bodyRequest('POST', personUrl, requestBody).then(({ status, body }) => {
        cy.validateBodyRequest(status, body, requestBody)

        id = body.id
      })
    })
  })

  it('Delete one person in database', () => {
    const url = `${personUrl}/${id}`

    cy.noBodyReq('DELETE', url).then(({ status }) => {
      expect(status).to.eq(204)
    })
  })
})