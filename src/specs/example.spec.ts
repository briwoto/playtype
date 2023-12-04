import { test, expect } from '@playwright/test';
import { pause } from '../support/utils';

test.describe('Sample Test plan for automation', () => {
  test('Open home page', async ({ page }) => {
    await page.goto('/');
    await pause(5000);
    expect(true).toBeTruthy;
  });
});
