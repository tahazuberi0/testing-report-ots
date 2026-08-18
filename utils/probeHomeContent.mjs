import { chromium } from '@playwright/test';

const browser = await chromium.launch({ headless: true });
const page = await browser.newPage();
await page.goto('https://edu.offtheschool.io/', { waitUntil: 'networkidle', timeout: 60000 });
await page.waitForTimeout(3000);
console.log('title:', await page.title());
console.log('url:', page.url());
const body = await page.locator('body').innerText();
console.log('body snippet:', body.slice(0, 500));
const links = await page.getByRole('link').allTextContents();
console.log('links:', links.slice(0, 30));

await browser.close();
