import { Page } from '@playwright/test';
import { waitForContactsPage } from '.';
import { newUser, urls, selectors } from '../../fixtures';

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
  const userData = newUser();
  const { createUser } = selectors;
  await page.goto(urls.addUser);
  console.info('Creating user');

  // optimised function for this block mentioned above
  await page.locator(createUser.firstName).fill(userData.firstName);
  await page.locator(createUser.lastName).fill(userData.lastName);
  await page.locator(createUser.email).fill(userData.email);
  await page.locator(createUser.password).fill(userData.password);

  await page.locator(createUser.submitBtn).click();
  await waitForContactsPage(page);

  console.info('User registration successful');
  process.env.EMAIL = userData.email;
  process.env.PASSWORD = userData.password;
};
