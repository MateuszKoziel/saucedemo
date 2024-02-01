const { InventoryPage } = require("../pages/inventoryPage");

const inventoryPage = new InventoryPage()

describe('Saucelabs - Online Shop - Cart Tests', () => {
    beforeEach(() => {
        cy.login('standard_user', 'secret_sauce');
    })
    it('should add a product to the cart and verify number of products in the cart', () => {
        inventoryPage.addToCart('sauce-labs-backpack')
        inventoryPage.verifyCartNumber(1)
    })
    it('should add and remove a product from the cart', () => {
        cy.addProduct('sauce-labs-backpack', 1)
        inventoryPage.removeFromCart('sauce-labs-backpack')
        inventoryPage.verifyCartNumber(0)
    })
  })