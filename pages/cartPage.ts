import { Locator, Page } from '@playwright/test'
import { runInThisContext } from 'vm'

class CartPage {
    page: Page
    yourCartTitle: Locator
    productElement: Locator
    continueShoppingButton: Locator
    cartContainer: Locator
    numberOfProductInCart: number

constructor(page: Page){
this.page = page
this.yourCartTitle = page.locator('[data-test="title"]').getByText('Your Cart')
this.productElement = page.locator('[data-test="inventory-item"]')
this.continueShoppingButton = page.locator('#continue-shopping')
this.cartContainer = page.locator('[data-test="cart-contents-container"]')
}

private removeButton(numberOfProductInCart){
    return this.productElement.nth(numberOfProductInCart).getByText('Remove')
}

async backToDashboard() {
    await this.continueShoppingButton.click()
}

async removeProduct(numberOfProductInCart) {
    await this.removeButton(numberOfProductInCart).click()
}

}
export default CartPage