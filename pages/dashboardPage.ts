import { Locator, Page } from '@playwright/test'

class DashboardPage {
    page: Page
    burgerMenuButton: Locator
    logoutLink: Locator
    
constructor(page: Page){
this.page = page
this.burgerMenuButton = page.locator('#react-burger-menu-btn')
this.logoutLink = page.locator('#logout_sidebar_link')
}


async logout(){   
    await this.burgerMenuButton.click();
    await this.logoutLink.click();
}

}
export default DashboardPage