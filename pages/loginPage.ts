import { Locator, Page } from '@playwright/test'

class LoginPage {
    page: Page
    loginButton: Locator
    usernameField: Locator
    passwordField: Locator
    redLightedUsernameField: Locator
    redLightedPasswordField: Locator
    errorMessageEmptyFields: Locator
    errorMessageBadCredentials: Locator

constructor(page: Page){
this.page = page
this.loginButton = page.locator('#login-button')
this.usernameField = page.locator('#user-name')
this.passwordField = page.locator('#password')
this.redLightedUsernameField = page.locator('#user-name.input_error.form_input.error')
this.redLightedPasswordField = page.locator('#password.input_error.form_input.error')
this.errorMessageEmptyFields = page.getByText('Epic sadface: Username is required')
this.errorMessageBadCredentials = page.getByText('Epic sadface: Username and password do not match any user in this service')
}


async login(username: string, password: string){   
    this.usernameField.type(username)
    this.passwordField.fill(password) 
    this.loginButton.click()
}

}
export default LoginPage

