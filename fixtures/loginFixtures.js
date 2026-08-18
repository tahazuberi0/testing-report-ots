import * as allure from 'allure-js-commons';
import { test as base, expect } from '@playwright/test';
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import path from 'path';
import { LoginPage } from '../pages/loginPage.spec.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const testData = JSON.parse(
  readFileSync(path.join(__dirname, '../test-data/loginPage.JSON'), 'utf-8')
);

const SEVERITY_MAP = {
  P0: 'critical',
  P1: 'high',
  P2: 'normal',
  P3: 'minor',
};

/**
 * @param {{ id: string, priority: string, scenario: string }} meta
 */
async function annotate({ id, priority, scenario }) {
  await allure.epic('Authentication');
  await allure.feature('Login Page');
  await allure.story(scenario);
  await allure.severity(SEVERITY_MAP[priority] || 'normal');
  await allure.allureId(id);
  await allure.tag(priority);
}

export const test = base.extend({
  testData: async ({}, use) => {
    await use(testData);
  },
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
});

test.afterEach(async ({ page }, testInfo) => {
  if (page.isClosed()) return;
  try {
    const screenshot = await page.screenshot({ fullPage: true });
    await allure.attachment(
      testInfo.status === 'failed' || testInfo.status === 'timedOut'
        ? 'Failure Screenshot'
        : 'End of Test Screenshot',
      screenshot,
      'image/png'
    );
  } catch {
    // External navigation may close or detach the page
  }
});

export { expect, testData, annotate };
