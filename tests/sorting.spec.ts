import {test} from '@pages/fixtures/testBase'
import { user } from '@helpers/loginCredentials'
import { expect } from '@playwright/test'

test.describe('tests of sorting products at the dashboard', () => {

test.beforeEach(async ({ loginPage, page }) => {
    await page.goto('https://www.saucedemo.com/')
    await loginPage.login(user['correctUsername'], process.env.CORRECT_PASSWORD)
})

test('Choose all options of sort', async ({ page }) => {

});

})