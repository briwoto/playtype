import * as path from 'path';
import { defineConfig } from '@playwright/test';

export const staticConfig = defineConfig({
  testDir: path.resolve(process.cwd(), 'src/specs/'),
  timeout: 20000,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests*/
  workers: 1,
  reporter: 'html',
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    baseURL: 'https://thinking-tester-contact-list.herokuapp.com',
    viewport: null,
    // Run as headless in CI
    headless: process.env.CI ? true : false,
  },
  globalTeardown: require.resolve(
    path.resolve(process.cwd(), 'src/config/global-teardown')
  ),
});
