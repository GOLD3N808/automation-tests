import { Locator, Page } from '@playwright/test'
import internal = require('stream')

class DashboardPage {
    page: Page
    burgerMenuButton: Locator
    logoutLink: Locator
    cartIcon: Locator
    dashboardContainer: Locator
    numberOfProduct: number
    
constructor(page: Page){
this.page = page
this.burgerMenuButton = page.locator('#react-burger-menu-btn')
this.logoutLink = page.locator('#logout_sidebar_link')
this.cartIcon = page.locator('#shopping_cart_container')
this.dashboardContainer = page.locator('[data-test="inventory-container"]')
}

addToCartButton(numberOfProduct){
    return this.page.locator('[data-test="inventory-item"]').nth(numberOfProduct).getByText('Add to cart')
}

removeButton(numberOfProduct){
    return this.page.locator('[data-test="inventory-item"]').nth(numberOfProduct).getByText('Remove')
}

redlightedNumberOfCart(quantityOfRedlightedNumbers: string){
    return this.page.locator('[data-test="shopping-cart-badge"]').getByText(quantityOfRedlightedNumbers)
}

async addProduct(numberOfProduct){
    await this.addToCartButton(numberOfProduct).click()
}

async goToCart(){
    await this.cartIcon.click()
}

async removeProduct(numberOfProduct){
    await this.removeButton(numberOfProduct).click()
}

async logout(){   
    await this.burgerMenuButton.click();
    await this.logoutLink.click();
}

}
export default DashboardPage