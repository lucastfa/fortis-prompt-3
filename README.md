# Fortis Games Prompt

This repository contains the solution proposed to automate a test scenario from https://www.random.org/calendar-dates/ application.

## How to Run
In order to run the tests contained in this repository, clone it locally and then follow the steps:
- Make sure you have NodeJS and Yarn installed (I strongly suggest installing NodeJS through Node Version Manager: https://github.com/nvm-sh/nvm)
- In the root folder run `yarn install` to install the project dependencies, and then `npx playwright test` to run the tests
- In order to see the HTML report try `npx playwright show-report`
- Tests will run in a headless mode by default, in order to run the test in the headed mode run `npx playwright test --headed`
- In order to run with playwright UI runner try the `npx playwright test --ui`

## CI
It has been implemented a Github Action job in order to run the tests as part of the CI. The job is triggered automatically on every push to master.
You can also see previous runs [here](https://github.com/lucastfa/fortis-prompt-3/actions/workflows/playwright.yml) and also trigger the job clicking on "Run workflow".

You can also see the HTML reports in the CI, checking the Artifacts section of every job execution, as in [this example](https://github.com/lucastfa/fortis-prompt-3/actions/runs/11534843570). Just click on "playwright-report" in order to download a zip file and open the html.
