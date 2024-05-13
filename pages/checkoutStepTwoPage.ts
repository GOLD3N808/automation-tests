import { Locator, Page } from '@playwright/test'

class CheckoutStepTwoPage {
    page: Page
    checkoutOverviewTitle: Locator
    cancelButton: Locator
    finishButton: Locator

constructor(page: Page){
this.page = page
this.checkoutOverviewTitle = page.locator('[data-test="title"]').getByText('Checkout: Overview')
this.cancelButton = page.locator('#cancel')
this.finishButton = page.locator('#finish')
}

}
export default CheckoutStepTwoPage