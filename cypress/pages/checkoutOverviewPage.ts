export class CheckoutOverviewPage {
  cartItemLabels = '.cart_item_label'
  itemName = '.inventory_item_name'
  itemDesc = '.inventory_item_desc'
  itemPrice = '.inventory_item_price'

  totalPriceWithoutTax = '.summary_subtotal_label'
  totalTax = '.summary_tax_label'
  totalPriceWithTax = '.summary_total_label'

  finishBtn = '[data-test="finish"]'

  verifyTotalPrices() {
    let sum = 0
    cy.get(this.itemPrice)
      .each(($price) => {
        const priceText = $price.text().trim().substring(1)
        sum += parseFloat(priceText)
      })
      .then(() => {
        cy.get(this.totalPriceWithoutTax)
          .invoke('text')
          .then((priceTotalText) => {
            const total = parseFloat(priceTotalText.trim().substring(13))
            expect(sum).to.eq(total)
          })
        cy.get(this.totalPriceWithTax)
          .invoke('text')
          .then((priceTotalTaxText) => {
            const totalWithTax = parseFloat(
              priceTotalTaxText.trim().substring(8)
            )
            const totalSum = parseFloat((sum * 1.08).toFixed(2))
            expect(totalSum).to.eq(totalWithTax)
          })
      })
  }
  finishOrder() {
    cy.get(this.finishBtn).click()
    cy.contains('Checkout: Complete!')
    cy.contains('Thank you for your order!')
    cy.url(Cypress.env().baseUrl).should('include', '/checkout-complete.html')
  }
}
