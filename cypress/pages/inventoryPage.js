export class InventoryPage {
    inventoryContainer = '.inventory_list'
    inventoryItem = '.inventory_item'
    shoppingCart = '.shopping_cart_container'
    addToCartButton = '[data-test^="add-to-cart-"]'

    addOneProduct(product) {
        return `[data-test="add-to-cart-${product}"]`
    }
    addAllProductsToCart() {
        cy.get(this.inventoryContainer).find(this.inventoryItem).each(($el) => {
            cy.wrap($el).find(this.addToCartButton).click()
        })
    }
    removeProduct(product) {
        return `[data-test="remove-${product}"]`
    }
    verifyProductNumber(number) {
        return cy.get(this.inventoryContainer).find(this.inventoryItem).its('length').should('eq', number)
    }
    addToCart(product) {
        cy.get(this.addOneProduct(product)).click()
    }
    removeFromCart(product) {
        cy.get(this.removeProduct(product)).click()
    }
    verifyCartNumber(expectedNumber) {
        if (expectedNumber === 0) {
            cy.get(this.shoppingCart).find('span').should('not.exist')
        } else {
            cy.get(this.shoppingCart).find('span').should('have.text', expectedNumber);
        }
    }
    goToCartPage() {
        cy.get(this.shoppingCart).click()
        cy.contains('Your Cart')
        cy.url(Cypress.env().baseUrl).should('include', '/cart.html')
    }
    
}