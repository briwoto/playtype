import { Page } from '@playwright/test';
import {
  selectors,
  Contact,
  newUser,
  urls,
  api,
  newContact,
} from '../../fixtures';
import { isFailStatus, pause } from '../utils';

export const login = async (page: Page) => {
  const { login } = selectors;
  await page.locator(login.email).fill(process.env.EMAIL!);
  await page.locator(login.password).fill(process.env.PASSWORD!);
  await page.locator(login.submitBtn).click();
};

/*
An optimized version for any form details
const userKeys = Object.keys(user);
  for (const i in userKeys) {
    const key = userKeys[i];
    await page.locator(createUser[key]).fill(user[key]);
  }
*/
export const createUser = async (page: Page) => {
  const user = newUser();
  const { createUser } = selectors;
  await page.goto(urls.addUser);
  console.info('Creating user');

  // optimised function for this block mentioned above
  await page.locator(createUser.firstName).fill(user.firstName);
  await page.locator(createUser.lastName).fill(user.lastName);
  await page.locator(createUser.email).fill(user.email);
  await page.locator(createUser.password).fill(user.password);

  await page.locator(createUser.submitBtn).click();
  await waitForContactsPage(page);

  console.info('User registration successful');
};

export const openContactsPage = async (page: Page) => {
  await page.goto(urls.contactList);
  await waitForContactsPage(page);
};

export const waitForContactsPage = async (page: Page) => {
  await Promise.all([
    page.waitForResponse(urls.endpoints.contacts),
    page.locator(selectors.contactList.logoutBtn).waitFor(),
  ]);
};

export const addContactViaApi = async (contactDetails?: Contact) => {
  const data = await api.addContact(contactDetails);
  if (isFailStatus(data.status)) {
    console.error(
      `Add contact api request failed with status code ${data.status}`
    );
  }
};

export const openAddContactForm = async (page: Page) => {
  await page.locator(selectors.contactList.addContactBtn).click();
  await page.locator(selectors.addContact.submitBtn).waitFor();
  await pause(500);
};

export const addContact = async (page: Page, contactData?: Contact) => {
  const { addContact } = selectors;
  contactData ?? newContact();
  const contactKeys = Object.keys(contactData);
  for (const i in contactKeys) {
    const key = contactKeys[i];
    await page.locator(addContact[key]).fill(`${contactData[key]}`);
  }
  await page.pause();
  await page.locator(addContact.submitBtn).click();
  await waitForContactsPage(page);
};
