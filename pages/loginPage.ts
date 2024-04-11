import { Locator, Page } from '@playwright/test'

class LoginPage {
    page: Page
    loginButton: Locator
    usernameField: Locator
    passwordField: Locator

constructor(page: Page){
this.page = page
this.loginButton = page.locator('#login-button')
this.usernameField = page.locator('#user-name')
this.passwordField = page.locator('#password')
}


async login(username: string, password: string){   
    this.usernameField.fill(username)
    this.passwordField.fill(password) 
    this.loginButton.click()
}

}
export default LoginPage

