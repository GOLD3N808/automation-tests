import { test } from '@pages/fixtures/testBase';
import { user } from '@helpers/loginCredentials';
import { expect } from '@playwright/test';

test.describe('tests of links redirection from user menu', () => {
  test.beforeEach(async ({ page, loginPage }) => {
    await page.goto('https://www.saucedemo.com/');
    await loginPage.login(
      user['correctUsername'],
      process.env.CORRECT_PASSWORD,
    );
  });

  test('Go to All Items', async ({ cartPage, page, dashboardPage }) => {
    await dashboardPage.goToCart();
    await cartPage.goToAllItemsLink();
    expect(page.url()).toBe('https://www.saucedemo.com/inventory.html');
    await expect(dashboardPage.dashboardContainer).toBeVisible();
  });

  test('Go to About', async ({ dashboardPage, cartPage, page }) => {
    await dashboardPage.goToCart();
    await cartPage.goToAboutLink();
    expect(page.url()).toBe('https://saucelabs.com/');
    await expect(cartPage.cartContainer).toBeHidden();
  });

  test('Go to Reset App State', async ({ dashboardPage, cartPage }) => {
    await dashboardPage.addProduct(1);
    await dashboardPage.addProduct(2);
    await dashboardPage.goToCart();
    await cartPage.resetAppState();
    await expect.soft(cartPage.productElement).toBeHidden();
    await cartPage.closeBurgerMenu();
    await cartPage.backToDashboard();
    await expect(dashboardPage.dashboardContainer).toBeVisible();
    await expect(dashboardPage.removeButton(1)).toBeHidden();
    await expect(dashboardPage.removeButton(2)).toBeHidden();
  });
});
