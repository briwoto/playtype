import 'dotenv/config';
import * as path from 'path';
import * as utils from '../support/utils';
import * as commands from '../support/commands';
import { writeFileSync } from 'fs';

const cookiePath = path.resolve(process.cwd(), process.env.COOKIE_PATH!);

async function globalSetup() {
  // create a storage.json file first
  // so that even if global setup fails, the global teardown will pass
  writeFileSync(cookiePath, JSON.stringify('{}'));

  const browser = await utils.createBrowser(process.env.PLATFORM!);
  const context = await browser.newContext();
  const page = await context.newPage();
  try {
    // create user and store cookies
    await commands.createUser(page);
    await utils.storeAllCookies(context, cookiePath);
    const authCookie = await utils.getCookieFromBrowser('token', context);
    process.env.AUTH_TOKEN = authCookie[0].value;
  } catch (errCreateUSer) {
    console.error('Error creating new user', errCreateUSer);
  } finally {
    await utils.saveVideo(page, 'global-setup.webm');
    try {
      await context.close();
      await browser.close();
    } catch (errBrowser) {
      console.info('global setup browser already closed');
    }
  }
}

export default globalSetup;
