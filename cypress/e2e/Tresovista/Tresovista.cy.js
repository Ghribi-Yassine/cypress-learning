describe('form tests', { testIsolation: false }, () => {
  beforeEach(() => {
    cy.visit('https://monappli.tresovista.com/')
    cy.viewport(1920, 1080)
  })

  it.skip('Create account', () => {
    cy.get('div[class="login-footer"]')
      .contains(/Inscrivez-vous gratuitement/i)
      .click()
    cy.get('input[name="firstName"]').type('Yassine')
    cy.get('input[name="lastName"]').type('Ghribi')
    cy.get('input[name="email"]').type('ghribi.yassine002@gmail.com')
    cy.get('input[name="password"]').type('Test@123')
    cy.get('button[class="submitting-button auth-button"]').click()
  })

  it.skip('create project', () => {
    if (cy.contains(/Mes dossiers/i)) {
      cy.get('div[class="element-centred"]')
        .contains(/Ajouter un dossier/i)
        .click()
    }

    cy.get('input[name="projectName"]').type('project 1')
    cy.get('button[class="submitting-button contact-button"]')
      .contains(/Créer/i)
      .click()
  })

  it('open a project', () => {
    cy.get('button[class="Buttons button-wrapper submitting-button"]')
      .contains(/Afficher/i)
      .click()
  })

  it.skip('create category', () => {
    cy.get('button[class="create-categories-button"]').click()
    cy.get('input[class="field-for-category"]').type(
      'testing categories{enter}'
    )
  })
})
