import { chromium } from '@playwright/test';

const browser = await chromium.launch({ headless: true });
const page = await browser.newPage();

await page.goto('https://edu.offtheschool.io/', { waitUntil: 'networkidle', timeout: 60000 });
await page.waitForTimeout(2000);

const probes = {
  reelsText: await page.getByText('Reels').count(),
  reelsLink: await page.getByRole('link', { name: 'Reels' }).count(),
  openReelsBtn: await page.getByRole('button', { name: 'Open reels' }).count(),
};

await page.getByRole('link', { name: 'Reels' }).first().click().catch(async () => {
  await page.getByText('Reels').first().click();
});
await page.waitForTimeout(3000);

const onReels = {
  url: page.url(),
  scrollTrigger: await page
    .locator('div')
    .filter({ hasText: /^Scroll down to see more reels — new clips load as you go\.$/ })
    .count(),
  scrollTriggerLoose: await page.getByText(/Scroll down to see more reels/i).count(),
  videoCss: await page.locator('.css-ohxuui').count(),
  navSvg: await page.locator('.css-1fobv7y > svg').count(),
  backBtn: await page.getByRole('button', { name: 'Back to home' }).count(),
  backBtnWithDesc: await page
    .getByRole('button', { name: 'Back to home', description: 'Back' })
    .count(),
  videoTag: await page.locator('video').count(),
};

// Try direct /reels
await page.goto('https://edu.offtheschool.io/reels', { waitUntil: 'networkidle', timeout: 60000 });
await page.waitForTimeout(3000);

const directReels = {
  url: page.url(),
  scrollTrigger: await page.getByText(/Scroll down to see more reels/i).count(),
  videoCss: await page.locator('.css-ohxuui').count(),
  navSvg: await page.locator('.css-1fobv7y > svg').count(),
  backBtn: await page.getByRole('button', { name: 'Back to home' }).count(),
  bodySnippet: (await page.locator('body').innerText()).slice(0, 800),
};

console.log(JSON.stringify({ probes, onReels, directReels }, null, 2));
await browser.close();
