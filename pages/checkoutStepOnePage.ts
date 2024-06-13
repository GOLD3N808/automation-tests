import { Locator, Page } from '@playwright/test';

class CheckoutStepOnePage {
  page: Page;
  continueButton: Locator;
  checkoutTitle: Locator;
  firstNameField: Locator;
  lastNameField: Locator;
  zipPostalCodeField: Locator;
  cancelButton: Locator;
  error: Locator;

  constructor(page: Page) {
    this.page = page;
    this.continueButton = page.locator('[data-test="continue"]');
    this.checkoutTitle = page
      .locator('[data-test="title"]')
      .getByText('Checkout: Your Information');
    this.firstNameField = page.locator('[data-test="firstName"]');
    this.lastNameField = page.locator('[data-test="lastName"]');
    this.zipPostalCodeField = page.locator('[data-test="postalCode"]');
    this.cancelButton = page.locator('[data-test="cancel"]');
    this.error = page.locator('[data-test="error"]');
  }

  async enterCustomerData(
    firstname: string,
    lastname: string,
    zipPostalCode: string,
  ) {
    await this.firstNameField.fill(firstname);
    await this.lastNameField.fill(lastname);
    await this.zipPostalCodeField.fill(zipPostalCode);
  }

  async goToNextStepOfCheckout() {
    await this.continueButton.click();
  }

  async backToCart() {
    await this.cancelButton.click();
  }
}
export default CheckoutStepOnePage;
