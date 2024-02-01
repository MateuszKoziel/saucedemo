import { InventoryPage } from '../pages/inventoryPage'
import { CartPage } from '../pages/cartPage'
import * as Products from '../support/products'
const inventoryPage = new InventoryPage()
const cartPage = new CartPage()

describe('Saucelabs - Online Shop - Cart Tests', () => {
    beforeEach(() => {
        cy.login('standard_user', 'secret_sauce');
        inventoryPage.verifyProductNumber(6)
    })
    it('should add 1 product to the cart and verify number of products in the cart badge', () => {
        inventoryPage.addToCart(Products.backpack.selector)
        inventoryPage.verifyCartNumber(1)
    })
    it('should add and remove 1 product from the cart', () => {
        cy.addProduct(Products.backpack.selector, 1)
        inventoryPage.removeFromCart(Products.backpack.selector)
        inventoryPage.verifyCartNumber(0)
    })
    it('should add all 6 products to a cart', () => {
        inventoryPage.addAllProductsToCart()
        inventoryPage.verifyCartNumber(6)
    })
    it('should check if added products are visible in the list in the cart', () => {
        inventoryPage.addToCart(Products.backpack.selector)
        inventoryPage.addToCart(Products.tShirt.selector)
        inventoryPage.verifyCartNumber(2)
        inventoryPage.goToCartPage()
        cartPage.isOnTheCartList(Products.backpack.name)
        cartPage.isOnTheCartList(Products.tShirt.name)
    })
  })