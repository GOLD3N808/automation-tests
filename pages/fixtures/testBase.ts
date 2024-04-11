import { test as base } from '@playwright/test'
import LoginPage from '@pages/loginPage'
import DashboardPage from '@pages/dashboardPage'
import CartPage from '@pages/cartPage'

export const test = base.extend<{
    loginPage: LoginPage
    dashboardPage: DashboardPage
    cartPage: CartPage
    
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
})
