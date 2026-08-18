import { chromium } from '@playwright/test';

const browser = await chromium.launch({ headless: true });
const page = await browser.newPage();
await page.goto('https://edu.offtheschool.io/', { waitUntil: 'domcontentloaded' });
await page.keyboard.press('Escape').catch(() => {});

const probes = [
  ["link Reels", page.getByRole('link', { name: 'Reels' })],
  ["text Reels exact", page.getByText('Reels', { exact: true })],
  ["button Open reels", page.getByRole('button', { name: /open reels/i })],
  ["link Open reels", page.getByRole('link', { name: /open reels/i })],
  ["any Reels", page.getByText(/reels/i)],
];

for (const [name, loc] of probes) {
  const count = await loc.count();
  console.log(name, count);
  if (count > 0 && count <= 3) {
    for (let i = 0; i < count; i++) {
      const el = loc.nth(i);
      const tag = await el.evaluate((n) => n.tagName);
      const visible = await el.isVisible().catch(() => false);
      console.log(`  [${i}] ${tag} visible=${visible}`);
    }
  }
}

await browser.close();
