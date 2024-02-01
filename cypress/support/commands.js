const { InventoryPage } = require("../pages/inventoryPage")

const inventoryPage = new InventoryPage()
Cypress.Commands.add('login', (username, password) => {
    cy.visit('/')
    cy.get('[data-test="username"]').type(username)
    cy.get('[data-test="password"]').type(password)
    cy.get('[data-test="login-button"]').click()
    cy.url(Cypress.env().baseUrl).should('include', '/inventory.html')
})
Cypress.Commands.add('addProduct', (product, number) => {
    inventoryPage.addToCart(product)
    inventoryPage.verifyCartNumber(number)
})