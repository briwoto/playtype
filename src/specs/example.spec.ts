import { test, expect } from '@playwright/test';
import { pause } from '../support/utils';
import { urls } from '../fixtures/urls';

test.describe('Sample Test plan for automation', () => {
  test('Open home page', async ({ page }) => {
    await page.goto(urls.contactList);
    await pause(5000);
    expect(true).toBeTruthy;
  });
});
