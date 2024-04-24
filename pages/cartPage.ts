import { Locator, Page } from '@playwright/test'

class CartPage {
    page: Page
    yourCartTitle: Locator
    productElement: Locator
    continueShoppingButton: Locator

constructor(page: Page){
this.page = page
this.yourCartTitle = page.locator('[data-test="title"]').getByText('Your Cart')
this.productElement = page.locator('[data-test="inventory-item"]')
this.continueShoppingButton = page.locator('#continue-shopping')
}

async backToDashboard() {
    await this.continueShoppingButton.click()
}

}
export default CartPage