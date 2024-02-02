import * as Products from 'support/products'
import { InventoryPage } from 'pages/inventoryPage'
import { CartPage } from 'pages/cartPage'
import { CheckoutInfoPage } from 'pages/checkoutInfoPage'
import { faker } from '@faker-js/faker'
import { CheckoutOverviewPage } from 'pages/checkoutOverviewPage'
const inventoryPage = new InventoryPage()
const cartPage = new CartPage()
const checkoutInfoPage = new CheckoutInfoPage()
const checkoutOverviewPage = new CheckoutOverviewPage()

describe('Saucelabs - Online Shop - Cart & Checkout Tests', () => {
  beforeEach(() => {
    cy.login('standard_user', 'secret_sauce')
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

  it('should add 2 products and proceed to checkout', () => {
    cy.openCartWithTwoProducts(
      Products.backpack.selector,
      Products.tShirt.selector
    )
    cartPage.goToCheckout()
  })

  it('should verify Checkout form empty fields validation', () => {
    cy.openCartWithTwoProducts(
      Products.backpack.selector,
      Products.tShirt.selector
    )
    cartPage.goToCheckout()
    checkoutInfoPage.validateEmptyFieldsError()
  })

  it('should fill Checkout form and proceed to Overview', () => {
    cy.openCartWithTwoProducts(
      Products.backpack.selector,
      Products.tShirt.selector
    )
    cartPage.goToCheckout()
    checkoutInfoPage.fillForm(
      faker.person.firstName(),
      faker.person.lastName(),
      faker.location.zipCode()
    )
    checkoutInfoPage.goToOverview()
  })
  
  it('should verify if prices of added products are correct in Overview and finalize order', () => {
    cy.openCartWithTwoProducts(
      Products.backpack.selector,
      Products.tShirt.selector
    )
    cartPage.goToCheckout()
    checkoutInfoPage.fillForm(
      faker.person.firstName(),
      faker.person.lastName(),
      faker.location.zipCode()
    )
    checkoutInfoPage.goToOverview()
    checkoutOverviewPage.verifyTotalPrices()
    checkoutOverviewPage.finishOrder()
  })
})
