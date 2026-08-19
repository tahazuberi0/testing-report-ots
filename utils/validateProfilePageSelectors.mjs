import { chromium } from 'playwright';

const LOGIN_URL = 'https://edu.offtheschool.io/login';
const PROFILE_URL = 'https://edu.offtheschool.io/dashboard/profile';
const CREDS = { email: 'taha.zuberi@offtheschool.io', password: '1234This.' };

const personalInfoSelectors = [
  { name: 'My Profile heading', fn: p => p.getByRole('heading', { name: 'My Profile' }) },
  { name: 'User Options button', fn: p => p.getByRole('button', { name: 'User Options' }) },
  { name: 'User Avatar image', fn: p => p.getByRole('img', { name: 'User Avatar' }) },
  { name: 'Change profile picture button', fn: p => p.getByRole('button', { name: 'Change profile picture' }) },
  { name: 'Personal Info tab', fn: p => p.getByRole('button', { name: 'Personal Info' }) },
  { name: 'Educational Info tab', fn: p => p.getByRole('button', { name: 'Educational Info' }) },
  { name: 'Settings tab', fn: p => p.getByRole('button', { name: 'Settings' }) },
  { name: 'First Name textbox', fn: p => p.getByRole('textbox', { name: 'First Name' }) },
  { name: 'Last Name textbox', fn: p => p.getByRole('textbox', { name: 'Last Name' }) },
  { name: 'City textbox', fn: p => p.getByRole('textbox', { name: 'City' }) },
  { name: 'Country textbox', fn: p => p.getByRole('textbox', { name: 'Country' }) },
  { name: 'Phone Number textbox', fn: p => p.getByRole('textbox', { name: 'Phone Number' }) },
  { name: 'Gender Male label', fn: p => p.locator('label').filter({ hasText: /^Male$/ }) },
  { name: 'Gender Female label', fn: p => p.locator('label').filter({ hasText: 'Female' }) },
  { name: 'Gender Other label', fn: p => p.locator('label').filter({ hasText: 'Other' }) },
  { name: 'Role Parent label', fn: p => p.locator('label').filter({ hasText: 'Parent' }) },
  { name: 'Role Teacher label', fn: p => p.locator('label').filter({ hasText: 'Teacher' }) },
  { name: 'Role Student label', fn: p => p.locator('label').filter({ hasText: 'Student' }) },
  { name: 'Role Professional label', fn: p => p.locator('label').filter({ hasText: 'Professional' }) },
  { name: 'Update my Profile button', fn: p => p.getByRole('button', { name: 'Update my Profile' }) },
];

const educationalInfoSelectors = [
  { name: 'Institution Name textbox', fn: p => p.getByRole('textbox', { name: 'Institution Name' }) },
  { name: 'Passing Year spinbutton', fn: p => p.getByRole('spinbutton', { name: 'Passing Year' }) },
  { name: 'Checkbox .chakra-checkbox__control', fn: p => p.locator('.chakra-checkbox__control'), countOnly: true },
];

const settingsSelectors = [
  { name: 'Account Settings heading', fn: p => p.getByRole('heading', { name: 'Account Settings' }) },
  { name: 'Change Password button', fn: p => p.getByRole('button', { name: 'Change Password' }) },
];

async function validate(page, selectors, label) {
  console.log(`\n=== ${label} ===\n`);
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
  return results;
}

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

  await page.goto(PROFILE_URL, { waitUntil: 'networkidle', timeout: 45000 });
  await page.getByRole('heading', { name: 'My Profile' }).waitFor({ state: 'visible', timeout: 20000 });

  const r1 = await validate(page, personalInfoSelectors, 'Personal Info Tab');

  await page.getByRole('button', { name: 'Educational Info' }).click();
  await page.getByRole('textbox', { name: 'Institution Name' }).waitFor({ state: 'visible', timeout: 10000 }).catch(() => {});
  await page.waitForTimeout(1000);
  const r2 = await validate(page, educationalInfoSelectors, 'Educational Info Tab');

  await page.getByRole('button', { name: 'Settings' }).click();
  await page.waitForTimeout(2000);
  const r3 = await validate(page, settingsSelectors, 'Settings Tab');

  const all = [...r1, ...r2, ...r3];
  const fails = all.filter(r => r.status.startsWith('FAIL'));
  const warns = all.filter(r => r.status.startsWith('WARN'));

  console.log('\n=== Summary ===');
  if (fails.length) { console.log('\nFailing:'); fails.forEach(f => console.log(`  ✗ ${f.name} (${f.count})`)); }
  if (warns.length) { console.log('\nMulti-match:'); warns.forEach(w => console.log(`  ! ${w.name} (${w.count})`)); }
  if (!fails.length && !warns.length) console.log('\nAll selectors matched exactly one element.');

  await browser.close();
})();
