describe('form tests', () => {
  beforeEach(() => {
    cy.visit('https://monappli.tresovista.com/project/113')
    cy.viewport(1920, 1080)
  })
  // it('Create account', () => {
  //   cy.get('div[class="login-footer"]')
  //     .contains(/Inscrivez-vous gratuitement/i)
  //     .click()
  //   cy.get('input[name="firstName"]').type('Yassine')
  //   cy.get('input[name="lastName"]').type('Ghribi')
  //   cy.get('input[name="email"]').type('ghribi.yassine002@gmail.com')
  //   cy.get('input[name="password"]').type('Test@123')
  //   cy.get('button[class="submitting-button auth-button"]').click()
  // })
  it.only('Login', () => {
    cy.get('input[name="email"]').type('ghribi.yassine002+test@gmail.com')
    cy.get('input[name="password"]').type('Test@123')
    cy.get('button[class="submitting-button auth-button"]').click()
    if (cy.contains(/Mes dossiers/i)) {
      if (cy.get('div[class="card"]').contains(/project 1/i)) {
        cy.get('button[class="Buttons button-wrapper submitting-button"]')
          .contains(/Supprimer/i)
          .click()
        cy.get('button[class="submitting-button delete-button"]')
          .contains(/Supprimer/i)
          .click()
      }

      cy.get('div[class="element-centred"]')
        .contains(/Ajouter un dossier/i)
        .click()
    }
    cy.get('input[name="projectName"]').type('project 1')
    cy.get('button[class="submitting-button contact-button"]')
      .contains(/Créer/i)
      .click()
  })
})
