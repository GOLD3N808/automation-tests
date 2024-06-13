import { Locator, Page } from '@playwright/test';

class CheckoutStepTwoPage {
  page: Page;
  checkoutOverviewTitle: Locator;
  cancelButton: Locator;
  finishButton: Locator;
  productElement: Locator;

  constructor(page: Page) {
    this.page = page;
    this.checkoutOverviewTitle = page
      .locator('[data-test="title"]')
      .getByText('Checkout: Overview');
    this.cancelButton = page.locator('[data-test="cancel"]');
    this.finishButton = page.locator('[data-test="finish"]');
    this.productElement = page.locator('[data-test="inventory-item"]');
  }

  async finishCheckout() {
    await this.finishButton.click();
  }

  async backToFirstStep() {
    await this.cancelButton.click();
  }
}
export default CheckoutStepTwoPage;
