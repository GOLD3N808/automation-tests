# Automation tests

This is a repository with automated tests testing the online store https://www.saucedemo.com/

Automation tests are written in the Typescript programming language based on the Playwright framework

Playwright documentation: https://playwright.dev/

## How to run tests

In the first touch with this project:

- Playwright Test(test runner for end-to-end tests) need one of these version of node: >=15.0.0
- You need to install all dependencies by `yarn` or `yarn install`. If you want to use `npm`, install it by `npm install`
- Make sure that @playwright/test library is available. Use `yarn add @playwright/test` or `npm install @playwright/test`
- Use `yarn playwright install` or `npx playwright install`
- Make sure that passwords using in this project are exported. You need to do that only one because dotenv is implemented in this project:
  - export INCORRECT_PASSWORD=incorrectPassword
  - export CORRECT_PASSWORD=secret_sauce
- Run tests by `npx playwright test` or `yarn playwright test`

To run one specific test:

- Run `yarn playwright test <test_name>.spec.ts`
- You can use `--debug` or `--project=<browser_name>` flags for run tests on debug mode or run them in one specific browser

This set of tests is working on three browsers: firefox, webkit, chromium.

## Documentation

- Playwright documentation: https://playwright.dev/
- Test cases for this Automation tests are placed in another repository but in the same GitLab profile: https://gitlab.com/first7333950/test-cases-for-automation-tests

## CI/CD

CI/CD is configured in the project. As a viewer, you can view test logs in the "Build" -> "Pipelines" section.

Several tests out of the entire test set fail and these tests detect errors on the website.

## Need some help?

If you need help running tests, please contact me. Contact information is included in my CV.

### Prettier

- install Prettier  
  `npm install --save-dev --save-exact prettier`
- configure Prettier

  - exlude files in `.prettierignore`

    ```
    package-lock.json
    playwright-report
    test-results

    ```

  - set rules in `.prettierrc.json`
    ```
    {
        "singleQuote": true
    }
    ```

- run Prettier  
  `npx prettier --write .`
- additionaly you can install VSC extension: **Prettier**

## Commands

- check `NodeJS` version  
  `node -v`
- new project with Playwright  
  `npm init playwright@latest`
- record tests for given site  
  `npx playwright codegen https://demo-bank.vercel.app/`
- run tests without browser GUI  
  `npx playwright test`
- run tests with browser GUI  
  `npx playwright test --headed`
- view report  
  `npx playwright show-report`
- run Trace Viewer on zip file  
  `npx playwright show-trace trace.zip`


### Updating Playwright

- check if Playwright should be updated  
  `npm outdated @playwright/test`
- update Playwright  
  `npm i @playwright/test`
- update browsers  
  `npx playwright install`
- verify Playwright version  
  `npx @playwright/test --version`

## Visual Studio Code

### Functions

- Preview: for README.md
- Autosave: in File -> Auto Save
- Timeline: file context menu -> Open Timeline
- Formatting: editor -> context menu -> Format Document
- Searching: editor -> <kbd>CTRL</kbd> + <kbd>F</kbd>
- Accept hint in editor: <kbd>Enter</kbd>
- Comment/Uncomment: <kbd>Ctrl</kbd> + <kbd>/</kbd>
- Duplicate line: <kbd>Alt</kbd> + <kbd>Shift</kbd> + <kbd>↑</kbd>
- Use more than one terminal: <kbd>+</kbd> button in TERMINAL
- Cancelling Node process: hit twice <kbd>Ctrl</kbd> + <kbd>C</kbd>
- Extract to variable: <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>R</kbd>
- Move line i.e. up: <kbd>Alt</kbd> + <kbd>↑</kbd>
- Show autocomplete suggestion: <kbd>Ctrl</kbd> + <kbd>Spacebar</kbd>
- Creating a new variable: Refactor <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>R</kbd> -> Extract to constant in enclosing scope

## Extensions

- GitLens - view details of your repository i.e. commits history
- Prettier - default formatter for editor

## Playwright

### Playwright Config modifications

- config file `playwright.config.ts`
- disable browsers, i.e. Firefox
  ```javascript
  // {
  //   name: 'firefox',
  //   use: {
  //     ...devices['Desktop Firefox'],
  //   },
  // },
  ```
- enable video on fail
  ```javascript
  use: {
      video: {'retain-on-failure'},
  },
  ```
- enable Trace Viewer on fail
  ```javascript
  use: {
      trace: {'retain-on-failure'},
  },
  ```

### Playwright snippets

- import:
  ```typescript
  import { test, expect } from '@playwright/test';
  ```
- test:
  ```typescript
  test('test description', async ({ page }) => {
    //your code
  });
  ```
- describe:
  ```typescript
  test.describe('Group description', () => {
    //your code
  });
  ```
- running given test: `test.only`

### Locators

- `getByTestId` i.e. `getByTestId('login-input')` for element with `data-testid="login-input"`
- `getByRole` i.e. `getByRole('button', { name: 'wykonaj' })`
- `locator` i.e. `locator('#some-id')` (with `css` selector) for element with attribute `id="some-id"`

## Other

### Chrome

- use English version!
- open DevTools <kbd>F12</kbd> or right click `Inspect`
- get selector: right click on element -> Copy -> Copy selector
- testing CSS selectors in Console: `$$('selector')`
