import { Locator, Page } from '@playwright/test'
import BasePage from '@pages/basePage'

class CartPage extends BasePage {
    page: Page
    yourCartTitle: Locator
    productElement: Locator
    continueShoppingButton: Locator
    cartContainer: Locator
    numberOfProductInCart: number
    checkoutButton: Locator

constructor(page: Page){
super(page)
this.page = page
this.yourCartTitle = page.locator('[data-test="title"]').getByText('Your Cart')
this.productElement = page.locator('[data-test="inventory-item"]')
this.continueShoppingButton = page.locator('#continue-shopping')
this.cartContainer = page.locator('[data-test="cart-contents-container"]')
this.checkoutButton = page.locator('#checkout')
}

private removeButton(numberOfProductInCart){
    return this.productElement.nth(numberOfProductInCart - 1).getByText('Remove')
}

async backToDashboard() {
    await this.continueShoppingButton.click()
}

async removeProduct(numberOfProductInCart) {
    await this.removeButton(numberOfProductInCart).click()
}

}
export default CartPage