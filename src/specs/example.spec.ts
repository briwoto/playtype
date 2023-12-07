import { test, expect } from '@playwright/test';
import { urls, selectors, newContact } from '../fixtures';
import * as commands from '../support/commands';

test.describe('Sample Test plan for automation', () => {
  test('Contact page open upon login', async ({ page }) => {
    await page.goto(urls.contactList);
    await page.locator(selectors.contactList.logoutBtn).waitFor();
  });

  test('Add a contact via API', async ({ page }) => {
    const contactDetails = newContact();
    await commands.addContactViaApi(contactDetails);
    await page.goto(urls.contactList);
  });
});
