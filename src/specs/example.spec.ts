import { test, expect } from '@playwright/test';
import { urls } from '../fixtures/urls';
import { selectors } from '../fixtures/selectors';

test.describe('Sample Test plan for automation', () => {
  test('Open home page', async ({ page }) => {
    await page.goto(urls.contactList);
    await page.locator(selectors.contactList.logoutBtn).waitFor();
  });
});
