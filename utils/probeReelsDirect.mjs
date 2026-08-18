import { chromium } from '@playwright/test';

const browser = await chromium.launch({ headless: true });
const page = await browser.newPage();

async function dismissOverlays() {
  await page.keyboard.press('Escape').catch(() => {});
  const close = page.getByRole('button', { name: /close|dismiss|accept|got it|ok/i });
  if (await close.count()) {
    await close.first().click({ timeout: 2000 }).catch(() => {});
  }
}

await page.goto('https://edu.offtheschool.io/reels', {
  waitUntil: 'domcontentloaded',
  timeout: 60000,
});
await page.waitForTimeout(4000);
await dismissOverlays();

const checks = [
  ['scrollTriggerExact', page.locator('div').filter({ hasText: /^Scroll down to see more reels — new clips load as you go\.$/ })],
  ['scrollTriggerLoose', page.getByText(/Scroll down to see more reels/i)],
  ['videoCss', page.locator('.css-ohxuui')],
  ['videoCssFirst', page.locator('.css-ohxuui').first()],
  ['navSvg', page.locator('.css-1fobv7y > svg')],
  ['backBtn', page.getByRole('button', { name: 'Back to home' })],
  ['backBtnDesc', page.getByRole('button', { name: 'Back to home', description: 'Back' })],
  ['videoTag', page.locator('video')],
  ['reelsLink', page.getByRole('link', { name: 'Reels' })],
];

const report = [];
for (const [name, loc] of checks) {
  report.push({ name, count: await loc.count() });
}

const body = await page.locator('body').innerText();
console.log(
  JSON.stringify(
    {
      url: page.url(),
      report,
      bodySnippet: body.slice(0, 1200),
      hasScrollText: body.includes('Scroll down'),
      hasBack: body.includes('Back'),
    },
    null,
    2
  )
);
await browser.close();
