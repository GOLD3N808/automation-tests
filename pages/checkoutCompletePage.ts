import { Locator, Page } from '@playwright/test'

class CheckoutCompletePage {
    page: Page
    checkoutCompleteTitle: Locator
    summaryOrderInformation: Locator
    backHomeButton: Locator

constructor(page: Page){
this.page = page
this.checkoutCompleteTitle = page.locator('[data-test="title"]').getByText('Checkout: Complete!')
this.summaryOrderInformation = page.locator('[data-test="complete-header"]').getByText('Thank you for your order!')
this.backHomeButton = page.locator('[data-test="back-to-products"]')
}

async backHome() {   
    await this.backHomeButton.click()
}

}
export default CheckoutCompletePage