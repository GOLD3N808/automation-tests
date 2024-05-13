import { Locator, Page } from '@playwright/test'

class BasePage {
    page: Page
    burgerMenuButton: Locator
    logoutLink: Locator
    cartIcon: Locator
    allItemsLink: Locator
    aboutLink: Locator
    resetAppStateLink: Locator

constructor(page: Page){
this.page = page
this.burgerMenuButton = page.locator('#react-burger-menu-btn')
this.logoutLink = page.locator('#logout_sidebar_link')
this.cartIcon = page.locator('#shopping_cart_container')
this.allItemsLink = page.locator('#inventory_sidebar_link')
this.aboutLink = page.locator('#about_sidebar_link')
this.resetAppStateLink = page.locator('#reset_sidebar_link')
}

async logout(){   
    await this.burgerMenuButton.click();
    await this.logoutLink.click();
}

async goToCart(){
    await this.cartIcon.click()
}

async goToAllItemsLink(){
    await this.burgerMenuButton.click()
    await this.allItemsLink.click()
}

async goToAboutLink(){
    await this.burgerMenuButton.click()
    await this.aboutLink.click()
}

async resetAppState(){
    await this.burgerMenuButton.click()
    await this.resetAppStateLink.click()
}

}
export default BasePage