import { chromium } from '@playwright/test';

const browser = await chromium.launch({ headless: true });
const page = await browser.newPage();
await page.goto('https://edu.offtheschool.io/reels', { waitUntil: 'domcontentloaded', timeout: 60000 });
await page.waitForTimeout(4000);

const backButtons = await page.getByRole('button', { name: 'Back to home' }).evaluateAll((els) =>
  els.map((e, i) => ({
    i,
    visible: e.offsetParent !== null,
    ariaLabel: e.getAttribute('aria-label'),
    title: e.getAttribute('title'),
    text: e.innerText?.trim(),
    className: (e.className || '').toString().slice(0, 60),
  }))
);

const visibleBack = page.getByRole('button', { name: 'Back to home' }).locator('visible=true');
console.log('visible back count', await visibleBack.count());

// homepage reels nav
await page.goto('https://edu.offtheschool.io/', { waitUntil: 'domcontentloaded', timeout: 60000 });
await page.waitForTimeout(2000);
await page.keyboard.press('Escape');
const homeReels = {
  link: await page.getByRole('link', { name: 'Reels' }).count(),
  text: await page.getByText('Reels', { exact: true }).count(),
  openReels: await page.getByRole('button', { name: 'Open reels' }).count(),
};

console.log(JSON.stringify({ backButtons: backButtons.slice(0, 12), visibleBackCount: await visibleBack.count(), homeReels }, null, 2));
await browser.close();
