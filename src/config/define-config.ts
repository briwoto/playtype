import * as path from 'path';
import { defineConfig } from '@playwright/test';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// require('dotenv').config();

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export const staticConfig = defineConfig({
  testDir: path.resolve(process.cwd(), 'src/specs/'),
  timeout: 20000,
  /* do not Run tests in files in parallel */
  fullyParallel: false,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: 1,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: 'html',
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Base URL to use in actions like `await page.goto('/')`. */
    baseURL: 'https://parabank.parasoft.com',
    viewport: null,
    // Run as headless in CI
    headless: process.env.CI ? true : false,
  },
  globalTeardown: require.resolve(
    path.resolve(process.cwd(), 'src/config/global-teardown')
  ),
});
