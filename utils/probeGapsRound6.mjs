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
    return count;
  } catch (e) {
    console.log(`  ERROR      | ${label} — ${e.message.slice(0, 80)}`);
    return -1;
  }
}

(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  await login(page);

  // === PROFILE ===
  console.log('\n=== PROFILE ===');
  await page.goto('https://edu.offtheschool.io/dashboard/profile', { waitUntil: 'domcontentloaded', timeout: 45000 });
  await page.waitForTimeout(5000);

  // Tab-buttons
  await probe(page, 'Personal Info button', p => p.getByRole('button', { name: 'Personal Info' }));
  await probe(page, 'Educational Info button', p => p.getByRole('button', { name: 'Educational Info' }));
  await probe(page, 'Settings button', p => p.getByRole('button', { name: 'Settings' }));
  await probe(page, 'Back button', p => p.getByRole('button', { name: 'Back' }));
  await probe(page, 'File input', p => p.locator('input[type="file"]'));
  await probe(page, 'Profile completion %', p => p.getByText(/\d+%/).first());

  // Click Educational Info button
  const eduBtn = page.getByRole('button', { name: 'Educational Info' });
  if (await eduBtn.count() > 0) {
    await eduBtn.click();
    await page.waitForTimeout(2000);
    const headings = await page.getByRole('heading').allInnerTexts();
    console.log('  Educational tab headings:', headings.join(' | '));
    await probe(page, 'Educational Information heading', p => p.getByRole('heading', { name: 'Educational Information' }));
    await probe(page, 'Date of Birth field on edu', p => p.getByText('Date of Birth'));
  }

  // Click Settings button
  const settingsBtn = page.getByRole('button', { name: 'Settings' });
  if (await settingsBtn.count() > 0) {
    await settingsBtn.click();
    await page.waitForTimeout(2000);
    const headings = await page.getByRole('heading').allInnerTexts();
    console.log('  Settings tab headings:', headings.join(' | '));
    await probe(page, 'Change Password button', p => p.getByRole('button', { name: /change password/i }));
  }

  // === EXPLORE: narrower selectors ===
  console.log('\n=== EXPLORE ===');
  await page.goto('https://edu.offtheschool.io/explore', { waitUntil: 'domcontentloaded', timeout: 45000 });
  await page.waitForTimeout(5000);

  await probe(page, 'Header Home link first()', p => p.getByRole('link', { name: 'Home' }).first());
  await probe(page, 'Reels link', p => p.getByRole('link', { name: 'Reels' }));
  await probe(page, 'Reels text exact', p => p.getByText('Reels', { exact: true }));
  await probe(page, 'Meet Our Team link', p => p.getByRole('link', { name: 'Meet Our Team' }));
  await probe(page, 'Contact Us link first', p => p.getByRole('link', { name: 'Contact Us' }).first());
  await probe(page, 'FAQ first', p => p.getByRole('link', { name: 'FAQ' }).first());
  await probe(page, 'Footer Privacy Policy link', p => p.getByRole('link', { name: 'Privacy Policy' }));
  await probe(page, 'Footer Terms of Use link', p => p.getByRole('link', { name: 'Terms of Use' }));
  await probe(page, 'Stay Updated email', p => p.getByRole('textbox', { name: /email/i }));
  await probe(page, 'Download App text', p => p.getByText('Download App'));
  await probe(page, 'Google Play link', p => p.getByRole('link', { name: /google play/i }));

  // === ENROLLMENTS: enrollment count ===
  console.log('\n=== ENROLLMENTS ===');
  await page.goto('https://edu.offtheschool.io/dashboard/manage-enrollment', { waitUntil: 'domcontentloaded', timeout: 45000 });
  await page.waitForTimeout(5000);
  await probe(page, 'Current Enrollments heading', p => p.getByText('Current Enrollments'));
  await probe(page, 'Count 4 (enrollments)', p => p.getByText('4').first());
  await probe(page, 'ACTIVE badge first()', p => p.getByText('ACTIVE', { exact: true }).first());

  // Try to find the trash/unenroll by looking at all accessible names
  const allButtons = await page.getByRole('button').allInnerTexts();
  console.log('  All buttons:', allButtons.join(' | '));

  console.log('\n=== ROUND 6 COMPLETE ===');
  await browser.close();
})();
