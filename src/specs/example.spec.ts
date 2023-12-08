import { test, expect } from '@playwright/test';
import * as commands from '../support/commands';
import { after } from 'node:test';

test.describe('Sample Test plan for automation', () => {
  test('Contact page open upon login', async ({ page }) => {
    await commands.openContactsPage(page);
  });

  test('Add a contact via API', async ({ page }) => {
    const contact = await commands.addContactViaApi();
    const fullName = `${contact.firstName} ${contact.lastName}`;
    await commands.openContactsPage(page);
    expect(await commands.isContactInContactList(page, fullName)).toBeTruthy;
  });

  test('Add contact via contact form', async ({ page }) => {
    await commands.openContactsPage(page);
    await commands.openAddContactForm(page);
    const contact = await commands.addContact(page);
    const fullName = `${contact.firstName} ${contact.lastName}`;
    expect(await commands.isContactInContactList(page, fullName)).toBeTruthy;
  });
});
