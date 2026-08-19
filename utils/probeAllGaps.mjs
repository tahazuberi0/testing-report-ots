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
    console.log(`  ${status.padEnd(10)} | ${label}`);
    return { label, count, status };
  } catch (e) {
    console.log(`  ERROR      | ${label} — ${e.message.slice(0, 80)}`);
    return { label, count: -1, status: 'ERROR' };
  }
}

(async () => {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext();
  const page = await context.newPage();

  // ====== UNAUTHENTICATED PAGES ======

  // --- Sign Up page ---
  console.log('\n=== SIGN UP PAGE ===');
  await page.goto('https://edu.offtheschool.io/signup', { waitUntil: 'domcontentloaded', timeout: 45000 });
  await page.getByRole('heading', { name: 'Create your free account' }).waitFor({ state: 'visible', timeout: 20000 });

  await probe(page, 'Create Account button (role)', p => p.getByRole('button', { name: /create account/i }));
  await probe(page, 'Continue with Google (role)', p => p.getByRole('button', { name: /continue with google|sign.* google/i }));
  await probe(page, 'Continue with Google (text)', p => p.getByText(/continue with google/i));
  await probe(page, 'Back to Home link (role)', p => p.getByRole('link', { name: /back to home/i }));
  await probe(page, 'Back to Home (text)', p => p.getByText(/back to home/i));
  await probe(page, 'Password strength checklist container', p => p.locator('[class*="password-strength"], [class*="checklist"], [class*="requirement"]'));
  await probe(page, 'Checkbox input[type=checkbox]', p => p.locator('input[type="checkbox"]'));
  await probe(page, 'Checkbox role', p => p.getByRole('checkbox'));

  // --- Home Page ---
  console.log('\n=== HOME PAGE ===');
  await page.goto('https://edu.offtheschool.io', { waitUntil: 'domcontentloaded', timeout: 45000 });
  await page.waitForTimeout(5000);

  await probe(page, 'New: OTS Reels CTA', p => p.getByText(/new.*ots reels/i));
  await probe(page, 'Watch How It Works CTA', p => p.getByRole('link', { name: /watch how it works/i }));
  await probe(page, 'Watch How It Works (text)', p => p.getByText(/watch how it works/i));
  await probe(page, 'Office Suite skill', p => p.getByText(/office suite/i));
  await probe(page, 'Course count badge (100+)', p => p.getByText(/100\+ courses/i));
  await probe(page, 'Menu button (role)', p => p.getByRole('button', { name: /menu/i }));
  await probe(page, 'Newsletter email field', p => p.getByRole('textbox', { name: /email/i }));
  await probe(page, 'Subscribe button', p => p.getByRole('button', { name: /subscribe/i }));
  await probe(page, 'info@offtheschool.io', p => p.getByText('info@offtheschool.io'));
  await probe(page, 'WhatsApp link/text', p => p.getByText(/whatsapp/i));
  await probe(page, 'Chapter video cards', p => p.locator('[class*="video-card"]'));

  // --- Explore page ---
  console.log('\n=== EXPLORE PAGE ===');
  await page.goto('https://edu.offtheschool.io/explore', { waitUntil: 'domcontentloaded', timeout: 45000 });
  await page.waitForTimeout(5000);

  await probe(page, 'Header Home link', p => p.getByRole('link', { name: 'Home' }));
  await probe(page, 'Header Reels link', p => p.getByRole('link', { name: 'Reels' }));
  await probe(page, 'Header Meet Our Team', p => p.getByRole('link', { name: /meet our team/i }));
  await probe(page, 'Header Contact Us', p => p.getByRole('link', { name: /contact us/i }));
  await probe(page, 'Footer Download App', p => p.getByText(/download.*app/i));
  await probe(page, 'Footer Google Play', p => p.getByRole('link', { name: /google play/i }));
  await probe(page, 'Footer Stay Updated email', p => p.getByRole('textbox', { name: /email/i }));
  await probe(page, 'Footer FAQ', p => p.getByRole('link', { name: /faq/i }));
  await probe(page, 'Footer Privacy Policy', p => p.getByRole('link', { name: /privacy policy/i }));
  await probe(page, 'Footer Terms of Use', p => p.getByRole('link', { name: /terms of use/i }));
  await probe(page, 'Explore Courses / Let\'s Start button', p => p.getByRole('button', { name: /explore courses/i }));

  // --- Reels page ---
  console.log('\n=== REELS PAGE ===');
  await page.goto('https://edu.offtheschool.io/reels', { waitUntil: 'domcontentloaded', timeout: 45000 });
  await page.waitForTimeout(5000);

  await probe(page, 'Mute/Unmute icon (role img)', p => p.getByRole('img', { name: /mute|unmute|speaker/i }));
  await probe(page, 'Mute/Unmute button (role)', p => p.getByRole('button', { name: /mute|unmute|speaker/i }));
  await probe(page, 'Mute icon SVG', p => p.locator('svg[class*="mute"], [aria-label*="mute"], [aria-label*="speaker"]'));
  await probe(page, 'Bookmark icon (role)', p => p.getByRole('button', { name: /bookmark|save/i }));
  await probe(page, 'Down Arrow button', p => p.getByRole('button', { name: /down|next|arrow/i }));
  await probe(page, 'Show more text', p => p.getByText(/show more/i));
  await probe(page, 'Share button', p => p.getByRole('button', { name: /share/i }));
  await probe(page, 'Share text', p => p.getByText(/share/i));
  await probe(page, 'Video element', p => p.locator('video'));
  await probe(page, 'Back arrow / back button', p => p.getByRole('button', { name: /back/i }));

  // ====== AUTHENTICATED PAGES ======
  console.log('\n=== LOGGING IN ===');
  await login(page);
  console.log('Logged in, URL:', page.url());

  // --- Dashboard ---
  console.log('\n=== DASHBOARD ===');
  await page.goto('https://edu.offtheschool.io/dashboard', { waitUntil: 'domcontentloaded', timeout: 45000 });
  await page.waitForTimeout(5000);

  await probe(page, 'Day Streak text (e.g. "2 Days")', p => p.getByText(/\d+\s*days?/i).first());
  await probe(page, 'Best Streak text', p => p.getByText(/best streak/i));
  await probe(page, 'Accumulated XP', p => p.getByText(/\d[\d,]*\s*xp/i));
  await probe(page, 'Weekly Progress text', p => p.getByText(/weekly progress/i));
  await probe(page, 'Weekly goal text', p => p.getByText(/weekly goal/i));
  await probe(page, 'Feedback sidebar', p => p.getByText(/feedback/i));
  await probe(page, 'Logout sidebar', p => p.getByText(/logout|log out/i));
  await probe(page, 'Subject card COMPUTER', p => p.getByText(/^computer$/i));
  await probe(page, 'Subject card MATHEMATICS', p => p.getByText(/^mathematics$/i));
  await probe(page, 'Profile icon img', p => p.getByRole('img', { name: /profile|avatar/i }));

  // --- Enrollments ---
  console.log('\n=== ENROLLMENTS ===');
  await page.goto('https://edu.offtheschool.io/dashboard/manage-enrollment', { waitUntil: 'domcontentloaded', timeout: 45000 });
  await page.waitForTimeout(5000);

  await probe(page, 'Active enrollments count text', p => p.getByText(/\d+\s*active\s*enrollment/i));
  await probe(page, 'ACTIVE status badge', p => p.getByText(/active/i));
  await probe(page, 'Trash/Remove icon button', p => p.getByRole('button', { name: /remove|delete|trash|unenroll/i }));
  await probe(page, 'Trash icon img', p => p.getByRole('img', { name: /remove|delete|trash/i }));
  await probe(page, 'Profile icon (T)', p => p.getByText('T').first());

  // --- Switch Classes ---
  console.log('\n=== SWITCH CLASSES ===');
  await page.goto('https://edu.offtheschool.io/dashboard/change-course', { waitUntil: 'domcontentloaded', timeout: 45000 });
  await page.waitForTimeout(5000);

  await probe(page, 'Class dropdown option Class 6', p => p.getByText(/class 6/i));
  await probe(page, 'Class dropdown option Class 9', p => p.getByText(/class 9/i));
  await probe(page, 'Star ratings', p => p.locator('[class*="star"], svg[class*="star"]'));
  await probe(page, 'Computer subject name', p => p.getByText(/^computer$/i));
  await probe(page, 'Total Chapters text', p => p.getByText(/total chapters/i));

  // --- Quiz Tracking ---
  console.log('\n=== QUIZ TRACKING ===');
  await page.goto('https://edu.offtheschool.io/dashboard/quiz-tracking', { waitUntil: 'domcontentloaded', timeout: 45000 });
  await page.waitForTimeout(5000);

  await probe(page, 'Total Attempts stat', p => p.getByText(/total attempts/i));
  await probe(page, 'Quizzes Taken stat', p => p.getByText(/quizzes taken/i));
  await probe(page, 'Average Score stat', p => p.getByText(/average score/i));
  await probe(page, 'Best Score stat', p => p.getByText(/best score/i));
  await probe(page, 'Quiz Attempts by Chapter heading', p => p.getByText(/quiz attempts by chapter/i));
  await probe(page, 'Accordion row / quiz card', p => p.locator('[class*="accordion"]'));
  await probe(page, 'Back button (standalone)', p => p.getByRole('button', { name: /^back$/i }));
  await probe(page, 'Back button role=link', p => p.getByRole('link', { name: /^back$/i }));
  await probe(page, 'Back text standalone', p => p.getByText(/^back$/i));
  await probe(page, 'Filter option: Newest', p => p.getByText(/^newest$/i));
  await probe(page, 'Filter option: Oldest', p => p.getByText(/^oldest$/i));
  await probe(page, 'Filter option: All (Show Results)', p => p.getByText(/^all$/i));

  // --- Leaderboard ---
  console.log('\n=== LEADERBOARD ===');
  await page.goto('https://edu.offtheschool.io/dashboard/leaderboard', { waitUntil: 'domcontentloaded', timeout: 45000 });
  await page.waitForTimeout(5000);

  await probe(page, 'Podium card container', p => p.locator('[class*="podium"]'));
  await probe(page, 'Rank #1 text', p => p.getByText(/^1$/));
  await probe(page, 'Student list rows', p => p.locator('[class*="leaderboard"] [class*="row"]'));
  await probe(page, 'Attempts text (e.g. "37 attempts")', p => p.getByText(/\d+\s*attempts/i).first());
  await probe(page, 'Points text (e.g. "pts")', p => p.getByText(/\d+\s*pts/i).first());
  await probe(page, 'Filter All Subjects', p => p.getByText(/all subjects/i));
  await probe(page, 'Filter By Subject', p => p.getByText(/by subject/i));
  await probe(page, 'Filter By Chapter', p => p.getByText(/by chapter/i));
  await probe(page, 'Profile icon header', p => p.getByRole('img', { name: /profile|avatar/i }));

  // --- Favorite Chapters ---
  console.log('\n=== FAVORITE CHAPTERS ===');
  await page.goto('https://edu.offtheschool.io/dashboard/favorite-chapters', { waitUntil: 'domcontentloaded', timeout: 45000 });
  await page.waitForTimeout(5000);

  await probe(page, 'No Favorite Chapters Yet heading', p => p.getByRole('heading', { name: /no favorite chapters/i }));
  await probe(page, 'No Favorite Chapters text', p => p.getByText(/no favorite chapters/i));
  await probe(page, 'Heart icon empty state', p => p.locator('[class*="heart"], svg[class*="heart"]'));
  await probe(page, 'Start adding chapters text', p => p.getByText(/start adding chapters/i));
  await probe(page, 'Browse Chapters button', p => p.getByRole('button', { name: /browse chapters/i }));
  await probe(page, 'Browse Chapters link', p => p.getByRole('link', { name: /browse chapters/i }));
  await probe(page, 'Browse Chapters text', p => p.getByText(/browse chapters/i));

  // --- Profile Page ---
  console.log('\n=== PROFILE PAGE ===');
  await page.goto('https://edu.offtheschool.io/dashboard/profile', { waitUntil: 'domcontentloaded', timeout: 45000 });
  await page.waitForTimeout(5000);

  await probe(page, 'Date of Birth field label', p => p.getByText(/date of birth/i));
  await probe(page, 'Date of Birth input', p => p.getByRole('textbox', { name: /date of birth/i }));
  await probe(page, 'Profile completion widget %', p => p.getByText(/\d+%/));
  await probe(page, 'Back button', p => p.getByRole('button', { name: /back/i }));
  await probe(page, 'Back link', p => p.getByRole('link', { name: /back/i }));
  await probe(page, 'Back text ← Back', p => p.getByText(/←.*back/i));
  await probe(page, 'Success notification', p => p.getByText(/success|saved|updated/i));
  await probe(page, 'Change profile picture', p => p.getByRole('button', { name: /change profile picture/i }));
  await probe(page, 'File upload input', p => p.locator('input[type="file"]'));
  await probe(page, 'Educational Info heading', p => p.getByRole('heading', { name: /educational info/i }));

  // --- Change Password ---
  console.log('\n=== CHANGE PASSWORD ===');
  await page.goto('https://edu.offtheschool.io/dashboard/profile', { waitUntil: 'domcontentloaded', timeout: 45000 });
  await page.waitForTimeout(3000);
  // Navigate to Settings tab then Change Password
  const settingsTab = page.getByRole('tab', { name: /settings/i });
  if (await settingsTab.count() > 0) {
    await settingsTab.click();
    await page.waitForTimeout(2000);
    const changePwdBtn = page.getByRole('button', { name: /change password/i });
    if (await changePwdBtn.count() > 0) {
      await changePwdBtn.click();
      await page.waitForTimeout(3000);
    }
  }
  console.log('Change Password URL:', page.url());

  await probe(page, 'OTP input fields', p => p.locator('input[type="tel"], input[type="number"], [class*="otp"], [class*="pin"]'));
  await probe(page, 'New password field', p => p.getByRole('textbox', { name: /new password/i }));
  await probe(page, 'Confirm password field', p => p.getByRole('textbox', { name: /confirm password/i }));
  await probe(page, 'Submit/Confirm button', p => p.getByRole('button', { name: /submit|confirm|verify/i }));

  console.log('\n=== ALL PROBES COMPLETE ===');
  await browser.close();
})();
