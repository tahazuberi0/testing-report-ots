import { chromium } from '@playwright/test';

const browser = await chromium.launch({ headless: true });
const page = await browser.newPage();
await page.goto('https://edu.offtheschool.io/explore', {
  waitUntil: 'networkidle',
  timeout: 60000,
});
await page.waitForTimeout(2000);

const body = await page.locator('body').innerText();
const dsIdx = body.indexOf('Digital School');
const saIdx = body.indexOf('Skills Academy');

const buttons = await page.getByRole('button').evaluateAll((els) =>
  els.map((e) => (e.innerText || e.getAttribute('aria-label') || '').trim()).filter(Boolean)
);
const links = await page.getByRole('link').evaluateAll((els) =>
  els.map((e) => (e.innerText || e.getAttribute('aria-label') || '').trim().slice(0, 80)).filter(Boolean)
);

const aroundDs = dsIdx >= 0 ? body.slice(dsIdx, dsIdx + 400) : 'NOT FOUND';
const aroundSa = saIdx >= 0 ? body.slice(saIdx, saIdx + 400) : 'NOT FOUND';

const probes = {};
for (const name of ["Let's Start!", 'Explore Courses', 'Start', 'Explore']) {
  probes[`${name} button`] = await page.getByRole('button', { name }).count();
  probes[`${name} link`] = await page.getByRole('link', { name }).count();
  probes[`${name} text`] = await page.getByText(name, { exact: false }).count();
}

console.log(
  JSON.stringify(
    {
      url: page.url(),
      aroundDs,
      aroundSa,
      buttons: buttons.slice(0, 30),
      links: links.slice(0, 40),
      probes,
    },
    null,
    2
  )
);
await browser.close();
