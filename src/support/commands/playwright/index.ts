import { BrowserContext, Cookie } from '@playwright/test';
import { writeFileSync } from 'fs';

export const getCookieFromBrowser = async (
  cookieName: string,
  context: BrowserContext,
  domainUrl?: string
): Promise<Cookie[]> => {
  const cookiesList = await context.cookies(domainUrl);
  return cookiesList.filter((c: Cookie) => c.name === cookieName);
};

export const storeAllCookies = async (
  context: BrowserContext,
  cookiePath: string
) => {
  const storage = await context.storageState();
  writeFileSync(cookiePath, JSON.stringify(storage));
};
