import { Page, expect } from '@playwright/test';
import { selectors } from '../../fixtures/selectors';
import { newUser } from '../../fixtures/mockdata';

export const login = async (page: Page) => {
  const { login } = selectors;
  await page.locator(login.username).fill(process.env.USER_NAME!);
  await page.locator(login.password).fill(process.env.PASSWORD!);
  await page.locator(login.loginBtn).click();
};

export const createUser = async (page: Page) => {
  console.info('Creating user');
  const user = newUser();
  const { createUser } = selectors;
  await page.goto('https://parabank.parasoft.com/parabank/register.htm');
  await page.locator(createUser.firstName).fill(user.firstName);
  await page.locator(createUser.lastName).fill(user.lastName);
  await page.locator(createUser.address).fill(user.address);
  await page.locator(createUser.city).fill(user.city);
  await page.locator(createUser.state).fill(user.state);
  await page.locator(createUser.phone).fill(user.phone);
  await page.locator(createUser.ssn).fill(user.ssn);
  await page.locator(createUser.zipCode).fill(user.zipCode);
  console.info('Setting username and password');
  await page.locator(createUser.userName).fill(user.userName);
  await page.locator(createUser.password).fill(user.password);
  await page.locator(createUser.repeatPassword).fill(user.password);
  await page.locator(createUser.registerBtn).click();
  const pageHeader = selectors.welcomePageHeader(user.userName);
  await page.locator(pageHeader).waitFor();
  console.info('User registration successful');
};
