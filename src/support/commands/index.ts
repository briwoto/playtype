import { Page, expect } from '@playwright/test';
import { selectors } from '../../fixtures/selectors';
import { newUser } from '../../fixtures/mockdata';
import { urls } from '../../fixtures/urls';

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
  await Promise.all([
    page.waitForResponse(urls.contactList),
    page.locator(selectors.contactList.logoutBtn).waitFor(),
  ]);
  console.info('User registration successful');
};
