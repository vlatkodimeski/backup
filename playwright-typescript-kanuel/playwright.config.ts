import { PlaywrightTestConfig } from '@playwright/test'

const config: PlaywrightTestConfig = {
  timeout: 60000,
  retries: 0,
  use: {
    headless: true,
    //viewport: { width: 375, height: 812 },
    viewport: { width: 1280, height: 720 },
    actionTimeout: 15000,
    ignoreHTTPSErrors: true,
    video: 'off',
    screenshot: 'off',
  },
  globalSetup: require.resolve('./global-setup'),
  //globalSetup: require.resolve('./helpers.ts'),
  projects: [
    {
      name: 'Chromium',
      use: { browserName: 'chromium' },
    },
    {
      name: 'Firefox',
      use: { browserName: 'firefox' },
    },
    {
      name: 'Webkit',
      use: { browserName: 'webkit' },
    },
  ],
}

export default config


//usage: 
// all: npx playwright test --config=playwright.config.ts --project=Chromium
//specific: npx playwright test tests/bonus.spec.ts --config=playwright.config.ts --project=Chromium --headed