import {test} from '@pages/fixtures/testBase'
import { user } from '@helpers/loginCredentials'
import { expect } from '@playwright/test'

test.describe('tests of buying products from cart, and finalize checkout', () => {

test.beforeEach(async ({ page, loginPage, dashboardPage, cartPage, checkoutStepOnePage }) => {
    await page.goto('https://www.saucedemo.com/')
    await loginPage.login(user['correctUsername'], process.env.CORRECT_PASSWORD)
    await dashboardPage.addProduct(1)
    await dashboardPage.addProduct(2)
    await dashboardPage.goToCart()
    await cartPage.goToCheckout()
    expect(page.url()).toBe('https://www.saucedemo.com/checkout-step-one.html')
    await expect(checkoutStepOnePage.checkoutTitle).toBeVisible()
})

test('Buy products - happy path', async ({ page, checkoutStepOnePage, checkoutStepTwoPage, checkoutCompletePage, dashboardPage }) => {
    await checkoutStepOnePage.enterCustomerData('firstname', 'lastname', '12-345')
    await checkoutStepOnePage.goToNextStepOfCheckout()
    expect(page.url()).toBe('https://www.saucedemo.com/checkout-step-two.html')
    await expect(checkoutStepTwoPage.checkoutOverviewTitle).toBeVisible()
    await expect(checkoutStepTwoPage.productElement).toHaveCount(2)
    await checkoutStepTwoPage.finishCheckout()
    expect(page.url()).toBe('https://www.saucedemo.com/checkout-complete.html')
    await expect(checkoutCompletePage.checkoutCompleteTitle).toBeVisible()
    await expect(checkoutCompletePage.summaryOrderInformation).toBeVisible()
    await checkoutCompletePage.backHome()
    expect(page.url()).toBe('https://www.saucedemo.com/inventory.html')
    await expect(dashboardPage.dashboardContainer).toBeVisible()
});

test('Buy products - unhappy path invalid zip code', async ({ page, checkoutStepOnePage }) => {
    await checkoutStepOnePage.enterCustomerData('firstname', 'lastname', 'qwerty')
    await checkoutStepOnePage.goToNextStepOfCheckout()
    expect.soft(page.url()).toBe('https://www.saucedemo.com/checkout-step-one.html')
    await expect.soft(checkoutStepOnePage.checkoutTitle).toBeVisible()
    await expect.soft(checkoutStepOnePage.error).toBeVisible()
});

test('Buy products - unhappy path - empty customer information fields', async ({ page, checkoutStepOnePage }) => {
    await checkoutStepOnePage.goToNextStepOfCheckout()
    expect(page.url()).toBe('https://www.saucedemo.com/checkout-step-one.html')
    await expect(checkoutStepOnePage.checkoutTitle).toBeVisible()
    await expect(checkoutStepOnePage.error).toBeVisible()
});

test('Buy products - back to change client information', async ({ page, checkoutStepOnePage, checkoutStepTwoPage }) => {
    await checkoutStepOnePage.enterCustomerData('firstname', 'lastname', '12-345')
    await checkoutStepOnePage.goToNextStepOfCheckout()
    expect(page.url()).toBe('https://www.saucedemo.com/checkout-step-two.html')
    await expect(checkoutStepTwoPage.checkoutOverviewTitle).toBeVisible()
    await expect(checkoutStepTwoPage.productElement).toHaveCount(2)
    await checkoutStepTwoPage.backToFirstStep()
    expect.soft(page.url()).toBe('https://www.saucedemo.com/checkout-step-one.html')
    await expect.soft(checkoutStepOnePage.checkoutTitle).toBeVisible()
});

test('Buy products - back to cart', async ({ cartPage, page, checkoutStepOnePage }) => {
    await checkoutStepOnePage.backToCart()
    expect(page.url()).toBe('https://www.saucedemo.com/cart.html')
    await expect(cartPage.cartContainer).toBeVisible()
});

})

test.describe('test of checkout with empty cart', () => {

test.only('Checkout with empty cart', async ({ page, loginPage, dashboardPage, cartPage }) => {
    await page.goto('https://www.saucedemo.com/')
    await loginPage.login(user['correctUsername'], process.env.CORRECT_PASSWORD)
    await dashboardPage.goToCart()
    await cartPage.goToCheckout()
    expect.soft(page.url()).toBe('https://www.saucedemo.com/cart.html')
});

})