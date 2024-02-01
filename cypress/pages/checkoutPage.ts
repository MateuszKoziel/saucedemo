export class CheckoutPage {
  continueBtn = '[data-test="continue"]'
  firstName = '[data-test="firstName"]'
  lastName = '[data-test="lastName"]'
  postalCode = '[data-test="postalCode"]'
  errorMessage = '.error-message-container'

  validateEmptyFieldsError() {
    cy.get(this.continueBtn).click()
    cy.get(this.firstName).should('have.class', 'error')
    cy.get(this.lastName).should('have.class', 'error')
    cy.get(this.postalCode).should('have.class', 'error')
    cy.get(this.errorMessage).should('be.visible')
  }
  fillForm(
    clientName: string,
    clientLastName: string,
    clientPostalCode: string
  ) {
    cy.get(this.firstName).type(clientName)
    cy.get(this.lastName).type(clientLastName)
    cy.get(this.postalCode).type(clientPostalCode)
  }
  goToOverview() {
    cy.get(this.continueBtn).click()
    cy.contains('Checkout: Overview')
    cy.url(Cypress.env().baseUrl).should('include', '/checkout-step-two.html')
  }
}
