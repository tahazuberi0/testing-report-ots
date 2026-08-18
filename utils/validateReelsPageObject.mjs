import { chromium } from '@playwright/test';
import { ReelsPage } from '../tests/pages/ReelsPage.page.js';

const browser = await chromium.launch({ headless: true });
const page = await browser.newPage();
const reels = new ReelsPage(page);

await reels.gotoReels('https://edu.offtheschool.io/reels');

const checks = [
  ['scrollTrigger', reels.scrollTrigger],
  ['scrollTriggerLoose', reels.scrollTriggerLoose],
  ['videoElement', reels.videoElement],
  ['navigationIcon', reels.navigationIcon],
  ['activeBackButton nth(1)', reels.activeBackButton],
  ['backButton unscoped', reels.backButton],
  ['reelsNavLink on home', null],
];

const report = [];
for (const [name, loc] of checks) {
  if (!loc) continue;
  const count = await loc.count();
  report.push({ name, count, status: count === 0 ? 'MISSING' : count > 1 ? 'MULTI' : 'OK' });
}

await page.goto('https://edu.offtheschool.io/', { waitUntil: 'domcontentloaded' });
await reels.dismissOverlays();
report.push({
  name: 'reelsNavLink',
  count: await reels.reelsNavLink.count(),
  status: (await reels.reelsNavLink.count()) === 1 ? 'OK' : 'MULTI/MISSING',
});

console.log(JSON.stringify({ url: page.url(), report }, null, 2));
await browser.close();
