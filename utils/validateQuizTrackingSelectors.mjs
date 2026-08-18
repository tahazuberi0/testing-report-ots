import { chromium } from 'playwright';

const LOGIN_URL = 'https://edu.offtheschool.io/login';
const QUIZ_URL = 'https://edu.offtheschool.io/dashboard/quiz-tracking';
const CREDS = { email: 'taha.zuberi@offtheschool.io', password: '1234This.' };

const selectors = [
  { name: 'Sidebar Quiz Tracking group', fn: p => p.getByRole('group').filter({ hasText: 'Quiz Tracking' }) },
  { name: 'BackQuiz Performance text', fn: p => p.getByText('BackQuiz Performance') },
  { name: 'Quiz Performance Tracking heading', fn: p => p.getByRole('heading', { name: 'Quiz Performance Tracking' }) },
  { name: 'Track your progress text', fn: p => p.getByText('Track your progress and') },
  { name: 'Filters heading', fn: p => p.getByRole('heading', { name: 'Filters' }) },
  { name: 'Filter by Quiz paragraph', fn: p => p.getByRole('paragraph').filter({ hasText: 'Filter by Quiz' }) },
  { name: 'Sort By paragraph', fn: p => p.getByRole('paragraph').filter({ hasText: 'Sort By' }) },
  { name: 'Show Results paragraph', fn: p => p.getByRole('paragraph').filter({ hasText: 'Show Results' }) },
  { name: 'Content card .css-1iob08', fn: p => p.locator('.css-1iob08'), countOnly: true },
  { name: 'Filter wrapper .css-1qmf9hg', fn: p => p.locator('.css-1qmf9hg'), countOnly: true },
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

  await page.goto(QUIZ_URL, { waitUntil: 'networkidle', timeout: 45000 });
  await page.waitForTimeout(3000);
  console.log('Current URL:', page.url());

  const headings = await page.getByRole('heading').allInnerTexts();
  console.log('All headings:', headings);

  console.log('\n=== Quiz Tracking Selector Validation ===\n');
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
