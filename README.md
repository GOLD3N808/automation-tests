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
