import {test} from '@pages/fixtures/testBase'

test.describe('Logout from account', () => {

test('Logout from dashboard page', async ({ dashboardPage}) => {
    await dashboardPage.logout()
});

})