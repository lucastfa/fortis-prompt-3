In order to run the tests contained in this repository, clone it locally and then follow the steps:
- Make sure you have NodeJS and Yarn installed
- On the root folder run `yarn install` and then `npx playwright test`
- In order to see a report trun `npx playwright show-report`
- Tests will run in a headless mode by default, in order to run the test in the headed mode run `npx playwright test --headed`
- In order to run with playwright UI runner try the `npx playwright test --ui`
