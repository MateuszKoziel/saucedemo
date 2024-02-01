describe('Saucelabs - Online Shop - Standard Login Test', () => {
  it('should successfully login to the page', () => {
      cy.login('standard_user', 'secret_sauce')
  })
})
