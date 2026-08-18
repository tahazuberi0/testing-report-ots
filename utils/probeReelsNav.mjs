import { chromium } from '@playwright/test';

const browser = await chromium.launch({ headless: true });
const page = await browser.newPage();
await page.goto('https://edu.offtheschool.io/', { waitUntil: 'networkidle', timeout: 60000 });

const reelsText = page.getByText('Reels', { exact: true });
console.log('text Reels count', await reelsText.count());
for (let i = 0; i < Math.min(await reelsText.count(), 5); i++) {
  const el = reelsText.nth(i);
  const info = await el.evaluate((n) => ({
    tag: n.tagName,
    role: n.getAttribute('role'),
    href: n.getAttribute('href'),
    className: n.className,
    visible: !!(n.offsetWidth || n.offsetHeight),
  }));
  console.log(i, info);
}

const nav = page.locator('nav');
console.log('nav count', await nav.count());
if (await nav.count()) {
  console.log('nav html snippet', (await nav.first().innerHTML()).slice(0, 800));
}

await browser.close();
