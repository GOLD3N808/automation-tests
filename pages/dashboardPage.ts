import { Locator, Page } from '@playwright/test';
import BasePage from '@pages/basePage';

class DashboardPage extends BasePage {
  page: Page;
  dashboardContainer: Locator;
  numberOfProduct: number;
  sortingDropdownList: Locator;
  productNameSelector: string;
  productPriceSelector: string;

  constructor(page: Page) {
    super(page);
    this.page = page;
    this.dashboardContainer = page.locator('[data-test="inventory-container"]');
    this.sortingDropdownList = page.locator(
      '[data-test="product-sort-container"]',
    );
    this.productNameSelector = '[data-test="inventory-item-name"]';
    this.productPriceSelector = '[data-test="inventory-item-price"]';
  }

  addToCartButton(numberOfProduct) {
    return this.page
      .locator('[data-test="inventory-item"]')
      .nth(numberOfProduct - 1)
      .getByText('Add to cart');
  }

  removeButton(numberOfProduct) {
    return this.page
      .locator('[data-test="inventory-item"]')
      .nth(numberOfProduct - 1)
      .getByText('Remove');
  }

  productLink(numberOfProduct) {
    return this.page.locator(this.productNameSelector).nth(numberOfProduct - 1);
  }

  async sortByAtoZ() {
    await this.sortingDropdownList.click();
    await this.sortingDropdownList.selectOption('az');
    let nameElements = await this.page.$$(this.productNameSelector);
    let texts = await Promise.all(
      nameElements.map(async (element) => await element.textContent()),
    );
    let isSorted = texts.every(
      (text, i, array) => i === 0 || array[i - 1].localeCompare(text) <= 0,
    );
    return isSorted;
  }

  async sortByZtoA() {
    await this.sortingDropdownList.click();
    await this.sortingDropdownList.selectOption('za');
    let nameElements = await this.page.$$(this.productNameSelector);
    let texts = await Promise.all(
      nameElements.map(async (element) => await element.textContent()),
    );
    let isSorted = texts.every(
      (text, i, array) => i === 0 || array[i - 1].localeCompare(text) >= 0,
    );
    return isSorted;
  }

  async sortByPriceAsc() {
    await this.sortingDropdownList.click();
    await this.sortingDropdownList.selectOption('lohi');
    let priceElements = await this.page.$$(this.productPriceSelector);
    let prices = await Promise.all(
      priceElements.map(async (element) => {
        const priceText = await element.textContent();
        const price = parseFloat(priceText.replace('$', ''));
        return price;
      }),
    );

    let isSorted = prices.every(
      (price, i, array) => i === 0 || array[i - 1] <= price,
    );
    return isSorted;
  }

  async sortByPriceDesc() {
    await this.sortingDropdownList.click();
    await this.sortingDropdownList.selectOption('hilo');
    let priceElements = await this.page.$$(this.productPriceSelector);
    let prices = await Promise.all(
      priceElements.map(async (element) => {
        const priceText = await element.textContent();
        const price = parseFloat(priceText.replace('$', ''));
        return price;
      }),
    );

    let isSorted = prices.every(
      (price, i, array) => i === 0 || array[i - 1] >= price,
    );
    return isSorted;
  }

  async addProduct(numberOfProduct) {
    await this.addToCartButton(numberOfProduct).click();
  }

  async removeProduct(numberOfProduct) {
    await this.removeButton(numberOfProduct).click();
  }

  async goToProductDetails(numberOfProduct) {
    await this.productLink(numberOfProduct).click();
  }
}
export default DashboardPage;
