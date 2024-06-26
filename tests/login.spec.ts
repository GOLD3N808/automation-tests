import { test } from '@pages/fixtures/testBase';
import { user } from '@helpers/loginCredentials';
import { expect } from '@playwright/test';

test.describe('Login to account using valid and invalid data', () => {
  const dashboardUrl = 'https://www.saucedemo.com/inventory.html';
  const mainUrl = 'https://www.saucedemo.com/';
  
  test.beforeEach(async ({ page }) => {
    await page.goto(mainUrl);
  });
  
  test('Login with empty username and empty password filds', async ({
    loginPage,
    page,
  }) => {
    await loginPage.login('', '');
    expect(page.url()).toBe(mainUrl);
    await expect(loginPage.redLightedUsernameField).toBeVisible();
    await expect(loginPage.redLightedPasswordField).toBeVisible();
    await expect(loginPage.errorMessageEmptyFields).toBeVisible();
  });

  test('Login using incorrect username and incorrect password', async ({
    loginPage,
    page,
  }) => {
    await loginPage.login(
      user['incorrectUsername'],
      process.env.INCORRECT_PASSWORD
    );
    expect(page.url()).toBe(mainUrl);
    await expect(loginPage.redLightedUsernameField).toBeVisible();
    await expect(loginPage.redLightedPasswordField).toBeVisible();
    await expect(loginPage.errorMessageBadCredentials).toBeVisible();
  });

  test('Login using incorrect username and correct password', async ({
    loginPage,
    page,
  }) => {
    await loginPage.login(
      user['incorrectUsername'],
      process.env.CORRECT_PASSWORD
    );
    expect(page.url()).toBe(mainUrl);
    await expect(loginPage.redLightedUsernameField).toBeVisible();
    await expect(loginPage.redLightedPasswordField).toBeVisible();
    await expect(loginPage.errorMessageBadCredentials).toBeVisible();
  });

  test('Login using correct username and incorrect password', async ({
    loginPage,
    page,
  }) => {
    await loginPage.login(
      user['correctUsername'],
      process.env.INCORRECT_PASSWORD
    );
    expect(page.url()).toBe(mainUrl);
    await expect(loginPage.redLightedUsernameField).toBeVisible();
    await expect(loginPage.redLightedPasswordField).toBeVisible();
    await expect(loginPage.errorMessageBadCredentials).toBeVisible();
  });

  test('Login using correct username and correct password', async ({
    loginPage,
    dashboardPage,
    page,
  }) => {
    await loginPage.login(
      user['correctUsername'],
      process.env.CORRECT_PASSWORD
    );
    expect(page.url()).toBe(dashboardUrl);
    await expect(dashboardPage.burgerMenuButton).toBeVisible();
  });
});
