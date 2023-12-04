import 'dotenv/config';
import * as path from 'path';
import { defineConfig, devices } from '@playwright/test';
import { staticConfig } from './src/config/define-config';

const random6digitText = () => (Math.random() + 1).toString(36).substring(6);

const cookiePath = path.resolve(process.cwd(), process.env.COOKIE_PATH!);
if (staticConfig.use) {
  staticConfig.use.storageState = cookiePath;
}

process.env.USER_NAME = random6digitText();
process.env.PASSWORD = random6digitText();

export default defineConfig({
  ...staticConfig,
  globalSetup: require.resolve('./src/config/global-setup'),

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },

    //{
    //  name: 'firefox',
    //  use: { ...devices['Desktop Firefox'] },
    //},

    //{
    //  name: 'webkit',
    //  use: { ...devices['Desktop Safari'] },
    //},

    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://127.0.0.1:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});
