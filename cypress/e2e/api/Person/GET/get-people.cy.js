const { personUrl } = require("../../../../../global/Person/url")

context('People', () => {
  it('Get all people in database', () => {
    cy.noBodyReq('GET', personUrl).then(({ status, body }) => {
      expect(status).to.eq(200)

      cy.log(body)
    })
  })
})