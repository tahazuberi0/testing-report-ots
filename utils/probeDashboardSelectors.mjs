import { chromium } from '@playwright/test';

const browser = await chromium.launch({ headless: true });
const page = await browser.newPage();

await page.goto('https://edu.offtheschool.io/login', { waitUntil: 'domcontentloaded' });
await page.getByRole('textbox', { name: 'Email Address' }).fill('taha.zuberi@offtheschool.io');
await page.getByLabel(/^Password/).or(page.getByRole('textbox', { name: 'Password' })).fill('1234This.');
await page.getByRole('button', { name: 'Sign In' }).click();
await page.waitForURL(/\/(home|dashboard)/i, { timeout: 45000 }).catch(() => {});
console.log('post-login url', page.url());

if (!/dashboard/i.test(page.url())) {
  await page.goto('https://edu.offtheschool.io/dashboard', { waitUntil: 'domcontentloaded' });
}
await page.waitForTimeout(3000);
console.log('dashboard url', page.url());
console.log('body snippet', (await page.locator('body').innerText()).slice(0, 1200));

const checks = [
  ['otsLogo', page.getByRole('img', { name: 'OTS logo' })],
  ['otsLogoAlt', page.getByRole('img', { name: /OTS logo/i })],
  ['menuIcon', page.getByRole('img', { name: 'menu icon' })],
  ['navDashboard', page.getByRole('group').filter({ hasText: 'Dashboard' })],
  ['navSwitchClass', page.getByRole('group').filter({ hasText: 'Switch Class' })],
  ['navReels', page.getByRole('group').filter({ hasText: 'Reels' })],
  ['navEnrollments', page.getByRole('group').filter({ hasText: 'Enrollments' })],
  ['navQuizTracking', page.getByRole('group').filter({ hasText: 'Quiz Tracking' })],
  ['navLeaderboard', page.getByRole('group').filter({ hasText: 'Leaderboard' })],
  ['navFavoriteChapters', page.getByRole('group').filter({ hasText: 'Favorite Chapters' })],
  ['yourProgressHeading', page.getByRole('heading', { name: 'Your Progress' })],
  ['overallCompletion', page.getByText('Overall completion for your')],
  ['progressNth1', page.getByText('Progress').nth(1)],
  ['mySubjectsHeading', page.getByRole('heading', { name: 'My Subjects' })],
  ['mySubjectsEnrolled', page.getByText(/My Subjects\s*\d*\s*Enrolled/i)],
  ['gridView', page.getByRole('button', { name: 'Grid view' })],
  ['carouselView', page.getByRole('button', { name: 'Carousel view' })],
  ['scrollLeft', page.getByRole('button', { name: 'Scroll Left' })],
  ['scrollRight', page.getByRole('button', { name: 'Scroll Right' })],
  ['watchVideo', page.getByRole('button', { name: 'Watch video' })],
  ['watchVideoFirst', page.getByRole('button', { name: 'Watch video' }).first()],
  ['startLearning', page.getByRole('button', { name: 'Start Learning' })],
  ['startLearningFirst', page.getByRole('button', { name: 'Start Learning' }).first()],
  ['closeBtn', page.getByRole('button', { name: 'Close' })],
  ['css18o5850', page.locator('.css-18o5850')],
  ['css1dpjja7', page.locator('.css-1dpjja7')],
  ['css10xamzf', page.locator('.css-10xamzf')],
];

const report = [];
for (const [name, loc] of checks) {
  const count = await loc.count();
  let visible = false;
  try {
    visible = count > 0 ? await loc.first().isVisible() : false;
  } catch {
    visible = false;
  }
  report.push({
    name,
    count,
    visible,
    status: count === 0 ? 'MISSING' : count === 1 ? 'OK' : 'MULTI',
  });
}

console.log(JSON.stringify(report, null, 2));
await browser.close();
