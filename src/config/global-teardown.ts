import * as path from 'path';
import * as fs from 'fs';

async function globalTeardown() {
  //const storageFilePath = path.join(process.cwd(), process.env.COOKIE_PATH!);
  //fs.rmSync(storageFilePath, { recursive: true, force: true });
}

export default globalTeardown;
