import { test as base, expect } from '@playwright/test';
import * as allure from 'allure-js-commons';

export const test = base.extend({});

test.afterEach(async ({ page }, testInfo) => {
  if (page.isClosed()) return;
  try {
    const screenshot = await page.screenshot();
    await allure.attachment('screenshot', screenshot, 'image/png');
  } catch {
    // Page may be closed after external navigation
  }
});

export { expect };
