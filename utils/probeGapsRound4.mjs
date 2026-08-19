import { chromium } from 'playwright';

const LOGIN_URL = 'https://edu.offtheschool.io/login';
const CREDS = { email: 'taha.zuberi@offtheschool.io', password: '1234This.' };

async function login(page) {
  await page.goto(LOGIN_URL, { waitUntil: 'domcontentloaded', timeout: 45000 });
  const emailInput = page.getByRole('textbox', { name: 'Email' });
  await emailInput.waitFor({ state: 'visible', timeout: 15000 });
  await emailInput.fill(CREDS.email);
  await page.getByRole('textbox', { name: 'Password' }).fill(CREDS.password);
  await page.getByRole('button', { name: /sign in|log in/i }).click();
  await page.waitForURL('**/dashboard**', { timeout: 30000 });
}

async function probe(page, label, fn) {
  try {
    const loc = fn(page);
    const count = await loc.count();
    const status = count === 1 ? 'OK' : count === 0 ? 'MISS' : `MULTI(${count})`;
    if (count > 0 && count <= 5) {
      const text = await loc.first().innerText().catch(() => '(no text)');
      console.log(`  ${status.padEnd(10)} | ${label} → "${text.slice(0, 80)}"`);
    } else {
      console.log(`  ${status.padEnd(10)} | ${label}`);
    }
    return { label, count, status };
  } catch (e) {
    console.log(`  ERROR      | ${label} — ${e.message.slice(0, 80)}`);
    return { label, count: -1, status: 'ERROR' };
  }
}

(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  await login(page);

  // === QUIZ TRACKING - try clicking paragraph directly ===
  console.log('\n=== QUIZ TRACKING DROPDOWNS ===');
  await page.goto('https://edu.offtheschool.io/dashboard/quiz-tracking', { waitUntil: 'domcontentloaded', timeout: 45000 });
  await page.waitForTimeout(5000);

  // Try using the paragraph locators from selectors.md
  const sortByP = page.getByRole('paragraph').filter({ hasText: 'Sort By' }).first();
  const sortByCount = await sortByP.count();
  console.log('  Sort By paragraph count:', sortByCount);
  if (sortByCount > 0) {
    await sortByP.click({ force: true });
    await page.waitForTimeout(2000);
    await probe(page, 'Newest', p => p.getByText('Newest'));
    await probe(page, 'Oldest', p => p.getByText('Oldest'));
    await probe(page, 'Highest Score', p => p.getByText('Highest Score'));
    await probe(page, 'Lowest Score', p => p.getByText('Lowest Score'));
    // Try role=option
    await probe(page, 'option role items', p => p.getByRole('option'));
    await probe(page, 'menuitem role', p => p.getByRole('menuitem'));
    // Check what appeared
    const bodySnip = await page.locator('body').innerText().catch(() => '');
    console.log('  Body after Sort click:', bodySnip.slice(0, 500));
    await page.keyboard.press('Escape');
  }

  // === LEADERBOARD body check ===
  console.log('\n=== LEADERBOARD BODY ===');
  await page.goto('https://edu.offtheschool.io/dashboard/leaderboard', { waitUntil: 'domcontentloaded', timeout: 45000 });
  await page.waitForTimeout(8000);
  const lbBody = await page.locator('body').innerText().catch(() => '');
  console.log('  Leaderboard body (500 chars):', lbBody.slice(0, 500));

  // === PROFILE - check for Educational tab text ===
  console.log('\n=== PROFILE TABS ===');
  await page.goto('https://edu.offtheschool.io/dashboard/profile', { waitUntil: 'domcontentloaded', timeout: 45000 });
  await page.waitForTimeout(5000);
  await probe(page, 'Tab: Personal Info', p => p.getByRole('tab', { name: /personal/i }));
  await probe(page, 'Tab: Educational', p => p.getByRole('tab', { name: /educational/i }));
  await probe(page, 'Tab: Settings', p => p.getByRole('tab', { name: /settings/i }));
  await probe(page, 'Text: Educational Information', p => p.getByText('Educational Information'));
  await probe(page, 'Text: Personal Information', p => p.getByText('Personal Information'));
  // Click Educational Information text
  const eduText = page.getByText('Educational Information');
  if (await eduText.count() > 0) {
    await eduText.click();
    await page.waitForTimeout(2000);
    await probe(page, 'Heading: Educational after click', p => p.getByRole('heading', { name: /educational/i }));
  }

  // === DASHBOARD Logout - check the sidebar locator ===
  console.log('\n=== DASHBOARD SIDEBAR ===');
  await page.goto('https://edu.offtheschool.io/dashboard', { waitUntil: 'domcontentloaded', timeout: 45000 });
  await page.waitForTimeout(3000);
  // Try to locate Logout in sidebar via nav
  await probe(page, 'Sidebar nav group Logout', p => p.locator('nav').getByText('Logout'));
  await probe(page, 'Sidebar link Logout', p => p.locator('aside, nav').getByText('Logout'));
  await probe(page, 'Logout text exact first', p => p.getByText('Logout', { exact: true }).first());

  console.log('\n=== ROUND 4 COMPLETE ===');
  await browser.close();
})();
