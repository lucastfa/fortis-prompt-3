# Fortis Games Prompt

This repository contains the solution proposed to automate a test scenario from https://www.random.org/calendar-dates/ application.

## How to Run
In order to run the tests contained in this repository, clone it locally and then follow the steps:
- Make sure you have NodeJS and Yarn installed (I strongly suggest installing NodeJS through Node Version Manager: https://github.com/nvm-sh/nvm)
- In the root folder run `yarn install` and then `yarn playwright:install:deps` to install the project dependencies
- Run `yarn playwright:run` to run the tests
- In order to see the HTML report try `yarn playwright:report`
- Tests will run in a headless mode by default, in order to run the test in the headed mode run `yarn playwright:run:headed`
- In order to run with playwright UI runner try the `yarn playwright:run:ui`

## CI
It has been implemented a Github Action job in order to run the tests as part of the CI. The job is triggered automatically on every push to master.
You can also see previous runs [here](https://github.com/lucastfa/fortis-prompt-3/actions/workflows/playwright.yml) and also trigger the job clicking on "Run workflow".

You can also see the HTML reports in the CI, checking the Artifacts section of every job execution, as in [this example](https://github.com/lucastfa/fortis-prompt-3/actions/runs/11534843570). Just click on "playwright-report" in order to download a zip file and open the html.

## Improvements
This project can be improved in the future in the following ways:
- Integrate with more robust third party report, for example Allure that provides meaningful data about test execution, including % of successes and failures.
- Implement multi-browser testing leveraging Playwright setup file options.
- Integrate a visual testing tool with Playwright, for example Happo, to increase the UI testing confidence.
