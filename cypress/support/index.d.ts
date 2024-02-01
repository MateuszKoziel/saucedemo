/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable {
    /**
     * Custom command to log in a user.
     * @example cy.login('username', 'password')
     */
    login(username: string, password: string): Chainable<void>
    /**
     * Custom command to add a product to the cart
     * @example cy.addProduct(Products.backpack.selector, 1)
     */
    addProduct(product: string, number: number): Chainable<void>
    /**
     * Custom command to open cart with already added two products.
     * @example cy.openCartWithTwoProducts(Products.backpack.selector, Products.tShirt.selector)
     */
    openCartWithTwoProducts(product1: string, product2: string): Chainable<void>
  }
}
