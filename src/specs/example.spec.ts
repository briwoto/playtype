import { test, expect } from '@playwright/test';
import { urls, selectors, newContact } from '../fixtures';
import * as commands from '../support/commands';

test.describe('Sample Test plan for automation', () => {
  test('Contact page open upon login', async ({ page }) => {
    await commands.openContactsPage(page);
  });

  test('Add a contact via API', async ({ page }) => {
    const contactDetails = newContact();
    const fullName = `${contactDetails.firstName} ${contactDetails.lastName}`;
    await commands.addContactViaApi(contactDetails);
    await commands.openContactsPage(page);
    const namesList = await page
      .locator(selectors.contactList.firstName)
      .allTextContents();
    expect(namesList).toContain(fullName);
  });

  test('Add contact via contact form', async ({ page }) => {
    const contactDetails = newContact();
    await commands.openContactsPage(page);
    await commands.openAddContactForm(page);
    await commands.addContact(page, contactDetails);
  });
});
