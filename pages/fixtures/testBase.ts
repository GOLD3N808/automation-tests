import { test as base } from '@playwright/test'
import BasePage from '@pages/basePage'
import LoginPage from '@pages/loginPage'
import DashboardPage from '@pages/dashboardPage'
import CartPage from '@pages/cartPage'
import CheckoutCompletePage from '@pages/checkoutCompletePage'
import CheckoutStepOnePage from '@pages/checkoutStepOnePage'
import CheckoutStepTwoPage from '@pages/checkoutStepTwoPage'
import ProductsDetailsPage from '@pages/productDetailsPage'

export const test = base.extend<{
    basePage: BasePage
    loginPage: LoginPage
    dashboardPage: DashboardPage
    cartPage: CartPage
    checkoutCompletePage: CheckoutCompletePage
    checkoutStepOnePage: CheckoutStepOnePage
    checkoutStepTwoPage: CheckoutStepTwoPage
    productsDetailsPage: ProductsDetailsPage
    
}>({
    basePage: async ({ page }, use) => {
        await use(new BasePage(page))
    },
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
    productsDetailsPage: async ({ page }, use) => {
        await use(new ProductsDetailsPage(page))
    },
})
