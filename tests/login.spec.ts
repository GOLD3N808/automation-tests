import {test} from '@pages/fixtures/testBase'
import { user } from '@helpers/loginCredentials'
import { expect } from '@playwright/test'

test.describe('Login to account using valid and invalid data', () => {

test.beforeAll(async ({ page }) => {
    await page.goto('https://www.saucedemo.com/')
    })

test('Login with empty username and password filds', async ({ loginPage}) => {
    await loginPage.login('', '')
});

test('Login using incorrect username and incorrect password', async ({ loginPage}) => {
    await loginPage.login(user['incorrectUsername'], process.env.correctPassword)
});

test('Login using incorrect username and correct password', async ({ loginPage}) => {
    await loginPage.login(user['incorrectUsername'], process.env.incorrectPassword)
});

test('Login using correct username and incorrect password', async ({ loginPage}) => {
    await loginPage.login(user['correctUsername'], process.env.incorrectPassword)
});

test('Login using correct username and correct password', async ({ loginPage}) => {
    await loginPage.login(user['correctUsername'], process.env.correctPassword)
});
})
