export class CartPage {
    continueShoppingBtn = '[data-test="continue-shopping"]'
    checkoutBtn = '[data-test="checkout"]'
    cartList = '.cart_list'
    cartItem = '.cart_item'
    inventoryItemName = '.inventory_item_name'

    isOnTheCartList(productName: string) {
        cy.get(`${this.cartItem} ${this.inventoryItemName}`).contains(productName).should('exist')
    }
    goToCheckout() {
        cy.get(this.checkoutBtn).click()
        cy.contains('Checkout: Your Information')
        cy.url(Cypress.env().baseUrl).should('include', '/checkout-step-one.html')
    }

}