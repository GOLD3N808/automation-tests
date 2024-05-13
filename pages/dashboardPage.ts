import { Locator, Page } from '@playwright/test'
import BasePage from '@pages/basePage'

class DashboardPage extends BasePage {
    page: Page
    dashboardContainer: Locator
    numberOfProduct: number
    
constructor(page: Page){
super(page)
this.page = page
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