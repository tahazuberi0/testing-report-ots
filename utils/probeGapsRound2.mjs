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
      console.log(`  ${status.padEnd(10)} | ${label} → "${text.slice(0, 60)}"`);
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

  // === SIGN UP ===
  console.log('\n=== SIGN UP (refine) ===');
  await page.goto('https://edu.offtheschool.io/signup', { waitUntil: 'domcontentloaded', timeout: 45000 });
  await page.getByRole('heading', { name: 'Create your free account' }).waitFor({ state: 'visible', timeout: 20000 });
  
  // Exact selectors for found items
  await probe(page, 'Create Account button', p => p.getByRole('button', { name: /create account/i }));
  await probe(page, 'Continue with Google button', p => p.getByRole('button', { name: /continue with google/i }));
  await probe(page, 'Back to Home getByText', p => p.getByText(/^back to home$/i));
  await probe(page, 'Checkbox input[type=checkbox]', p => p.locator('input[type="checkbox"]'));
  await probe(page, 'Checkbox getByRole', p => p.getByRole('checkbox'));

  // === DASHBOARD (refine) ===
  console.log('\n=== DASHBOARD (refine) ===');
  await login(page);
  await page.goto('https://edu.offtheschool.io/dashboard', { waitUntil: 'domcontentloaded', timeout: 45000 });
  await page.waitForTimeout(5000);

  await probe(page, 'Day Streak heading/text', p => p.getByText(/day streak/i));
  await probe(page, 'Day count text', p => p.getByText(/^\d+ days?$/i));
  await probe(page, 'XP text', p => p.getByText(/xp$/i));
  await probe(page, 'Weekly Progress heading', p => p.getByRole('heading', { name: /weekly progress/i }));
  await probe(page, 'Weekly Progress text', p => p.getByText('Weekly Progress'));
  await probe(page, 'Feedback text', p => p.getByText('Feedback'));
  await probe(page, 'Logout text exact', p => p.getByText('Logout'));
  await probe(page, 'Logout text alt', p => p.getByText('Log out'));
  await probe(page, 'Logout role', p => p.getByRole('button', { name: /logout|log out/i }));

  // === ENROLLMENTS (refine) ===
  console.log('\n=== ENROLLMENTS (refine) ===');
  await page.goto('https://edu.offtheschool.io/dashboard/manage-enrollment', { waitUntil: 'domcontentloaded', timeout: 45000 });
  await page.waitForTimeout(5000);

  await probe(page, 'ACTIVE text exact', p => p.getByText('ACTIVE'));
  await probe(page, 'Active text exact', p => p.getByText('Active'));
  await probe(page, 'ACTIVE first()', p => p.getByText('ACTIVE').first());
  await probe(page, 'Trash icon button alt', p => p.locator('button:has(svg[class*="trash"]), button:has(svg[class*="delete"])'));
  await probe(page, 'Delete icon locator', p => p.locator('[class*="trash"], [class*="delete"]'));
  // Print enrollment page body snippet
  const bodyText = await page.locator('body').innerText().catch(() => '');
  console.log('  Body snippet:', bodyText.slice(0, 400));

  // === QUIZ TRACKING (refine) ===
  console.log('\n=== QUIZ TRACKING (refine) ===');
  await page.goto('https://edu.offtheschool.io/dashboard/quiz-tracking', { waitUntil: 'domcontentloaded', timeout: 45000 });
  await page.waitForTimeout(5000);

  await probe(page, 'Back button standalone', p => p.getByRole('button', { name: 'Back' }));
  await probe(page, 'Total Attempts', p => p.getByText('Total Attempts'));
  await probe(page, 'Quizzes Taken', p => p.getByText('Quizzes Taken'));
  await probe(page, 'Average Score', p => p.getByText('Average Score'));
  await probe(page, 'Best Score', p => p.getByText('Best Score'));
  await probe(page, 'Quiz Attempts by Chapter', p => p.getByText('Quiz Attempts by Chapter'));
  // Try to click Sort By dropdown and probe options
  const sortBy = page.getByText('Sort By');
  if (await sortBy.count() > 0) {
    await sortBy.click();
    await page.waitForTimeout(1000);
    await probe(page, 'Sort option: Newest', p => p.getByText('Newest'));
    await probe(page, 'Sort option: Oldest', p => p.getByText('Oldest'));
    await probe(page, 'Sort option: Highest', p => p.getByText('Highest'));
    await probe(page, 'Sort option: Lowest', p => p.getByText('Lowest'));
    // close by clicking elsewhere
    await page.keyboard.press('Escape');
    await page.waitForTimeout(500);
  }
  // Try show results dropdown
  const showResults = page.getByText('Show Results');
  if (await showResults.count() > 0) {
    await showResults.click();
    await page.waitForTimeout(1000);
    await probe(page, 'Show option: All', p => p.getByText('All'));
    await probe(page, 'Show option: Latest 5', p => p.getByText('Latest 5'));
    await probe(page, 'Show option: Latest 10', p => p.getByText('Latest 10'));
    await page.keyboard.press('Escape');
  }

  // === LEADERBOARD (refine) ===
  console.log('\n=== LEADERBOARD (refine) ===');
  await page.goto('https://edu.offtheschool.io/dashboard/leaderboard', { waitUntil: 'domcontentloaded', timeout: 45000 });
  await page.waitForTimeout(5000);

  await probe(page, 'All Subjects', p => p.getByText('All Subjects'));
  await probe(page, 'By Subject', p => p.getByText('By Subject'));
  await probe(page, 'By Chapter', p => p.getByText('By Chapter'));
  await probe(page, 'attempts text first', p => p.getByText(/attempts/).first());
  await probe(page, 'pts text first', p => p.getByText(/pts/).first());

  // === FAVORITE CHAPTERS (refine) ===
  console.log('\n=== FAVORITE CHAPTERS (refine) ===');
  await page.goto('https://edu.offtheschool.io/dashboard/favorite-chapters', { waitUntil: 'domcontentloaded', timeout: 45000 });
  await page.waitForTimeout(5000);

  await probe(page, 'No Favorite Chapters Yet heading', p => p.getByRole('heading', { name: 'No Favorite Chapters Yet' }));
  await probe(page, 'Start adding chapters', p => p.getByText('Start adding chapters'));
  await probe(page, 'Browse Chapters button', p => p.getByRole('button', { name: 'Browse Chapters' }));

  // === PROFILE (refine) ===
  console.log('\n=== PROFILE (refine) ===');
  await page.goto('https://edu.offtheschool.io/dashboard/profile', { waitUntil: 'domcontentloaded', timeout: 45000 });
  await page.waitForTimeout(5000);

  await probe(page, 'Date of Birth label', p => p.getByText('Date of Birth'));
  await probe(page, 'Date of Birth input', p => p.getByRole('textbox', { name: /date of birth|dob/i }));
  await probe(page, 'Profile completion % text', p => p.getByText(/\d+%/).first());
  await probe(page, 'Back button', p => p.getByRole('button', { name: 'Back' }));
  await probe(page, 'File upload input', p => p.locator('input[type="file"]'));
  await probe(page, 'Educational Information heading', p => p.getByRole('heading', { name: /educational/i }));
  await probe(page, 'Educational Info tab text', p => p.getByText('Educational Information'));
  // click Education tab
  const eduTab = page.getByRole('tab', { name: /educational/i });
  if (await eduTab.count() > 0) {
    await eduTab.click();
    await page.waitForTimeout(2000);
    await probe(page, 'Educational Information heading after tab', p => p.getByRole('heading', { name: /educational/i }));
  }

  // === CHANGE PASSWORD (deeper) ===
  console.log('\n=== CHANGE PASSWORD (deeper) ===');
  await page.goto('https://edu.offtheschool.io/dashboard/profile', { waitUntil: 'domcontentloaded', timeout: 45000 });
  await page.waitForTimeout(3000);
  const settingsTab = page.getByRole('tab', { name: /settings/i });
  if (await settingsTab.count() > 0) {
    await settingsTab.click();
    await page.waitForTimeout(2000);
    // Probe for change password button/link
    await probe(page, 'Change Password button', p => p.getByRole('button', { name: /change password/i }));
    const changePwdBtn = page.getByRole('button', { name: /change password/i });
    if (await changePwdBtn.count() > 0) {
      await changePwdBtn.click();
      await page.waitForTimeout(3000);
      console.log('  After clicking Change Password, URL:', page.url());
      // Now we should be on the change password screen
      // The OTP fields won't show until Send OTP is clicked and email entered
      // Probe the initial screen
      await probe(page, 'Email input on change pwd', p => p.getByRole('textbox', { name: /email/i }));
      await probe(page, 'Send OTP button', p => p.getByRole('button', { name: /send otp/i }));
      await probe(page, 'Verification OTP heading', p => p.getByRole('heading', { name: /verification otp/i }));
    }
  }

  console.log('\n=== ROUND 2 COMPLETE ===');
  await browser.close();
})();
