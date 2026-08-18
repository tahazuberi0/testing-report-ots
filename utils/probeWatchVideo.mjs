import { chromium } from '@playwright/test';

const browser = await chromium.launch({ headless: true });
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
await page.goto('https://edu.offtheschool.io/login', { waitUntil: 'domcontentloaded' });
await page.getByRole('textbox', { name: 'Email Address' }).fill('taha.zuberi@offtheschool.io');
await page.getByLabel(/^Password/).or(page.getByRole('textbox', { name: 'Password' })).fill('1234This.');
await page.getByRole('button', { name: 'Sign In' }).click();
await page.waitForURL(/\/dashboard/i, { timeout: 45000 });
await page.waitForTimeout(2000);

await page.getByRole('button', { name: 'Watch video' }).first().click();
await page.waitForTimeout(4000);
console.log({
  url: page.url(),
  close: await page.getByRole('button', { name: 'Close' }).count(),
  video: await page.locator('video').count(),
  dialog: await page.getByRole('dialog').count(),
  modal: await page.locator('.chakra-modal__content-container').count(),
  snippet: (await page.locator('body').innerText()).slice(0, 600),
});

await browser.close();
