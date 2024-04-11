import { Locator, Page } from '@playwright/test'

class CartPage {
    page: Page
    userMenu: Locator
    usernameField: Locator
    passwordField: Locator
    logoutLink: Locator

constructor(page: Page){
this.page = page
this.userMenu = page.locator('#react-burger-menu-btn')
this.logoutLink = page.locator('#logout_sidebar_link')
}


async logout(){   
    this.userMenu.click()
    this.logoutLink.click() 
}

}
export default CartPage