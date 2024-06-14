import { test } from '@pages/fixtures/testBase';
import { user } from '@helpers/loginCredentials';
import { expect } from '@playwright/test';

test.describe('Logout from account', () => {
  const mainUrl = 'https://www.saucedemo.com/';
  test.beforeEach(async ({ loginPage, page }) => {
    await page.goto(mainUrl);
    await loginPage.login(
      user['correctUsername'],
      process.env.CORRECT_PASSWORD
    );
  });

  test('Logout from dashboard page', async ({
    dashboardPage,
    page,
    loginPage,
  }) => {
    await dashboardPage.logout();
    expect(page.url()).toBe(mainUrl);
    await expect(loginPage.loginButton).toBeVisible();
  });

  test('Logout from cart page', async ({
    dashboardPage,
    cartPage,
    page,
    loginPage,
  }) => {
    await dashboardPage.goToCart();
    await cartPage.logout();
    expect(page.url()).toBe(mainUrl);
    await expect(loginPage.loginButton).toBeVisible();
  });
});
