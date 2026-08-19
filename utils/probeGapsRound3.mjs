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
    if (count > 0 && count <= 3) {
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

  // === QUIZ TRACKING ===
  console.log('\n=== QUIZ TRACKING ===');
  await page.goto('https://edu.offtheschool.io/dashboard/quiz-tracking', { waitUntil: 'domcontentloaded', timeout: 45000 });
  await page.waitForTimeout(5000);

  // Sort By dropdown — use getByLabel('Filters') scoped
  const filtersSection = page.getByLabel('Filters');
  await probe(page, 'Sort By (scoped)', p => filtersSection.getByText('Sort By').first());
  
  // Click the Sort By paragraph to open dropdown
  try {
    await filtersSection.getByText('Sort By').first().click();
    await page.waitForTimeout(1500);
    await probe(page, 'Newest option', p => p.getByText('Newest'));
    await probe(page, 'Oldest option', p => p.getByText('Oldest'));
    await probe(page, 'Highest Score option', p => p.getByText('Highest Score'));
    await probe(page, 'Lowest Score option', p => p.getByText('Lowest Score'));
    await probe(page, 'Highest option', p => p.getByText('Highest'));
    await probe(page, 'Lowest option', p => p.getByText('Lowest'));
    await page.keyboard.press('Escape');
    await page.waitForTimeout(500);
  } catch (e) { console.log('  Sort By click failed:', e.message.slice(0, 80)); }

  // Show Results dropdown
  try {
    await filtersSection.getByText('Show Results').first().click();
    await page.waitForTimeout(1500);
    await probe(page, 'All option', p => p.getByText('All'));
    await probe(page, 'Latest 5 option', p => p.getByText('Latest 5'));
    await probe(page, 'Latest 10 option', p => p.getByText('Latest 10'));
    await probe(page, 'Last 5 option', p => p.getByText('Last 5'));
    await probe(page, 'Last 10 option', p => p.getByText('Last 10'));
    await page.keyboard.press('Escape');
    await page.waitForTimeout(500);
  } catch (e) { console.log('  Show Results click failed:', e.message.slice(0, 80)); }

  // Filter by Quiz dropdown
  try {
    await filtersSection.getByText('Filter by Quiz').first().click();
    await page.waitForTimeout(1500);
    await probe(page, 'Filter quiz option (All Quizzes)', p => p.getByText('All Quizzes'));
    await probe(page, 'Filter quiz option list items', p => p.locator('[role="option"]'));
    await probe(page, 'Filter quiz option listbox', p => p.locator('[role="listbox"]'));
    await page.keyboard.press('Escape');
  } catch (e) { console.log('  Filter by Quiz click failed:', e.message.slice(0, 80)); }

  // === DASHBOARD (logout refine) ===
  console.log('\n=== DASHBOARD (Logout) ===');
  await page.goto('https://edu.offtheschool.io/dashboard', { waitUntil: 'domcontentloaded', timeout: 45000 });
  await page.waitForTimeout(3000);
  await probe(page, 'Logout exact', p => p.getByText('Logout', { exact: true }));
  await probe(page, 'Logout role=link', p => p.getByRole('link', { name: /logout/i }));
  await probe(page, 'Logout first', p => p.getByText('Logout').first());

  // === ENROLLMENTS (trash icon) ===
  console.log('\n=== ENROLLMENTS (trash) ===');
  await page.goto('https://edu.offtheschool.io/dashboard/manage-enrollment', { waitUntil: 'domcontentloaded', timeout: 45000 });
  await page.waitForTimeout(5000);
  // Look for the dash/remove icon by examining img or svg elements
  await probe(page, 'img with name containing delete/trash', p => p.getByRole('img', { name: /delete|trash|remove/i }));
  await probe(page, 'button with trash svg', p => p.locator('button svg').first());
  await probe(page, 'All svgs on page count', p => p.locator('svg'));
  // Count the — characters in body snippet suggests the trash is shown as —
  await probe(page, 'Enrollment Current Enrollments heading', p => p.getByText('Current Enrollments'));
  await probe(page, 'Enrollment count 4', p => p.getByText('4'));

  // === LEADERBOARD ===
  console.log('\n=== LEADERBOARD ===');
  await page.goto('https://edu.offtheschool.io/dashboard/leaderboard', { waitUntil: 'domcontentloaded', timeout: 45000 });
  await page.waitForTimeout(5000);
  await probe(page, 'All Subjects exact', p => p.getByText('All Subjects', { exact: true }));
  await probe(page, 'By Subject exact', p => p.getByText('By Subject', { exact: true }));
  await probe(page, 'By Chapter exact', p => p.getByText('By Chapter', { exact: true }));
  await probe(page, 'Rank #1 locator', p => p.getByText('1').first());
  await probe(page, 'attempts text first', p => p.getByText(/\d+ attempts/).first());
  await probe(page, 'pts text first', p => p.getByText(/\d+ pts/).first());

  // === PROFILE ===
  console.log('\n=== PROFILE ===');
  await page.goto('https://edu.offtheschool.io/dashboard/profile', { waitUntil: 'domcontentloaded', timeout: 45000 });
  await page.waitForTimeout(5000);
  // Educational Info tab click
  const eduTab = page.getByRole('tab', { name: /educational/i });
  await probe(page, 'Educational Info tab', p => p.getByRole('tab', { name: /educational/i }));
  if (await eduTab.count() > 0) {
    await eduTab.click();
    await page.waitForTimeout(2000);
    await probe(page, 'Educational heading', p => p.getByRole('heading', { name: /educational/i }));
    // print body text of edu tab
    const bodySnip = await page.locator('[role="tabpanel"]').innerText().catch(() => '(none)');
    console.log('  Edu tab snippet:', bodySnip.slice(0, 300));
  }

  // Change Password deeper — actually navigate to the change-password URL
  console.log('\n=== CHANGE PASSWORD ===');
  // From profile, click Settings tab, then Change Password
  await page.goto('https://edu.offtheschool.io/dashboard/profile', { waitUntil: 'domcontentloaded', timeout: 45000 });
  await page.waitForTimeout(3000);
  const settingsTab = page.getByRole('tab', { name: /settings/i });
  if (await settingsTab.count() > 0) {
    await settingsTab.click();
    await page.waitForTimeout(2000);
    const cpBtn = page.getByRole('button', { name: /change password/i });
    if (await cpBtn.count() > 0) {
      await cpBtn.click();
      await page.waitForTimeout(3000);
      console.log('  URL:', page.url());
      // Enter email and click Send OTP to get to OTP screen
      const emailInput = page.getByRole('textbox', { name: /email/i });
      if (await emailInput.count() > 0) {
        await emailInput.fill(CREDS.email);
        const sendOTP = page.getByRole('button', { name: /send otp/i });
        if (await sendOTP.count() > 0) {
          await sendOTP.click();
          await page.waitForTimeout(5000);
          console.log('  After Send OTP, URL:', page.url());
          // Now check for OTP fields, new password, etc
          await probe(page, 'Verification OTP heading', p => p.getByRole('heading', { name: /verification/i }));
          await probe(page, 'OTP pin inputs', p => p.locator('input[type="tel"]'));
          await probe(page, 'OTP number inputs', p => p.locator('input[type="number"]'));
          await probe(page, 'Verify OTP button', p => p.getByRole('button', { name: /verify/i }));
          await probe(page, 'Resend OTP', p => p.getByText(/resend/i));
          // body
          const bodyText = await page.locator('body').innerText().catch(() => '');
          console.log('  OTP page snippet:', bodyText.slice(0, 300));
        }
      }
    }
  }

  console.log('\n=== ROUND 3 COMPLETE ===');
  await browser.close();
})();
