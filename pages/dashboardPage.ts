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
//
}

addToCartButton(numberOfProduct){
    return this.page.locator('[data-test="inventory-item"]').nth(numberOfProduct).getByText('Add to cart')
}

removeButton(numberOfProduct){
    return this.page.locator('[data-test="inventory-item"]').nth(numberOfProduct).getByText('Remove')
}

productLink(numberOfProduct){
    return this.page.locator('[data-test="inventory-item-name"]').nth(numberOfProduct)
}



async addProduct(numberOfProduct){
    await this.addToCartButton(numberOfProduct).click()
}

async removeProduct(numberOfProduct){
    await this.removeButton(numberOfProduct).click()
}

async goToProductDetails(numberOfProduct){
    await this.productLink(numberOfProduct).click()
}

}
export default DashboardPage