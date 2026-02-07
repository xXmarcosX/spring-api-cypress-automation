const { personUrl } = require("../../../../../global/Person/url")

context('Person', () => {
  it('Get one person in database', () => {
    const url = `${personUrl}/5`

    cy.fixture('person').then(data => {
      const requestBody = data

      cy.noBodyReq('GET', url).then(({ status, body }) => {
        cy.validateBodyRequest(status, body, requestBody)
      })
    })
  })
})