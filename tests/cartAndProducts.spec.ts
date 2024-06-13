import { test } from '@pages/fixtures/testBase';
import { user } from '@helpers/loginCredentials';
import { expect } from '@playwright/test';

test.describe('Tests of add and remove products in cart', () => {
  test.beforeEach(async ({ loginPage, page }) => {
    await page.goto('https://www.saucedemo.com/');
    await loginPage.login(
      user['correctUsername'],
      process.env.CORRECT_PASSWORD,
    );
  });

  test('Add products to cart', async ({ dashboardPage, cartPage, page }) => {
    await dashboardPage.addProduct(1);
    await expect(dashboardPage.removeButton(1)).toBeVisible();
    await expect(dashboardPage.redlightedNumberOfCart('1')).toBeVisible();
    await dashboardPage.goToCart();
    await expect(cartPage.yourCartTitle).toBeVisible();
    expect(page.url()).toBe('https://www.saucedemo.com/cart.html');
    await expect(cartPage.productElement).toHaveCount(1);
    await cartPage.backToDashboard();
    expect(page.url()).toBe('https://www.saucedemo.com/inventory.html');
    await expect(dashboardPage.dashboardContainer).toBeVisible();
    await dashboardPage.addProduct(2);
    await expect(dashboardPage.removeButton(2)).toBeVisible();
    await expect(dashboardPage.redlightedNumberOfCart('2')).toBeVisible();
    await dashboardPage.goToCart();
    await expect(cartPage.yourCartTitle).toBeVisible();
    expect(page.url()).toBe('https://www.saucedemo.com/cart.html');
    await expect(cartPage.productElement).toHaveCount(2);
  });

  test('Remove products from cart ', async ({
    dashboardPage,
    cartPage,
    page,
  }) => {
    await dashboardPage.addProduct(1);
    await dashboardPage.addProduct(2);
    await dashboardPage.goToCart();
    await expect(cartPage.cartContainer).toBeVisible();
    await cartPage.removeProduct(1);
    await expect(cartPage.productElement).toHaveCount(1);
    await expect(dashboardPage.redlightedNumberOfCart('1')).toBeVisible();
    await cartPage.backToDashboard();
    expect(page.url()).toBe('https://www.saucedemo.com/inventory.html');
    await expect(dashboardPage.dashboardContainer).toBeVisible();
    await dashboardPage.removeProduct(2);
    await expect(dashboardPage.redlightedNumberOfCart('1')).toBeHidden();
    await expect(dashboardPage.removeButton(2)).toBeHidden();
    await expect(dashboardPage.addToCartButton(2)).toBeVisible();
    await dashboardPage.goToCart();
    await expect(cartPage.cartContainer).toBeVisible();
    await expect(cartPage.productElement).toBeHidden();
  });

  test('Remove products from product view ', async ({
    dashboardPage,
    productsDetailsPage,
    page,
  }) => {
    await dashboardPage.addProduct(1);
    await dashboardPage.addProduct(2);

    await dashboardPage.goToProductDetails(1);
    await expect(productsDetailsPage.backToProductsLink).toBeVisible();
    await productsDetailsPage.removeProduct();
    await expect(productsDetailsPage.removeButton).toBeHidden();
    await expect(productsDetailsPage.addToCartButton).toBeVisible();
    await expect(productsDetailsPage.redlightedNumberOfCart('1')).toBeVisible();
    await productsDetailsPage.backToProducts();
    expect(page.url()).toBe('https://www.saucedemo.com/inventory.html');
    await expect(dashboardPage.dashboardContainer).toBeVisible();
    await expect(dashboardPage.removeButton(1)).toBeHidden();
    await expect(dashboardPage.addToCartButton(1)).toBeVisible();

    await dashboardPage.goToProductDetails(2);
    await expect(productsDetailsPage.backToProductsLink).toBeVisible();
    await productsDetailsPage.removeProduct();
    await expect(productsDetailsPage.removeButton).toBeHidden();
    await expect(productsDetailsPage.addToCartButton).toBeVisible();
    await expect(productsDetailsPage.redlightedNumberOfCart('1')).toBeHidden();
    await productsDetailsPage.backToProducts();
    expect(page.url()).toBe('https://www.saucedemo.com/inventory.html');
    await expect(dashboardPage.dashboardContainer).toBeVisible();
    await expect(dashboardPage.removeButton(2)).toBeHidden();
  });
});
