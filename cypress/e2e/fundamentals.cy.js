describe('Fundamental tests', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/fundamentals')
  })
  it('Contains correct header text', () => {
    cy.getDataTest('fundamentals-header').should(
      'contain.text',
      'Testing Fundamentals'
    )
  })
  it('According works correctly', () => {
    cy.contains(/Your tests will exist in a describe block/i).should(
      'not.be.visible'
    )
    cy.get('[data-test="according-item-1"] div[role="button"]').click()
    cy.contains(/Your tests will exist in a describe block/i).should(
      'be.visible'
    )
    cy.get('[data-test="according-item-1"] div[role="button"]').click()
    cy.contains(/Your tests will exist in a describe block/i).should(
      'not.be.visible'
    )
  })
})
