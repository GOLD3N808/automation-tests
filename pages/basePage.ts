import { Locator, Page } from '@playwright/test'

class BasePage {
    page: Page
    burgerMenuButton: Locator
    logoutLink: Locator
    cartIcon: Locator

constructor(page: Page){
this.page = page
this.burgerMenuButton = page.locator('#react-burger-menu-btn')
this.logoutLink = page.locator('#logout_sidebar_link')
this.cartIcon = page.locator('#shopping_cart_container')
}

async logout(){   
    await this.burgerMenuButton.click();
    await this.logoutLink.click();
}

async goToCart(){
    await this.cartIcon.click()
}

}
export default BasePage