import { Locator, Page } from '@playwright/test'

class DashboardPage {
    page: Page
    userMenu: Locator
    usernameField: Locator
    passwordField: Locator
    logoutLink: Locator
    mainDashboardContainer: Locator

constructor(page: Page){
this.page = page
this.userMenu = page.locator('#react-burger-menu-btn')
this.logoutLink = page.locator('#logout_sidebar_link')
this.mainDashboardContainer = page.locator('#inventory_container')
}


async logout(){   
    this.userMenu.click()
    this.logoutLink.click() 
}

}
export default DashboardPage