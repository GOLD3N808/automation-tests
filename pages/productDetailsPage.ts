import { Locator, Page } from '@playwright/test'
import BasePage from '@pages/basePage'

class ProductsDetailsPage extends BasePage {
    page: Page
    removeButton: Locator
    addToCartButton: Locator
    backToProductsLink: Locator
    
constructor(page: Page){
super(page)
this.page = page
this.removeButton = page.locator('#remove')
this.addToCartButton = page.locator('#add-to-cart')
this.backToProductsLink = page.locator('#back-to-products')
}

async removeProduct() {   
    await this.removeButton.click()
}

async backToProducts() {   
    await this.backToProductsLink.click()
}

}
export default ProductsDetailsPage