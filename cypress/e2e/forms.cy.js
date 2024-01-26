describe('form tests', () => {
  beforeEach(() => {
    cy.visit('https://www.dev.tresovista.laxmi.cloud')
  })
  it('Create account', () => {
    cy.viewport(1920, 1110)
    cy.get('div[class="login-footer"]')
      .contains(/Inscrivez-vous gratuitement/i)
      .click()
    cy.get('input[name="firstName"]').type('Yassine')
    cy.get('input[name="lastName"]').type('Ghribi')
    cy.get('input[name="email"]').type('ghribi.yassine002+Test@gmail.com')
    cy.get('input[name="password"]').type('Test@123')
    cy.get('button[class="submitting-button auth-button"]').click()
  })
  it.only('Login', () => {
    cy.get('input[name="email"]').type('ghribi.yassine002+Test@gmail.com')
    cy.get('input[name="password"]').type('Test@123')
    cy.get('button[class="submitting-button auth-button"]').click()
    if (cy.contains(/Mes dossiers/i)) {
    } else {
      cy.get('input[name="projectName"]').type('project 1')
      cy.get('button[class="submitting-button contact-button"]')
        .contains(/Créer/i)
        .click()
    }
  })
})
