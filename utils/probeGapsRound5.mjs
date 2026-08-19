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

  // === QUIZ TRACKING: exact text for dropdown options ===
  console.log('\n=== QUIZ TRACKING EXACT OPTIONS ===');
  await page.goto('https://edu.offtheschool.io/dashboard/quiz-tracking', { waitUntil: 'domcontentloaded', timeout: 45000 });
  await page.waitForTimeout(5000);

  // Sort By — open dropdown with force click
  await page.getByRole('paragraph').filter({ hasText: 'Sort By' }).first().click({ force: true });
  await page.waitForTimeout(2000);
  
  // Exact match options
  await probe(page, 'Newest First exact', p => p.getByRole('option', { name: 'Newest First' }));
  await probe(page, 'Oldest First exact', p => p.getByRole('option', { name: 'Oldest First' }));
  await probe(page, 'Highest Score exact', p => p.getByRole('option', { name: 'Highest Score' }));
  await probe(page, 'Lowest Score exact', p => p.getByRole('option', { name: 'Lowest Score' }));
  await page.keyboard.press('Escape');
  await page.waitForTimeout(500);

  // Show Results — open
  await page.getByRole('paragraph').filter({ hasText: 'Show Results' }).first().click({ force: true });
  await page.waitForTimeout(2000);
  await probe(page, 'All Results exact', p => p.getByRole('option', { name: 'All Results' }));
  await probe(page, 'Latest 5 exact', p => p.getByRole('option', { name: 'Latest 5' }));
  await probe(page, 'Latest 10 exact', p => p.getByRole('option', { name: 'Latest 10' }));
  await probe(page, 'Latest 20 exact', p => p.getByRole('option', { name: 'Latest 20' }));
  await probe(page, 'Latest 50 exact', p => p.getByRole('option', { name: 'Latest 50' }));
  await page.keyboard.press('Escape');
  await page.waitForTimeout(500);

  // Filter by Quiz — open
  await page.getByRole('paragraph').filter({ hasText: 'Filter by Quiz' }).first().click({ force: true });
  await page.waitForTimeout(2000);
  await probe(page, 'All Quizzes option', p => p.getByRole('option', { name: 'All Quizzes' }));
  await probe(page, 'Quiz option items', p => p.getByRole('option'));
  await page.keyboard.press('Escape');

  // === HOME PAGE: more probes ===
  console.log('\n=== HOME PAGE ===');
  await page.goto('https://edu.offtheschool.io', { waitUntil: 'domcontentloaded', timeout: 45000 });
  await page.waitForTimeout(5000);
  await probe(page, 'New: OTS Reels text', p => p.getByText('New: OTS Reels'));
  await probe(page, 'Watch How It Works text', p => p.getByText('Watch How It Works'));
  await probe(page, 'info@offtheschool.io', p => p.getByText('info@offtheschool.io'));
  await probe(page, '100+ Courses first', p => p.getByText('100+ Courses').first());

  // === EXPLORE PAGE: Reels link etc ===
  console.log('\n=== EXPLORE PAGE ===');
  await page.goto('https://edu.offtheschool.io/explore', { waitUntil: 'domcontentloaded', timeout: 45000 });
  await page.waitForTimeout(5000);
  await probe(page, 'Reels text', p => p.getByText('Reels'));
  await probe(page, 'Meet Our Team text', p => p.getByText('Meet Our Team'));
  await probe(page, 'Contact Us text', p => p.getByText('Contact Us'));
  await probe(page, 'Home text', p => p.getByText('Home', { exact: true }));
  await probe(page, 'FAQ link', p => p.getByRole('link', { name: 'FAQ' }));

  // === PROFILE TABS: check the actual profile page structure ===
  console.log('\n=== PROFILE STRUCTURE ===');
  await page.goto('https://edu.offtheschool.io/dashboard/profile', { waitUntil: 'domcontentloaded', timeout: 45000 });
  await page.waitForTimeout(5000);
  // Print all buttons on profile page
  const btns = await page.getByRole('button').allInnerTexts();
  console.log('  Buttons:', btns.join(' | '));
  // Print all tabs
  const tabs = await page.getByRole('tab').allInnerTexts();
  console.log('  Tabs:', tabs.join(' | '));
  // Print all headings
  const headings = await page.getByRole('heading').allInnerTexts();
  console.log('  Headings:', headings.join(' | '));
  // Check text matches
  await probe(page, 'Personal Info heading', p => p.getByRole('heading', { name: 'Personal Information' }));
  await probe(page, 'Profile heading', p => p.getByRole('heading', { name: /profile/i }));
  await probe(page, 'Date of Birth label', p => p.getByText('Date of Birth'));

  // Try to find how tabs work — look for clickable text 
  await probe(page, 'Educational Info text', p => p.getByText('Educational Information'));
  await probe(page, 'Settings text', p => p.getByText('Settings'));

  // === DASHBOARD: XP, streak etc exact ===
  console.log('\n=== DASHBOARD EXACT ===');
  await page.goto('https://edu.offtheschool.io/dashboard', { waitUntil: 'domcontentloaded', timeout: 45000 });
  await page.waitForTimeout(5000);
  await probe(page, 'Day Streak!', p => p.getByText(/Day Streak/i));
  await probe(page, 'XP text', p => p.getByText(/\d[\d,]* XP/));
  await probe(page, 'Weekly Progress', p => p.getByText('Weekly Progress'));
  await probe(page, 'Weekly Goal', p => p.getByText(/weekly goal/i));

  console.log('\n=== ROUND 5 COMPLETE ===');
  await browser.close();
})();
