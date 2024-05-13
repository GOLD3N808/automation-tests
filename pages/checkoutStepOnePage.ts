import { Locator, Page } from '@playwright/test'

class CheckoutStepOnePage {
    page: Page
    continueButton: Locator
    checkoutTitle: Locator
    firstNameField: Locator
    lastNameField: Locator
    zipPostalCodeField: Locator
    cancelButton: Locator

constructor(page: Page){
this.page = page
this.continueButton = page.locator('#continue')
this.checkoutTitle = page.locator('[data-test="title"]').getByText('Checkout: Your Information')
this.firstNameField = page.locator('[data-test="firstName"]')
this.lastNameField = page.locator('[data-test="lastName"]')
this.zipPostalCodeField = page.locator('[data-test="postalCode"]')
this.cancelButton = page.locator('#cancel')
}

}
export default CheckoutStepOnePage