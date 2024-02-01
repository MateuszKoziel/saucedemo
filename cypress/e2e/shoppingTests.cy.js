const { InventoryPage } = require("../pages/inventoryPage");

const inventoryPage = new InventoryPage()

describe('Saucelabs - Online Shop - Cart Tests', () => {
    beforeEach(() => {
        cy.login('standard_user', 'secret_sauce');
    })
    it('should add a product to the cart', () => {
        inventoryPage.addToCart('sauce-labs-backpack')
        inventoryPage.verifyCartNumber(1)
    })
  })