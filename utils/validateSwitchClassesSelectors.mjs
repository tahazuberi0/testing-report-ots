import { chromium } from 'playwright';

const LOGIN_URL = 'https://edu.offtheschool.io/login';
const CHANGE_COURSE_URL = 'https://edu.offtheschool.io/dashboard/change-course';
const CREDS = { email: 'taha.zuberi@offtheschool.io', password: '1234This.' };

const selectors = [
  { name: 'Back button', fn: p => p.getByRole('button', { name: 'Back' }) },
  { name: 'Switch Classes heading', fn: p => p.getByRole('heading', { name: 'Switch Classes' }) },
  { name: 'Select Your Class heading', fn: p => p.getByRole('heading', { name: 'Select Your Class' }) },
  { name: 'Available Classes text', fn: p => p.getByText('Available Classes') },
  { name: 'Choose from enrolled text', fn: p => p.getByText('Choose from your enrolled') },
  { name: 'Class button', fn: p => p.getByRole('button', { name: 'Class' }) },
  { name: 'Your Progress heading', fn: p => p.getByRole('heading', { name: 'Your Progress' }) },
  { name: 'Overall completion text', fn: p => p.getByText('Overall completion for your') },
  { name: 'Progress.nth(1)', fn: p => p.getByText('Progress').nth(1) },
  { name: 'My Subjects heading', fn: p => p.getByRole('heading', { name: 'My Subjects' }) },
  { name: 'Grid view button', fn: p => p.getByRole('button', { name: 'Grid view' }) },
  { name: 'Carousel view button', fn: p => p.getByRole('button', { name: 'Carousel view' }) },
  { name: 'Watch video first', fn: p => p.getByRole('button', { name: 'Watch video' }).first() },
  { name: 'Start Learning first', fn: p => p.getByRole('button', { name: 'Start Learning' }).first() },
  { name: 'Watch video (all)', fn: p => p.getByRole('button', { name: 'Watch video' }), countOnly: true },
  { name: 'Start Learning (all)', fn: p => p.getByRole('button', { name: 'Start Learning' }), countOnly: true },
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

  await page.goto(CHANGE_COURSE_URL, { waitUntil: 'networkidle', timeout: 45000 });
  await page.waitForTimeout(3000);
  console.log('Current URL:', page.url());
  await page.screenshot({ path: 'utils/switch-classes-debug.png', fullPage: true });
  const bodyText = await page.locator('body').innerText().catch(() => '(empty)');
  console.log('Body text (first 2000 chars):', bodyText.slice(0, 2000));
  
  const headings = await page.getByRole('heading').allInnerTexts();
  console.log('All headings:', headings);
  
  const switchText = await page.getByText(/switch/i).count();
  console.log('Elements matching /switch/i:', switchText);

  console.log('\n=== Switch Classes Selector Validation ===\n');
  const results = [];
  for (const sel of selectors) {
    const loc = sel.fn(page);
    const count = await loc.count();
    const status = sel.countOnly
      ? (count > 0 ? 'OK' : 'FAIL')
      : (count === 1 ? 'OK' : (count === 0 ? 'FAIL (0)' : `WARN (${count})`));
    const line = `${status.padEnd(12)} | ${sel.name} → count=${count}`;
    console.log(line);
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
