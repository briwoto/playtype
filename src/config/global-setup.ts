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
    await commands.createUser(page);
    const storage = await context.storageState();
    writeFileSync(cookiePath, JSON.stringify(storage));
  } catch (errCreateUSer) {
    console.error('Error creating new user', errCreateUSer);
  } finally {
    const videoPath = path.resolve(
      process.cwd(),
      `recordings/${process.env.AUTOMATION_TYPE!}`,
      `global-setup.webm`
    );
    await page.close();
    if (page.video()) {
      await page.video()?.saveAs(videoPath);
    }
    try {
      await context.close();
      await browser.close();
    } catch (errBrowser) {
      console.info('global setup browser already closed');
    }
  }
}

export default globalSetup;
