import { test as base } from '@playwright/test'
import LoginPage from '@pages/loginPage'
import DashboardPage from '@pages/dashboardPage'
import CartPage from '@pages/cartPage'
import CheckoutCompletePage from '@pages/checkoutCompletePage'
import CheckoutStepOnePage from '@pages/checkoutStepOnePage'
import CheckoutStepTwoPage from '@pages/CheckoutStepTwoPage'

export const test = base.extend<{
    loginPage: LoginPage
    dashboardPage: DashboardPage
    cartPage: CartPage
    checkoutCompletePage: CheckoutCompletePage
    checkoutStepOnePage: CheckoutStepOnePage
    checkoutStepTwoPage: CheckoutStepTwoPage
    
}>({
    loginPage: async ({ page }, use) => {
        await use(new LoginPage(page))
    },
    dashboardPage: async ({ page }, use) => {
        await use(new DashboardPage(page))
    },
    cartPage: async ({ page }, use) => {
        await use(new CartPage(page))
    },
    checkoutCompletePage: async ({ page }, use) => {
        await use(new CheckoutCompletePage(page))
    },
    checkoutStepOnePage: async ({ page }, use) => {
        await use(new CheckoutStepOnePage(page))
    },
    checkoutStepTwoPage: async ({ page }, use) => {
        await use(new CheckoutStepTwoPage(page))
    },
})
