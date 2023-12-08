import { Page } from '@playwright/test';
import { selectors, Contact, urls, api, newContact } from '../../fixtures';
import { isFailStatus, pause } from '../utils';

export const openContactsPage = async (page: Page) => {
  await page.goto(urls.contactList);
  await waitForContactsPage(page);
};

export const waitForContactsPage = async (page: Page) => {
  await Promise.all([
    page.waitForResponse(urls.endpoints.contacts),
    page.locator(selectors.contactList.logoutBtn).waitFor(),
  ]);
  await page.waitForLoadState('load');
};

export const addContactViaApi = async (
  contactData?: Contact
): Promise<Contact> => {
  contactData = contactData ?? newContact();
  const data = await api.addContact(contactData);
  if (isFailStatus(data.status)) {
    console.error(
      `Add contact api request failed with status code ${data.status}`
    );
  }
  return contactData;
};

export const openAddContactForm = async (page: Page) => {
  await page.locator(selectors.contactList.addContactBtn).click();
  await page.locator(selectors.addContact.submitBtn).waitFor();
  await pause(500);
};

export const addContact = async (
  page: Page,
  contactData?: Contact
): Promise<Contact> => {
  const { addContact } = selectors;
  contactData = contactData ?? newContact();
  const contactKeys = Object.keys(contactData);
  for (const i in contactKeys) {
    const key = contactKeys[i];
    await page.locator(addContact[key]).fill(`${contactData[key]}`);
  }
  await page.locator(addContact.submitBtn).click();
  await waitForContactsPage(page);
  await page.locator(selectors.contactList.firstName).nth(0).waitFor();
  return contactData;
};

export const isContactInContactList = async (
  page: Page,
  fullName: string
): Promise<boolean> => {
  const namesList = await page
    .locator(selectors.contactList.firstName)
    .allTextContents();
  return fullName in namesList;
};
