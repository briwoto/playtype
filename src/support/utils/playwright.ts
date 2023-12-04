import { PlaywrightTestConfig, chromium } from '@playwright/test';
import { staticConfig } from '../../config/define-config';

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
