import * as path from 'path';
import {
  BrowserContext,
  Cookie,
  Page,
  PlaywrightTestConfig,
  chromium,
} from '@playwright/test';
import { staticConfig } from '../../config/define-config';
import { writeFileSync } from 'fs';

const getStaticConfig = (platform: string) => {
  return platform === 'chrome'
    ? staticConfig
    : { ...staticConfig, channel: 'msedge' };
};
export const createBrowser = (platform = 'chrome') => {
  const configOptions: PlaywrightTestConfig = getStaticConfig(platform);
  configOptions.use.headless = false;
  return chromium.launch(configOptions);
};

export const saveVideo = async (page: Page, videoName: string) => {
  const videoPath = path.resolve(process.cwd(), `recordings`, videoName);
  await page.close();
  if (page.video()) {
    await page.video()?.saveAs(videoPath);
  }
};

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
