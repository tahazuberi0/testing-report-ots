import { chromium } from 'playwright';

const LOGIN_URL = 'https://edu.offtheschool.io/login';
const FAV_URL = 'https://edu.offtheschool.io/dashboard/favorite-chapters';
const CREDS = { email: 'taha.zuberi@offtheschool.io', password: '1234This.' };

const selectors = [
  { name: 'Sidebar Favorite Chapters group', fn: p => p.getByRole('group').filter({ hasText: 'Favorite Chapters' }) },
  { name: 'Favorite Chapters heading (exact)', fn: p => p.getByRole('heading', { name: 'Favorite Chapters', exact: true }) },
  { name: 'Header container nth(3)', fn: p => p.locator('div').filter({ hasText: /^Favorite Chapters$/ }).nth(3) },
  { name: 'Open Chapter button', fn: p => p.getByRole('button', { name: 'Open Chapter' }), countOnly: true },
  { name: 'Open Chapter wrapper first', fn: p => p.locator('div').filter({ hasText: /^Open Chapter$/ }).first(), countOnly: true },
  { name: 'Chapter card (Forward Counting)', fn: p => p.locator('div').filter({ hasText: /^Forward Counting$/ }).first(), countOnly: true },
  { name: 'Secondary action button nth(1)', fn: p => p.getByRole('button').nth(1) },
  { name: 'Menu icon', fn: p => p.getByRole('img', { name: 'menu icon' }) },
];

(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();

  await page.goto(LOGIN_URL, { waitUntil: 'domcontentloaded' });
  const emailInput = page.getByRole('textbox', { name: 'Email Address' });
  await emailInput.waitFor({ state: 'visible', timeout: 20000 });
  await page.keyboard.press('Escape').catch(() => {});
  await emailInput.fill(CREDS.email);
  await page.getByLabel(/^Password/).or(page.getByRole('textbox', { name: 'Password' })).fill(CREDS.password);
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.waitForURL(/\/(home|dashboard)/i, { timeout: 45000 });

  await page.goto(FAV_URL, { waitUntil: 'networkidle', timeout: 45000 });
  await page.getByRole('heading', { name: 'Favorite Chapters', exact: true }).waitFor({ state: 'visible', timeout: 20000 });
  await page.waitForTimeout(3000);
  console.log('Current URL:', page.url());

  const headings = await page.getByRole('heading').allInnerTexts();
  console.log('All headings:', headings);

  const bodyText = await page.locator('body').innerText().catch(() => '');
  console.log('Body snippet (first 1000 chars):', bodyText.slice(0, 1000));

  console.log('\n=== Favorite Chapters Selector Validation ===\n');
  const results = [];
  for (const sel of selectors) {
    const loc = sel.fn(page);
    const count = await loc.count();
    const status = sel.countOnly
      ? (count > 0 ? 'OK' : 'FAIL')
      : (count === 1 ? 'OK' : (count === 0 ? 'FAIL (0)' : `WARN (${count})`));
    console.log(`${status.padEnd(12)} | ${sel.name} → count=${count}`);
    results.push({ name: sel.name, count, status });
  }
  console.log('\n=== Done ===');

  const fails = results.filter(r => r.status.startsWith('FAIL'));
  if (fails.length > 0) {
    console.log('\nFailing selectors:');
    fails.forEach(f => console.log(`  ✗ ${f.name} (count=${f.count})`));
  } else {
    console.log('\nAll selectors matched successfully.');
  }

  await browser.close();
})();
