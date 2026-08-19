import { chromium } from 'playwright';

const LOGIN_URL = 'https://edu.offtheschool.io/login';
const LEADERBOARD_URL = 'https://edu.offtheschool.io/dashboard/leaderboard';
const CREDS = { email: 'taha.zuberi@offtheschool.io', password: '1234This.' };

const selectors = [
  { name: 'Sidebar Leaderboard group', fn: p => p.getByRole('group').filter({ hasText: 'Leaderboard' }) },
  {
    name: 'Header container nth(2)',
    fn: p =>
      p
        .locator('div')
        .filter({ hasText: /^LeaderboardCompete with the best and climb the ranks!$/ })
        .nth(2),
  },
  { name: 'Leaderboard heading', fn: p => p.getByRole('heading', { name: 'Leaderboard' }) },
  { name: 'Compete with the best text', fn: p => p.getByText('Compete with the best and') },
  { name: 'Showing leaderboard for text', fn: p => p.getByText('Showing leaderboard for:') },
  {
    name: 'Current class indicator (Class N)',
    fn: p =>
      p.locator('div').filter({ hasText: /^Showing leaderboard for: Class \d+$/ }).nth(1),
  },
  {
    name: 'Current class indicator (Class 2 exact)',
    fn: p =>
      p.locator('div').filter({ hasText: /^Showing leaderboard for: Class 2$/ }).nth(1),
  },
  { name: 'Filter by label', fn: p => p.getByText('Filter by:') },
  {
    name: 'Subject filter container nth(1)',
    fn: p =>
      p
        .locator('div')
        .filter({ hasText: /^Filter by:All SubjectsBy SubjectBy Chapter$/ })
        .nth(1),
  },
  { name: 'Global tab', fn: p => p.getByRole('tab', { name: 'Global' }) },
  { name: 'Weekly tab', fn: p => p.getByRole('tab', { name: 'Weekly' }) },
];

(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();

  await page.goto(LOGIN_URL, { waitUntil: 'domcontentloaded' });
  const emailInput = page.getByRole('textbox', { name: 'Email Address' });
  await emailInput.waitFor({ state: 'visible', timeout: 20000 });
  await page.keyboard.press('Escape').catch(() => {});
  await emailInput.fill(CREDS.email);
  await page
    .getByLabel(/^Password/)
    .or(page.getByRole('textbox', { name: 'Password' }))
    .fill(CREDS.password);
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.waitForURL(/\/(home|dashboard)/i, { timeout: 45000 });

  await page.goto(LEADERBOARD_URL, { waitUntil: 'networkidle', timeout: 45000 });
  await page.getByRole('heading', { name: 'Leaderboard' }).waitFor({ state: 'visible', timeout: 20000 });
  // Wait for async leaderboard data — class context may load after spinner
  await page
    .getByText('Showing leaderboard for:')
    .or(page.getByText('Loading leaderboard...'))
    .first()
    .waitFor({ state: 'visible', timeout: 30000 })
    .catch(() => {});
  await page.waitForTimeout(15000);
  const stillLoading = await page.getByText('Loading leaderboard...').isVisible().catch(() => false);
  console.log('Still loading after extended wait:', stillLoading);
  console.log('Current URL:', page.url());

  const headings = await page.getByRole('heading').allInnerTexts();
  console.log('All headings:', headings);

  console.log('\n=== Leaderboard Selector Validation ===\n');
  const results = [];
  for (const sel of selectors) {
    const loc = sel.fn(page);
    const count = await loc.count();
    const status = count === 1 ? 'OK' : count === 0 ? 'FAIL (0)' : `WARN (${count})`;
    console.log(`${status.padEnd(12)} | ${sel.name} → count=${count}`);
    results.push({ name: sel.name, count, status });
  }
  console.log('\n=== Done ===');

  const fails = results.filter(r => r.status.startsWith('FAIL'));
  const warns = results.filter(r => r.status.startsWith('WARN'));
  if (fails.length > 0) {
    console.log('\nFailing selectors:');
    fails.forEach(f => console.log(`  ✗ ${f.name} (count=${f.count})`));
    const bodySnippet = await page.locator('body').innerText().catch(() => '');
    console.log('\nBody text snippet (first 1500 chars):');
    console.log(bodySnippet.slice(0, 1500));
    const showingMatches = await page.getByText(/showing/i).allInnerTexts().catch(() => []);
    console.log('\nAll text matching /showing/i:', showingMatches);
  }
  if (warns.length > 0) {
    console.log('\nMulti-match selectors:');
    warns.forEach(w => console.log(`  ! ${w.name} (count=${w.count})`));
  }
  if (fails.length === 0 && warns.length === 0) {
    console.log('\nAll selectors matched exactly one element.');
  }

  await browser.close();
})();
