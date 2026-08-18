import { chromium } from '@playwright/test';

const browser = await chromium.launch({ headless: true });
const page = await browser.newPage();
await page.goto('https://edu.offtheschool.io/', { waitUntil: 'networkidle', timeout: 60000 });
await page.waitForTimeout(2000);
const body = await page.locator('body').innerText();

const needles = [
  'Active Students',
  'EdTech videos',
  'lessons covered',
  'Educators',
  'Subs',
  'Videos',
  'Views',
  '500+',
  '100K',
  'OTS Logo',
  '5,000',
  '1,000',
  '200+',
  '2.0K',
  '496',
  '146',
];

const snippets = needles.map((needle) => {
  const idx = body.indexOf(needle);
  return {
    needle,
    ctx:
      idx >= 0
        ? body.slice(Math.max(0, idx - 50), idx + 80).replace(/\n/g, ' | ')
        : 'NOT FOUND',
  };
});

// Impact section: find lines around Our Impact
const impactIdx = body.indexOf('Our Impact');
const impactSlice = impactIdx >= 0 ? body.slice(impactIdx, impactIdx + 800) : '';
const ytIdx = body.indexOf('YouTube Learning Hub');
const ytSlice = ytIdx >= 0 ? body.slice(ytIdx, ytIdx + 600) : '';
const microIdx = body.indexOf('Daily Micro Learning');
const microSlice = microIdx >= 0 ? body.slice(microIdx, microIdx + 600) : '';

// Try alternate locators
const alt = {};
for (const t of [
  '5,000+',
  'Active Students',
  '500+',
  'EdTech videos',
  '1,000+',
  'lessons covered',
  '200+',
  'Educators',
]) {
  alt[t] = await page.getByText(t, { exact: false }).count();
}

const imgs = await page.getByRole('img').evaluateAll((els) =>
  els.map((e) => ({ alt: e.getAttribute('alt'), name: e.getAttribute('aria-label') }))
);

console.log(
  JSON.stringify({ snippets, impactSlice, ytSlice, microSlice, alt, imgs: imgs.slice(0, 20) }, null, 2)
);
await browser.close();
