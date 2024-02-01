export class InventoryPage {
    inventoryContainer = '.inventory_list'
    inventoryItem = '.inventory_item'
    shoppingCart = '.shopping_cart_container'

    getProduct(product) {
        return `[data-test="add-to-cart-${product}"]`
    }
    verifyProductNumber(number) {
        return cy.get(this.inventoryContainer).find(this.inventoryItem).its('length').should('eq', number)
    }
    addToCart(product) {
        cy.get(this.getProduct(product)).click()
    }
    verifyCartNumber(number) {
        cy.get(this.shoppingCart).find('span').should('have.text', number)
    }
}