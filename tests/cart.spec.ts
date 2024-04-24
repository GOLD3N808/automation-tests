import {test} from '@pages/fixtures/testBase'
import { user } from '@helpers/loginCredentials'
import { expect } from '@playwright/test'

test.describe('Tests of add and remove products in cart', () => {
    
test.beforeEach(async ({ loginPage, page }) => {
    await page.goto('https://www.saucedemo.com/')
    await loginPage.login(user['correctUsername'], process.env.CORRECT_PASSWORD)
})

test('Add products to cart', async ({ dashboardPage, cartPage, page }) => {
    await dashboardPage.addProduct(0)
    await expect(dashboardPage.removeButton(0)).toBeVisible()
    await expect(dashboardPage.redlightedNumberOfCart('1')).toBeVisible()
    await dashboardPage.goToCart()
    await expect(cartPage.yourCartTitle).toBeVisible()
    expect(page.url()).toBe('https://www.saucedemo.com/cart.html')
    await expect(cartPage.productElement).toHaveCount(1)
    await cartPage.backToDashboard()
    expect(page.url()).toBe('https://www.saucedemo.com/inventory.html')
    await expect(dashboardPage.dashboardContainer).toBeVisible()
    await dashboardPage.addProduct(1)
    await expect(dashboardPage.removeButton(1)).toBeVisible()
    await expect(dashboardPage.redlightedNumberOfCart('2')).toBeVisible()
    await dashboardPage.goToCart()
    await expect(cartPage.yourCartTitle).toBeVisible()
    expect(page.url()).toBe('https://www.saucedemo.com/cart.html')
    await expect(cartPage.productElement).toHaveCount(2)
});

test('Remove products from cart ', async ({ page }) => {

});

})