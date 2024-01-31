describe('testing taki popups', () => {
  beforeEach(() => {
    cy.visit('https://popups.softylines.com/login')
    cy.viewport(1920, 1080)
  })
  it('login', () => {
    cy.viewport(1920, 1080)
    cy.get('input[name="email"]').type('ghribi.yassine002+test@gmail.com')
    cy.get('input[name="password"]').type('Test@123')
    cy.get('button[type="submit"]').click()
  })
})
