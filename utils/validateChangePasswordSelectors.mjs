import { chromium } from 'playwright';

const LOGIN_URL = 'https://edu.offtheschool.io/login';
const PROFILE_URL = 'https://edu.offtheschool.io/dashboard/profile';
const CREDS = { email: 'taha.zuberi@offtheschool.io', password: '1234This.' };

const selectors = [
  { name: 'Change Password heading', fn: p => p.getByRole('heading', { name: 'Change Password' }) },
  { name: 'Email Address* label', fn: p => p.getByText('Email Address*') },
  { name: 'Email Address textbox', fn: p => p.getByRole('textbox', { name: 'Email Address' }) },
  { name: 'Send OTP button', fn: p => p.getByRole('button', { name: 'Send OTP' }) },
  { name: 'Back to Profile button', fn: p => p.getByRole('button', { name: 'Back to Profile' }) },
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

  await page.goto(PROFILE_URL, { waitUntil: 'domcontentloaded' });
  await page.getByRole('heading', { name: 'My Profile' }).waitFor({ state: 'visible', timeout: 20000 });
  await page.getByRole('button', { name: 'Settings' }).click();
  await page.getByRole('button', { name: 'Change Password' }).waitFor({ state: 'visible', timeout: 10000 });
  await page.getByRole('button', { name: 'Change Password' }).click();
  await page.getByRole('heading', { name: 'Change Password' }).waitFor({ state: 'visible', timeout: 15000 });

  console.log('Current URL:', page.url());
  console.log('\n=== Change Password Selector Validation ===\n');

  const results = [];
  for (const sel of selectors) {
    const loc = sel.fn(page);
    const count = await loc.count();
    const status = count === 1 ? 'OK' : (count === 0 ? 'FAIL (0)' : `WARN (${count})`);
    console.log(`${status.padEnd(12)} | ${sel.name} → count=${count}`);
    results.push({ name: sel.name, count, status });
  }

  console.log('\n=== Done ===');
  const fails = results.filter(r => r.status.startsWith('FAIL'));
  if (fails.length) {
    console.log('\nFailing:');
    fails.forEach(f => console.log(`  ✗ ${f.name} (${f.count})`));
  } else {
    console.log('\nAll selectors matched exactly one element.');
  }

  await browser.close();
})();
