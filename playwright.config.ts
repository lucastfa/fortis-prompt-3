import { defineConfig } from '@playwright/test';

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  testDir: './tests',
  timeout: 30 * 1000,
  expect: {
    timeout: 5000
  },
  fullyParallel: true,
  reporter: 'github',
  use: {
    baseURL: 'https://www.random.org',
    browserName: 'chromium',
    headless: true,
    screenshot: 'only-on-failure',
  },
})
