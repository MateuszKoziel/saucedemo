export class CartPage {
    continueShoppingBtn = '[data-test="continue-shopping"]'
    checkoutBtn = '[data-test="checkout"]'
    cartList = '.cart_list'
    cartItem = '.cart_item'
    inventoryItemName = '.inventory_item_name'

    isOnTheCartList(productName) {
        cy.get(`${this.cartItem} ${this.inventoryItemName}`).contains(productName).should('exist')
    }

}